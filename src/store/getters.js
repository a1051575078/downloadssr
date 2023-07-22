export default {
    // ids of the items that should be currently displayed based on
    // current list type and current pagination
    getMap(state){
        const map=state.map
        if(!map){
            return {};
        }
        return map;
    },
    getAbout(state){
        const about=state.about
        if(!about){
            return {};
        }
        return about;
    },
    getPopular(state){
        const popular=state.popular
        if(!popular){
            return {};
        }
        return popular;
    },
    getHome(state){
        const home=state.home
        if(!home){
            return {};
        }
        return home;
    },
    getList(state) {
        const list=state.list
        if (!list) {
            return {};
        }
        return list;
    },
    getNews(state) {
        const news=state.news
        if (!news) {
            return {};
        }
        return news;
    },
    getNew(state) {
        const news=state.new
        if (!news) {
            return {};
        }
        return news;
    },
    getInfo(state) {
        const info=state.info
        if (!info) {
            return {};
        }
        return info;
    },
    getApp(state) {
        const app=state.app
        if (!app) {
            return [];
        }
        return app;
    },
    getConfig (state) {
        const config=state.config
        if (!config) {
            return {};
        }
        return config;
    },
    getNavigation (state) {
        const navigation=state.navigation
        if (!navigation) {
            return []
        }
        return navigation;
    },
    activeIds (state) {
        const { activeType, itemsPerPage, lists } = state
        if (!activeType) {
            return []
        }

        const page = Number(state.route.params.page) || 1
        const start = (page - 1) * itemsPerPage
        const end = page * itemsPerPage

        return lists[activeType].slice(start, end)
    },

    // items that should be currently displayed.
    // this Array may not be fully fetched.
    activeItems (state, getters) {
        return getters.activeIds.map(id => state.items[id]).filter(_ => _)
    }
}
