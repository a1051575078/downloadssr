<template>
    <el-main>
        <el-tabs tab-position="left" style="margin-top: 18px" @tab-click="handleClick">
            <template v-for="data in $store.getters.getAbout">
                <el-tab-pane :label="data.name">
                    <div style="margin-left: 18px;" v-if="data.id!==4">
                        <h1 style="border-bottom:1px solid #ccc;height:38px;line-height: 38px">{{data.name}}</h1>
                        <div style="margin-top: 18px" v-html="data.content"></div>
                    </div>
                    <div style="margin-left: 18px;" v-if="data.id===4">
                        <h1 style="border-bottom:1px solid #ccc;height:38px;line-height: 38px">{{data.name}}</h1>
                        <div style="margin-top: 18px">
                            <p><b>新闻资讯：</b></p>
                            <div>
                                <el-link href="/news_1.html" :underline="false" style="width: 11.5%" target="_blank">
                                    新闻列表
                                </el-link>
                            </div>
                            <br/>
                            <p><b>应用软件：</b></p>
                            <div>
                                <el-link :href="'/app_'+dataInfo.id+'.html'" target="_blank" :underline="false" style="width: 11.5%" v-for="(dataInfo,index) in $store.getters.getMap.apps" :key="index">
                                    {{dataInfo.name}}
                                </el-link>
                            </div>
                            <br/>
	                        <template v-for="data in $store.getters.getNavigation">
		                        <p><b>{{data.name}}：</b></p>
		                        <div>
			                        <el-link :href="data.route+'_'+dataInfo.id+'.html'" target="_blank" :underline="false" style="width: 11.5%" v-for="(dataInfo,index1) in $store.getters.getMap[data.route.replace('/','')]" :key="index1">
				                        {{dataInfo.name}}
			                        </el-link>
		                        </div>
		                        <br/>
	                        </template>
                        </div>
                    </div>
                </el-tab-pane>
            </template>
        </el-tabs>
    </el-main>
</template>
<script>
export default {
    name:'about',
    data(){
        return{
            title:'关于本站-Jr下载站'
        }
    },
    asyncData ({store,router}) {
        return Promise.all([
            store.dispatch('FETCH_ABOUT'),
            store.dispatch('FETCH_MAP'),
        ])
    },
    methods:{
        handleClick(v){
            this.title=v.label+'-Jr下载站';
        }
    },
    computed:{
        about(){
            return this.$store.state.about;
        }
    },
    metaInfo () {
        return {
            title:this.title,
            meta: [
                {name: 'keywords', content:this.title},
                {name: 'description', content:this.title}
            ]
        }
    }
}
</script>
