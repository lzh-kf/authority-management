import { createWebHashHistory, createRouter } from 'vue-router'
import useAuthorityStore from '@/store/useAuthorityStore'
const mainPath = '/home'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/login/index.vue')
        },
        {
            path: mainPath,
            name: 'home',
            component: () => import('@/views/home/index.vue'),
            children: [

            ]
        },
    ],
})
let setRoutes: undefined | (() => Promise<boolean>) = async () => {
    const authorityStore = useAuthorityStore()
    try {
        await authorityStore.setRoutes()
        authorityStore.addAsyncRoute(authorityStore.routes)
    } catch (error) {
        console.log('error', error)
        return false
    } finally {
        authorityStore.addFoundRoute()
        return true
    }
}
router.beforeEach(async (guard) => {
    if (guard.path.includes(mainPath)) {
        if (setRoutes) {
            try {
                await setRoutes()
                setRoutes = undefined
            } catch (error) {
                console.log('error', error)
                return false
            } finally {
                return guard.path
            }
        } else {
            return true
        }
    }
    return true
})
export default router