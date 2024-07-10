<template>
    <div class="found">
        <n-result status="403" title="403 禁止访问" description="总有些门是对你关闭的">
            <template #footer>
                <n-button type="primary">放轻松</n-button>
            </template>
        </n-result>
    </div>
</template>
<style lang="scss" scoped>
.found {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>