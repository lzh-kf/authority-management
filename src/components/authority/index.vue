<template>
    <div v-if="isRender">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import useAuthorityStore from '@/store/useAuthorityStore'
const props = defineProps({
    code: {
        type: String,
        required: true
    }
})
const store = useAuthorityStore()
const isRender = computed(() => store.codes.includes(props.code))
</script>
<style scoped></style>