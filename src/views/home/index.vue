<template>
    <div class="home">
        <div class="sidebar">
            <sidebarCom @refreshView="handleRefreshView"></sidebarCom>
        </div>
        <div class="header">
            <n-dialog-provider>
                <headerCom></headerCom>
            </n-dialog-provider>
        </div>
        <div class="content">
            <router-view v-if="isRefresh"></router-view>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, nextTick } from 'vue'
import sidebarCom from './components/sidebarCom/index.vue'
import headerCom from './components/headerCom/index.vue'
const isRefresh = ref(true)

const handleRefreshView = () => {
    isRefresh.value = false
    nextTick(() => {
        isRefresh.value = true
    })
}

</script>
<style lang="scss" scoped>
.home {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 80px 1fr;
    width: 100vw;
    height: 100vh;
}

.sidebar {
    grid-row: 1/3;
    height: calc(100vh - 80px);
}

.sidebar,
.header {
    background: #fff;
}

.content {
    height: 100%;
    background: #efeff5;
    padding: 10px 15px;
    box-sizing: border-box;
    overflow-y: hidden;
}
</style>