import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore () {
    return new Vuex.Store({
        state: {
            config:{},
            navigation:[],
            app:[],
            info:{},
            new:{},
            news:{},
            list:{},
            home:{},
            popular:{},
            about:{},
            map:{},
            itemsPerPage: 20,
            items: {},
            users: {},
            lists: {
                top: [],
                new: [],
                show: [],
                ask: [],
                job: []
            }
        },
        actions,
        mutations,
        getters
    })
    /*return new Vuex.Store({
        state: {
            activeType: null,
            itemsPerPage: 20,
            items: {/!* [id: number]: Item *!/},
            users: {/!* [id: string]: User *!/},
            lists: {
                top: [/!* number *!/],
                new: [],
                show: [],
                ask: [],
                job: []
            }
        },
        actions,
        mutations,
        getters
    })*/
}
