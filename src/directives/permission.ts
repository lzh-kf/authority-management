import useAuthorityStore from '@/store/useAuthorityStore'
let codes: Array<string> | null
const updateEl = (el: HTMLElement, code: string) => {
    if (!codes) {
        const store = useAuthorityStore()
        codes = store.codes
    }
    if (codes) {
        el.style.display = codes.includes(code) ? '' : 'none'
    }
}
export default {
    created(el: HTMLElement, { value }: { value: string }) {
        return updateEl(el, value)
    },
    updated(el: HTMLElement, { value }: { value: string }) {
        return updateEl(el, value)
    },
}