import { shallowRef } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
interface Route {
    label: string,
    key: string,
    componentPath?: string,
    children?: Array<Route>
}
const useAAuthorityStore = defineStore('asyncRoutes', () => {

    const router = useRouter()

    const routes = shallowRef<Array<Route>>([])

    const codes = shallowRef(['create', 'delete', 'query', 'put', 'reset'])

    const getModules: { [key: string]: null | Record<string, () => Promise<unknown>> } = {
        cacheValue: null,
        get value() {
            if (getModules.cacheValue) {
                return getModules.cacheValue
            } else {
                getModules.cacheValue = import.meta.glob(`@/views/**/index.vue`)
                return getModules.cacheValue
            }
        }
    }
    const getRoutes = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    {
                        label: '首页',
                        key: '',
                        componentPath: 'index'
                    },
                    {
                        label: '权限管理',
                        key: 'authorityManagement',
                        children: [
                            {
                                label: '菜单管理',
                                key: 'menuManagement',
                                componentPath: 'authorityManagement/menuManagement'
                            },
                            {
                                label: '接口管理',
                                key: 'interfaceManagement',
                                componentPath: 'authorityManagement/interfaceManagement'
                            },
                            {
                                label: '角色管理',
                                key: 'roleManagement',
                                componentPath: 'authorityManagement/roleManagement'
                            },
                            {
                                label: '用户管理',
                                key: 'userManagement',
                                componentPath: 'authorityManagement/userManagement'
                            }
                        ]
                    },
                    {
                        label: '顶级路由',
                        key: 'topRoute',
                        children: [
                            {
                                label: '二级路由',
                                key: 'secondRoute',
                                children: [
                                    {
                                        label: '三级路由',
                                        key: 'thirdRoute',
                                        children: [
                                            {
                                                label: '四级路由',
                                                key: 'fourthRoute',
                                                componentPath: 'fourthRoute'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: '基础组件',
                        key: 'baseComponent',
                        children: [
                            {
                                label: '头像',
                                key: 'avator',
                                componentPath: 'baseComponent/avator'
                            },
                            {
                                label: '按钮',
                                key: 'button',
                                componentPath: 'baseComponent/button'
                            },
                            {
                                label: '卡片',
                                key: 'card',
                                componentPath: 'baseComponent/card'
                            },
                            {
                                label: '图标',
                                key: 'icon',
                                componentPath: 'baseComponent/icon'
                            },
                            {
                                label: '标签',
                                key: 'tag',
                                componentPath: 'baseComponent/tag'
                            },
                            {
                                label: '水印',
                                key: 'waterMark',
                                componentPath: 'baseComponent/waterMark'
                            },
                            {
                                label: '轮播',
                                key: 'carousel',
                                componentPath: 'baseComponent/carousel'
                            },
                        ]
                    },
                    {
                        label: '数据组件',
                        key: 'dataComponent',
                        children: [
                            {
                                label: '输入框',
                                key: 'input',
                                componentPath: 'dataComponent/input'
                            },
                            {
                                label: '复选框',
                                key: 'checkbox',
                                componentPath: 'dataComponent/checkbox'
                            },
                            {
                                label: '单选框',
                                key: 'radio',
                                componentPath: 'dataComponent/radio'
                            },
                            {
                                label: '日期选择器',
                                key: 'datePicker',
                                componentPath: 'dataComponent/datePicker'
                            },
                            {
                                label: '表单',
                                key: 'form',
                                componentPath: 'dataComponent/form'
                            },
                            {
                                label: '表格',
                                key: 'table',
                                componentPath: 'dataComponent/table'
                            }, {
                                label: '上传',
                                key: 'upload',
                                componentPath: 'dataComponent/upload'
                            }
                        ]
                    },
                ])
            }, 300)
        })
    }
    const setRoutes = async () => {
        try {
            const res = await getRoutes()
            routes.value = res as Array<Route>
        } catch (error) {
            console.log('获取路由数据错误', error)
        }
    }
    const addFoundRoute = () => {
        router.addRoute('home', {
            path: `/home:afterUser(.*)`,
            component: import('@/views/found/index.vue')
        })
    }
    const addAsyncRoute = (value: Array<Route>) => {
        const modules = getModules.value as Record<string, () => Promise<unknown>>
        value.forEach(item => {
            const { label, key, componentPath, children } = item
            if (children) {
                addAsyncRoute(children)
            } else {
                const routeOption = {
                    path: key,
                    name: key,
                    component: modules[`/src/views/${componentPath}/index.vue`] || modules['/src/views/waitDevelopComponent/index.vue'],
                    meta: {
                        title: label
                    }
                }
                router.addRoute('home', routeOption)
            }
        })
    }

    return {
        codes,
        routes,
        setRoutes,
        addAsyncRoute,
        addFoundRoute
    }

})

export default useAAuthorityStore