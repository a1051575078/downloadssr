<template>
    <el-main>
        <div style="height: 40px;display: flex;align-items: center">
            <el-breadcrumb separator="->">
                <el-breadcrumb-item>当前位置</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">首页</a></el-breadcrumb-item>
                <el-breadcrumb-item><a href="/news_1.html">资讯</a></el-breadcrumb-item>
                <el-breadcrumb-item>资讯列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div v-for="data in this.$store.getters.getNews.data" style="border-bottom: 1px dashed #ccc;padding-top:8px">
            <el-link :underline="false" style="font-size: 26px;padding-bottom: 8px" :href="'/news/'+data.id+'.html'" target="_blank">
                {{ data.title }}
            </el-link>
            <div style="display:flex;">
                <div style="width: 200px;">
                    <img :src="'//127.0.0.1/api/'+data.app_id+'.png'" style="width:200px;height: 136px"/>
                </div>
                <div>
                    <p style="word-break: break-all;text-indent: 2em;line-height: 28px;padding-bottom: 18px">
                        {{data.content.substring(0,data.content.indexOf('。'))}}
                    </p>
                    <small><em>{{ data.time }}</em></small>
                </div>
            </div>
        </div>
        <el-pagination
            @current-change="handleCurrentChange"
            :current-page="this.$store.getters.getNews.current_page"
            layout="total,prev, pager, next, jumper"
            :page-size="this.$store.getters.getNews.per_page"
            :total="this.$store.getters.getNews.total">
        </el-pagination>
    </el-main>
</template>
<script>
export default {
    methods: {
        handleCurrentChange(val) {
            if(val!==Number(this.$route.params.id)){
                this.$router.push('/news_'+val+'.html');
            }
        }
    },
    created(){
        if(!this.$store.getters.getNews.data.length){
            this.$router.push('/404');
        }
    },
    name:'News',
    metaInfo () {
        return {
            title:'新闻资讯-软件资讯教程-最新资讯动态-Jr产品资讯',
            meta: [
                {name: 'keywords', content:'资讯内容'},
                {name: 'description', content:'欢迎来到Jr,我们有提供各行各业各种产品最新资讯教程和软件最新动态资讯、热门焦点、使用方法和技巧以及常见问题解答'}
            ]
        }
    },
    asyncData ({store,route}) {
        return Promise.all([
            store.dispatch('FETCH_NEWS',route)
        ])
    },
}
</script>
