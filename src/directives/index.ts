import permission from './permission'
import type { App } from 'vue'

const registerDirectives = (app: App<Element>) => {
    app.directive('permission', permission)
}

export default registerDirectives