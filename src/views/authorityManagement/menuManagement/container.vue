<template>
    <n-message-provider>
        <n-form ref="formRef" inline :label-width="80" :model="params">
            <n-form-item label="菜单名">
                <n-input v-model:value="params.menuName" placeholder="请输入菜单名" />
            </n-form-item>
            <n-form-item label="组件名">
                <n-input v-model:value="params.componentName" placeholder="请输入组件名" />
            </n-form-item>
            <n-form-item label="ID">
                <n-input v-model:value="params.id" placeholder="请输入ID" />
            </n-form-item>
            <n-form-item>
                <n-button attr-type="button" @click="handleQuery" :loading="loading" type="primary">
                    查询
                </n-button>
                <n-button attr-type="button" @click="handleReset" type="tertiary" style="margin-left:20px">
                    重置
                </n-button>
            </n-form-item>
        </n-form>
        <n-data-table :columns="columns" :data="tableData" />
    </n-message-provider>
</template>
<script setup lang="ts">
import { h, reactive, ref } from 'vue'
import { NButton, NPopconfirm, useMessage } from 'naive-ui'
const message = useMessage()
const createColumns = () => {
    return [
        {
            title: 'ID',
            key: 'id'
        },
        {
            title: '菜单名',
            key: 'menuName'
        },
        {
            title: '图标',
            key: 'icon'
        },
        {
            title: '组件名',
            key: 'componentName'
        },
        {
            title: '组件路径',
            key: 'componentPath'
        },
        {
            title: '创建时间',
            key: 'createTime'
        },
        {
            title: '修改日期',
            key: 'updateTime'
        },
        {
            title: '操作',
            key: 'action',
            render(row: { [key: string]: any }, rowIndex: number) {
                return h(NPopconfirm, {
                    negativeText: '取消',
                    positiveText: '确定',
                    onPositiveClick() {
                        row.loading = true
                        setTimeout(() => {
                            tableData.value.splice(rowIndex, 1)
                            message.success('删除成功')
                            row.loading = false
                        }, 1500)
                    },
                }, {
                    trigger: () => h(NButton, { type: 'error', loading: row.loading }, '删除'),
                    default: () => '确认删除该条数据吗?'
                })
            }
        }
    ]
}

const createData = () => {
    return Array.from({ length: 20 }).map((i, index) => {
        i
        return {
            id: index + 1,
            menuName: '菜单管理',
            loading: false,
            icon: null,
            componentName: 'menuManagement',
            componentPath: 'menuManagement/index',
            createTime: new Date().getTime(),
            updateTime: new Date().getTime(),
        }
    })

}
const tableData = ref(createData())
const columns = createColumns()
const params = reactive({
    menuName: '',
    componentName: '',
    id: '',
})
const loading = ref(false)
const handleQuery = () => {
    loading.value = true
    setTimeout(() => {
        loading.value = false
    }, 1000)
}

const handleReset = () => {
    if (loading.value) {
        return
    }
    Object.keys(params).forEach((key) => {
        params[key as 'menuName'] = ''
    })
    tableData.value = createData()
}
</script>