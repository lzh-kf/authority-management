<template>
    <div class="index">
        <!-- 组件方式推荐 -->
        <authority :code="code">
            <n-button type="primary">测试权限按钮（基于组件）</n-button>
        </authority>
        <!-- 指令方式 -->
        <n-button type="primary" v-permission="code">测试权限按钮（基于自定义指令）</n-button>
        <div>
            <n-button size="medium" @click="handleChangeCode">修改权限</n-button>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import authority from '@/components/authority/index.vue'
const code = ref('reset')
const handleChangeCode = () => {
    code.value = code.value === 'reset' ? '' : 'reset'
}

</script>

<style lang="scss" scoped>
.index {
    display: flex;

    .n-button {
        margin-left: 20px;
    }
}
</style>