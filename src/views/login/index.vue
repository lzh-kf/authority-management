<template>
    <div class="login">
        <n-form ref="formRef" :model="formData" :rules="rules" style="width:300px">
            <n-form-item label="账号" path="account" label-width="200">
                <n-input v-model:value="formData.account" placeholder="输入账号" />
            </n-form-item>
            <n-form-item label="密码" path="password">
                <n-input type="password" v-model:value="formData.password" placeholder="请输入密码" />
            </n-form-item>
            <n-form-item>
                <n-button @click="handleLogin" style="width:100%" type="primary" :loading="loading">
                    登录
                </n-button>
            </n-form-item>
        </n-form>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { FormInst } from 'naive-ui'
import { useRouter } from 'vue-router'
const router = useRouter()
const formRef = ref<FormInst | null>(null)
const formData = reactive({
    account: 'admin',
    password: '1234567896'
})
const loading = ref(false)
const rules = {
    account: {
        trigger: 'blur',
        message: '请输入账号',
        required: true
    },
    password: {
        trigger: 'blur',
        message: '请输入密码',
        required: true
    }
}
const handleLogin = async () => {
    try {
        await formRef?.value?.validate()
        loading.value = true
        setTimeout(() => {
            router.push({
                path: '/home'
            })
            loading.value = false
        }, 1500)
    } catch (error) {
        loading.value = false
    }
}
</script>
<style lang="scss" scoped>
.login {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background: white;
}
</style>