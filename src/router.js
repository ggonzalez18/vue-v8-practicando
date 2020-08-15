import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Home from './components/Home'
import Articulo from './components/Articulo'
import Administrador from './components/Administrador'
import NotFound from './components/NotFound'
Vue.use(Router)

function lazyLoading(components) {
    return () =>
        import (`./components/${components}.vue`)
}

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'inicio',
            component: Inicio,
        },

        {
            path: '/inicio',
            component: Inicio,
            redirect: '/',
        },

        {
            path: '/home',
            component: Home,
            redirect: '/',
        },

        {
            path: '/portada',
            component: lazyLoading('Portada'),
            redirect: '/',
        },


        {
            path: '/sobremi',
            name: 'sobremi',
            component: lazyLoading('SobreMi'),
            alias: ['/acerca'],
        },


        {
            path: '/contacto',
            name: 'contacto',
            component: lazyLoading('Contacto'),
            alias: ['/contactame'],
        },

        {
            path: '/post',
            name: 'post',
            component: lazyLoading('Post'),
            children: [{
                path: ':articulo',
                component: Articulo,
            }]
        },

        {
            path: '/administrador/:tipoAdministrador',
            name: 'administrador',
            component: Administrador,
            props: (route) => ({
                tipoAdministrador: `${route.params.tipoAdministrador}`

            })

        },

        {
            path: '*',
            component: NotFound
        },
    ]
})