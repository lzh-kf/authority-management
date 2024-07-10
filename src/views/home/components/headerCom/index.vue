<template>
    <div class="header-com">
        <n-breadcrumb>
            <n-breadcrumb-item>{{ route.meta.title }}</n-breadcrumb-item>
        </n-breadcrumb>
        <n-button type="primary" size="medium" @click="handleLogout">退出</n-button>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useDialog } from 'naive-ui'
const router = useRouter()
const route = useRoute()
const dialog = useDialog()
const handleLogout = () => {
    dialog.success({
        title: '操作框',
        content: '确定退出吗',
        positiveText: '确定',
        negativeText: '取消',
        maskClosable: false,
        onPositiveClick() {
            router.push({ path: '/' }).finally(() => {
                setTimeout(() => {
                    location.reload()
                }, 0)
            })
        }
    })
}
</script>

<style lang="scss" scoped>
.header-com {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    box-sizing: border-box;
}
</style>