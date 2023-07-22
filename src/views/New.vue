<template>
    <el-main>
        <div style="height: 40px;display: flex;align-items: center">
            <el-breadcrumb separator="->">
                <el-breadcrumb-item>当前位置</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">首页</a></el-breadcrumb-item>
                <el-breadcrumb-item><a href="/news_1.html">资讯</a></el-breadcrumb-item>
                <el-breadcrumb-item>{{ this.$store.getters.getNew.title }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div style="margin-bottom: 38px">
            <h1 style="text-align: center">{{ this.$store.getters.getNew.title }}</h1>
            <div style="font-size: 14px;padding:18px 0 18px 0;display: flex;justify-content: center">
                <span style="padding-right: 18px">时间：{{ this.$store.getters.getNew.time }}</span>
                <span style="padding-right: 18px;display: flex">来源：
                    <el-link :underline="false" :href="'//'+this.$store.getters.getNew.originsite" rel="nofollow">{{ this.$store.getters.getNew.origin }}</el-link>
                </span>
                <span>作者：{{ this.$store.getters.getNew.author }}</span>
            </div>
            <p style="line-height: 28px;text-indent: 2em;" v-html="this.$store.getters.getNew.content"></p>
        </div>
        <el-divider></el-divider>
        <h2>相关资讯</h2>
        <div style="display: flex;justify-content: space-between;width:100%;flex-wrap: wrap;padding-top: 18px;line-height:28px">
            <div v-for="data in this.$store.getters.getNew.other" style="width: 49%;display: flex;overflow: hidden;white-space: nowrap;">
                <el-link :underline="false" :href="data.id+'.html'">
                    {{ data.title }}
                </el-link>
            </div>
        </div>
    </el-main>
</template>
<script>
export default {
    name:'New',
    metaInfo () {
        return {
            title:this.$store.getters.getNew.title+'-Jr资讯',
            meta: [
                {name: 'keywords', content:'app软件:'+this.$store.getters.getNew.app},
                {name: 'description', content:this.$store.getters.getNew.content.substring(0,this.$store.getters.getNew.content.indexOf('。'))}
            ]
        }
    },
    asyncData ({store,route}) {
        return Promise.all([
            store.dispatch('FETCH_NEW',route)
        ])
    },
}
</script>
