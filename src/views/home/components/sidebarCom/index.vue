<template>
    <div>
        <n-scrollbar style="max-height: 100vh">
            <n-menu v-model:value="activeKey" mode="vertical" :indent="20" :options="transformMenus" />
        </n-scrollbar>
    </div>
</template>
<script setup lang="ts">
import { computed, h } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useAuthorityStore from '@/store/useAuthorityStore'
interface MenuOption {
    label: Function | string,
    key: string,
    children?: Array<MenuOption>
}
const emit = defineEmits(['refreshView'])
const baseUrl = '/home'
const route = useRoute()
const router = useRouter()
const authorityStore = useAuthorityStore()
const activeKey = computed(() => route.name)
const transformMenus = computed(() => setLabelBymenus(authorityStore.routes))
const setLabelBymenus = (list: Array<MenuOption>) => {
    return list.map(item => {
        const { label, key, children } = item
        const menu: MenuOption = {
            key,
            label: () => h('div', { onClick: !children ? () => handleClick(key) : null }, label as string)
        }
        children && (menu.children = setLabelBymenus(children as Array<MenuOption>))
        return menu
    })
}
const handleClick = (path: string) => {
    emit('refreshView')
    router.push({
        path: `${baseUrl}/${path}`
    })
}
</script>
<style scoped></style>