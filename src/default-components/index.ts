import BuiltinText from './builtin-text/index.vue'

export default {
    install: (app, options) => {
        app.component('BuiltinText', BuiltinText)
    }
}