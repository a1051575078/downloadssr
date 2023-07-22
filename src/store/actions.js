import {
    fetchData
} from '../api';

export default {
    FETCH_MAP: (context) => {
        return fetchData('map')
        .then((data)=>{
            context.commit('SET_MAP',data.data)
        })
    },
    FETCH_ABOUT: (context) => {
        return fetchData('abouts')
        .then((data)=>{
            context.commit('SET_ABOUT',data.data)
        })
    },
    FETCH_POPULAR: (context,data) => {
        return fetchData('popular',data)
        .then((data)=>{
            context.commit('SET_POPULAR',data.data)
        })
    },
    FETCH_HOME: (context,data) => {
        return fetchData('home',data)
        .then((data)=>{
            context.commit('SET_HOME',data.data)
        })
    },
    FETCH_LIST: (context,name) => {
        return fetchData('list',name)
        .then((data)=>{
            context.commit('SET_LIST',data.data)
        })
    },
    FETCH_NEW: (context,data) => {
        return fetchData('new',data)
        .then((data)=>{
            context.commit('SET_NEW',data.data)
        })
    },
    FETCH_NEWS: (context,data) => {
        return fetchData('news',data.params.id)
        .then((data)=>{
            context.commit('SET_NEWS',data.data)
        })
    },
    FETCH_INFO: (context,data) => {
        return fetchData('info',data)
        .then((data)=>{
            context.commit('SET_INFO',data.data)
        })
    },
    FETCH_APP: (context) => {
        return fetchData('apps')
        .then((data)=>{
            context.commit('SET_APP',data.data)
        })
    },
    FETCH_LIST_NAVIGATION: (context) => {
        return fetchData('navigations')
        .then((data)=>{
            context.commit('SET_NAVIGATION',data.data)
        })
    },
    FETCH_CONFIG: (context) => {
        return fetchData('configs')
        .then((data)=>{
            context.commit('SET_CONFIG',data.data)
        })
    },
   /* TEST_TEST:({commit,dispatch,state})=>{
        return querysql();
    },

    // ensure data for rendering given list type
    FETCH_LIST_DATA: ({ commit, dispatch, state }, { type }) => {
        commit('SET_ACTIVE_TYPE', { type })
        return fetchIdsByType(type)
        .then(ids => commit('SET_LIST', { type, ids }))
        .then(() => dispatch('ENSURE_ACTIVE_ITEMS'))
    },

    // ensure all active items are fetched
    ENSURE_ACTIVE_ITEMS: ({ dispatch, getters }) => {
        return dispatch('FETCH_ITEMS', {
            ids: getters.activeIds
        })
    },

    FETCH_ITEMS: ({ commit, state }, { ids }) => {
        // on the client, the store itself serves as a cache.
        // only fetch items that we do not already have, or has expired (3 minutes)
        const now = Date.now()
        ids = ids.filter(id => {
            const item = state.items[id]
            if (!item) {
                return true
            }
            if (now - item.__lastUpdated > 1000 * 60 * 3) {
                return true
            }
            return false
        })
        if (ids.length) {
            return fetchItems(ids).then(items => commit('SET_ITEMS', { items }))
        } else {
            return Promise.resolve()
        }
    },

    FETCH_USER: ({ commit, state }, { id }) => {
        return state.users[id]
            ? Promise.resolve(state.users[id])
            : fetchUser(id).then(user => commit('SET_USER', { id, user }))
    }*/
}
