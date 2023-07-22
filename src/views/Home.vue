<template>
    <el-main>
        <div style="margin: 18px 0 18px 0;overflow: hidden;white-space: nowrap;">
            <div style="margin-bottom: 18px;display: flex">
                <span style="font-size: 18px">推荐</span>
                <div><i class="el-icon-caret-right"></i></div>
                <div v-for="data in this.$store.getters.getApp.slice(0,10)" style="padding-left: 8px">
                    <el-link :href="'/app/'+data.id+'.html'" target="_blank" :underline="false">{{ data.name }}</el-link>
                </div>
            </div>
            <div style="display: flex">
                <span style="font-size: 18px">最新</span>
                <div><i class="el-icon-caret-right"></i></div>
                <div v-for="data in this.$store.getters.getHome.app.slice(0,10)" style="padding-left: 8px">
                    <el-link :href="'/app/'+data.id+'.html'" target="_blank" :underline="false">{{ data.name }}</el-link>
                </div>
            </div>
        </div>
        <div style="display:flex;justify-content:space-between">
            <div style="width: 388px">
                <div style="height: 330px;width: 388px">
                    <el-carousel indicator-position="outside" style="height: 388px;width: 388px">
                        <el-carousel-item v-for="data in this.$store.getters.getNews.data.slice(0,3)" :key="data.id">
                            <div style="height: 100%;width: 100%;background-color:white">
                                <a :href="'/news/'+data.id+'.html'" :title="data.title" target="_blank">
                                    <img :src="'//127.0.0.1/api/'+data.app_id+'.png'" style="height: 388px;width: 388px" :title="data.title" :alt="data.title"/>
                                </a>
                                <div style="color: white;display: flex;align-items: center;justify-content: center;background: #000;height: 30px;position: absolute;left:0;bottom:0;width: 100%;opacity:.6">
                                    {{ data.title}}
                                </div>
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <span style="font-size: 18px">
                    新品首发
                    <el-divider></el-divider>
                </span>
                <div style="display: flex;flex-wrap: wrap;justify-content: space-between">
                    <div style="display: flex;margin: 12px 0 0 0;width: 194px;overflow: hidden;white-space: nowrap" v-for="data in this.$store.getters.getHome.app.slice(10,18)">
                        <img :src="'//127.0.0.1/api/'+data.id+'.png'" :title="data.name" :alt="data.name"/>
                        <div style="display: flex;flex-direction: column;justify-content:center;margin-left: 8px;font-size: 14px">
                            <span><el-link :href="'/app/'+data.id+'.html'" target="_blank" :underline="false">{{ data.name }}</el-link></span>
                            <span>大小：{{data.navigations.size}}</span>
                            <span>类别：<el-link :href="'/app_'+data.classifications.id+'.html'" target="_blank" :underline="false">{{ data.classifications.name }}</el-link></span>
                        </div>
                    </div>
                </div>
            </div>
            <div style="width: 100%;margin: 0 18px 0 18px">
                <el-tabs v-model="activeName" :stretch="true" type="card">
                    <el-tab-pane :label="data.name" :name="data.route.replace('/','')" v-for="(data,index) in $store.getters.getNavigation" :key="index">
                        <div style="display: flex;justify-content: space-between;align-items:center;height: 32px;width: 100%" v-for="dataInfo in $store.getters.getHome[data.route.replace('/','')].slice(0,20)">
                            <div style="display:flex;justify-content:center;width:18%;overflow: hidden;white-space: nowrap">
                                <el-link :href="data.route+'_'+dataInfo.classifications.id+'.html'" target="_blank" :underline="false">【{{dataInfo.classifications.name}}】</el-link>
                            </div>
                            <el-divider direction="vertical"></el-divider>
                            <div style="width:70%;display:flex">
                                <img :src="'//127.0.0.1/api/'+dataInfo.id+'.png'" style="width: 20px;height: 20px;padding: 0 6px" :title="dataInfo.name" :alt="dataInfo.name"/>
                                <div style="width: 258px;display:flex;overflow: hidden;white-space: nowrap;">
                                    <el-link :href="data.route+'/'+dataInfo.id+'.html'" target="_blank" :underline="false">
                                        {{dataInfo.name}}
                                    </el-link>
                                </div>
                            </div>
                            <div style="font-size: 14px;width:12%;">
                                {{dataInfo.navigations.newdate|time}}
                            </div>
                        </div>
                    </el-tab-pane>
<!--                    <el-tab-pane :label="data.name" :name="data.route.replace('/','')" v-for="data in this.$store.getters.getNavigation">
                        <div style="display: flex;justify-content: space-between;align-items:center;height: 32px" v-for="data in this.$store.getters.getHome[data.route.replace('/','')]">
                            <div style="display: flex;align-items: center">
                                <div style="width:18%;overflow: hidden;white-space: nowrap">
                                    <el-link href="https://element.eleme.io" target="_blank" :underline="false">【sss2ssssssssssssss】</el-link>
                                </div>
                                <el-divider direction="vertical"></el-divider>
                                <div style="width:70%;display:flex">
                                    <img src="https://p.qqan.com/up/2021-12/202112301721402411.jpg" style="width: 20px;height: 20px;padding: 0 6px"/>
                                    <div style="width: 258px;display:flex;overflow: hidden;white-space: nowrap;">
                                        <el-link href="https://element.eleme.io" target="_blank" :underline="false">
                                            我s和sssddddddd平和ddddddd平和ddddddd平和ddddddd平和ddddddd平
                                        </el-link>
                                    </div>
                                </div>
                                <div style="font-size: 14px;width:12%;">
                                    <span>
                                        04-02
                                    </span>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>-->
                </el-tabs>
            </div>
            <div style="width: 58%">
                <span style="font-size: 18px">
                    <i class="el-icon-check"></i>推荐应用
                    <el-divider></el-divider>
                </span>
                <div style="display: flex;flex-wrap: wrap;margin-top: 18px">
                    <el-link v-for="(data,index) in this.$store.getters.getApp.slice(10,28)" :key="index" :href="'/app/'+data.id+'.html'" target="_blank" :underline="false" style="width: 33%;margin-bottom: 18px;overflow: hidden;white-space: nowrap">
                        <div style="display: flex;flex-direction: column;align-items: center">
                            <img :src="'//127.0.0.1/api/'+data.id+'.png'" style="width: 68px;height: 68px" :title="data.name" :alt="data.name"/>
                            {{ data.name }}
                        </div>
                    </el-link>
                </div>
            </div>
        </div>
        <div style="margin-top: 58px" v-for="(data,index) in this.$store.getters.getNavigation">
            <div style="display: flex;justify-content: space-between;align-items: center;border-bottom: 1px solid #ccc">
                <div>
                    <h3 style="font-size: 24px;font-family: Candara;color: #ddd;font-weight: 400;float: left;padding-right: 14px;">
                        <b :style="{'display':'inline-block','font-size':'24px','font-weight':'400','color':'#676767','font-family':'Microsoft YaHei','padding':'0 2px','margin-right':'10px','border-bottom':'2px solid #'+(index*index)+(index*index)+'9EFF','position': 'relative'}">
                            {{data.name}}
                        </b>{{data.route.replace('/','')}}
                    </h3>
                </div>
                <div>
                    <el-link :href="data.route" target="_blank" :underline="false" style="font-size: 16px">更多+</el-link>
                </div>
            </div>
            <div style="display: flex">
                <div style="width: 70%;display: flex;flex-wrap: wrap">
                    <div v-for="dataInfo in $store.getters.getHome[data.route.replace('/','')].slice(20,38)" style="width: 16%;overflow:hidden;white-space: nowrap">
                        <el-link :href="data.route+'/'+dataInfo.id+'.html'" target="_blank" :underline="false" style="display: flex">
                            <div style="display: flex;flex-direction: column;align-items: center">
                                <img :src="'//127.0.0.1/api/'+dataInfo.id+'.png'" style="width: 75px;height: 75px;margin: 28px 28px 0 28px"/>
                                {{ dataInfo.name }}
                            </div>
                        </el-link>
                    </div>
                </div>
                <div style="width: 30%;margin-top: 18px">
                    <h4><i class="el-icon-star-on"></i>本月热门{{ data.name }}</h4>
                    <div @mouseover="mouseover(index1,data.route.replace('/',''))" style="margin-top:8px;display: flex;flex-wrap: wrap" v-for="(dataInfo,index1) in $store.getters.getPopular[data.route.replace('/','')]">
                        <div style="width: 288px;display: flex;flex-wrap:wrap;overflow: hidden;white-space:nowrap;margin-left: 8px">
                            <div style="display: flex;width: 100%;padding-bottom: 8px">
                                <em :style="{'margin-right':'3px','background-color': '#fa4e'+index1*index1+index1*index1,'width': '20px','height':'20px','display':'inline-block','line-height': '20px','color': 'white','text-align': 'center'}">{{ index1+1 }}</em>
                                <el-link :href="data.route+'/'+dataInfo.id+'.html'" target="_blank" :underline="false">{{dataInfo.name}}</el-link>
                            </div>
                            <div :class="currenRoute[data.route.replace('/','')]===index1+data.route?'currentIndex':'none'">
                                <img :src="'//127.0.0.1/api/'+dataInfo.id+'.png'" style="width: 58px;height: 58px"/>
                                <div style="display: flex;flex-direction: column;margin-left: 18px;width:150px">
                                    <i style="font-size: 14px">{{ dataInfo.navigations.size }}</i>
                                    <el-link :href="data.route+'/'+dataInfo.id+'.html'" target="_blank" :underline="false">
                                        <el-button type="primary" style="padding:10px 50px">立即查看</el-button>
                                    </el-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </el-main>
</template>
<script>
export default {
    name:'Home',
    data(){
        return {
            activeName:'computer',
            currenRoute:{
                computer:0+'/computer',
                ios:0+'/ios',
                android:0+'/android',
                harmonyos:0+'/harmonyos'
            }
        }
    },
    methods: {
        mouseover(info,route){
            this.currenRoute[route]=info+'/'+route;
        },
    },
    asyncData ({store,route}) {
        return Promise.all([
            store.dispatch('FETCH_NEWS',route),
            store.dispatch('FETCH_HOME',route),
            store.dispatch('FETCH_POPULAR',route),
        ])
    },
    filters:{
        time:function(value){
            return value.replace(/^\d+-(\d+-\d+).*?$/, "$1")
        }
    },
    metaInfo () {
        return {
            title:this.$store.getters.getConfig.title,
            meta: [
                {name: 'keywords', content:this.$store.getters.getConfig.keywords},
                {name: 'description', content:this.$store.getters.getConfig.description}
            ]
        }
    }
}
</script>
<style>
div > img{
    width: 68px;
    height: 68px;
}
.currentIndex{
    display: flex;
}
.none{
    display: none;
}
</style>
