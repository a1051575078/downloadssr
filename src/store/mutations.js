import Vue from 'vue'

export default {
    SET_MAP: (state,data) => {
        state.map=data
    },
    SET_ABOUT: (state,data) => {
        state.about=data
    },
    SET_POPULAR: (state,data) => {
        state.popular=data
    },
    SET_HOME: (state,data) => {
        state.home=data
    },
    SET_LIST: (state,data) => {
        state.list=data
    },
    SET_NEW: (state,data) => {
        state.new=data
    },
    SET_NEWS: (state,data) => {
        state.news=data
    },
    SET_INFO: (state,data) => {
        state.info=data
    },
    SET_APP: (state,data) => {
        state.app=data
    },
    SET_CONFIG: (state,data) => {
        data.forEach(item=>{
            state.config[item.tag]=item.content
        })
    },
    SET_NAVIGATION: (state,data) => {
        state.navigation=data
    },
    SET_ACTIVE_TYPE: (state, { type }) => {
        state.activeType = type
    },

    SET_ITEMS: (state, { items }) => {
        items.forEach(item => {
            if (item) {
                Vue.set(state.items, item.id, item)
            }
        })
    },

    SET_USER: (state, { id, user }) => {
        Vue.set(state.users, id, user || false) /* false means user not found */
    }
}
