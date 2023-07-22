<template>
    <el-main>
        <div style="height: 40px;display: flex;align-items: center">
            <el-breadcrumb separator="->">
                <el-breadcrumb-item>当前位置</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">首页</a></el-breadcrumb-item>
                <el-breadcrumb-item><a :href="route.route">{{ route.name}}</a></el-breadcrumb-item>
                <el-breadcrumb-item><a :href="route.route+'_'+$store.getters.getInfo.classification.id+'.html'">{{$store.getters.getInfo.classification.name}}</a></el-breadcrumb-item>
                <el-breadcrumb-item>{{this.$store.getters.getInfo.name}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div style="display: flex">
            <div style="width: 25%;border-right: 1px solid #DCDFE6">
                <div style="text-align: center;border-bottom: 1px solid #DCDFE6">
                    <h1 style="padding: 18px">{{ this.$store.getters.getInfo.name}}</h1>
                    <img :src="url+this.$store.getters.getInfo.id+'.png'" :alt="this.$store.getters.getInfo.name" :title="this.$store.getters.getInfo.name" style="width: 160px;height: 160px"/>
                    <div style="display: flex;align-items: center;justify-content: center">
                        <div style="display: flex;align-items: center;cursor: pointer" @click="goodornot('good')">
                            <span class="iconfont icon-zan" style="color: red;font-size: 36px"></span>
                            <span style="color: red;font-size: 18px">{{ this.$store.getters.getInfo.good}}</span>
                        </div>
                        <el-divider direction="vertical"></el-divider>
                        <div style="display: flex;align-items: center;cursor: pointer" @click="goodornot('nogood')">
                            <span class="iconfont icon-cai" style="font-size: 36px"></span>
                            <span style="font-size: 18px">{{ this.$store.getters.getInfo.nogood}}</span>
                        </div>
                    </div>
                </div>
                <div style="display:flex;flex-direction: column;padding: 8px;border-bottom: 1px solid #DCDFE6">
                    <template v-for="data in this.$store.getters.getInfo.classification.type">
                        <el-link :underline="false" :href="/computer/+$store.getters.getInfo.id+'.html'" v-if="data.route.replace('/','')==='computer'">
                            <el-button type="primary" size="medium" style="margin:10px;padding:10px 88px" class="iconfont icon-diannao_o" @click="download(data.route.replace('/',''),'exe')">
                                {{data.name}}下载
                            </el-button>
                        </el-link>
                        <el-link :underline="false" :href="/ios/+$store.getters.getInfo.id+'.html'" v-if="data.route.replace('/','')==='ios'">
                            <el-button type="success" size="medium" style="margin:10px;padding:10px 88px" class="iconfont icon-iPhone" @click="download(data.route.replace('/',''),'ipa')">
                                {{data.name}}下载
                            </el-button>
                        </el-link>
                        <el-link :underline="false" :href="/android/+$store.getters.getInfo.id+'.html'" v-if="data.route.replace('/','')==='android'">
                            <el-button type="info" size="medium" style="margin:10px;padding:10px 88px" class="iconfont icon-anzhuo" @click="download(data.route.replace('/',''),'apk')">
                                {{data.name}}下载
                            </el-button>
                        </el-link>
                        <el-link :underline="false" :href="/harmonyos/+$store.getters.getInfo.id+'.html'" v-if="data.route.replace('/','')==='harmonyos'" >
                            <el-button type="warning" size="medium" style="margin:10px;padding:10px 88px" class="iconfont icon-Phoneshouji" @click="download(data.route.replace('/',''),'hap')">
                                {{data.name}}下载
                            </el-button>
                        </el-link>
                    </template>
                </div>
                <div style="font-size: 14px;">
                    <div style="line-height: 30px;display: flex;flex-wrap: wrap">
                        类型：
                        <template v-for="data in this.$store.getters.getInfo.classification.classifications">
                            <el-link :href="data.navigation.route+'_'+data.id+'.html'" target="_blank" :underline="false" style="padding-right: 8px">{{ data.name }}</el-link>
                        </template>
                    </div>
                    <div style="line-height: 30px">大小：{{this.$store.getters.getInfo.typeinfo.size}}</div>
                    <div style="line-height: 30px">版本：{{this.$store.getters.getInfo.typeinfo.version}}</div>
                    <div style="line-height: 30px">更新时间：{{this.$store.getters.getInfo.typeinfo.newdate}}</div>
                    <div style="line-height: 30px" v-if="this.$store.getters.getInfo.author">开发者：{{ this.$store.getters.getInfo.author}}</div>
                </div>
                <div style="padding-top: 18px">
                    <h3 style="border-bottom: 2px solid #25c88a"><span v-if="this.$store.getters.getInfo.author">开发者</span>其他产品</h3>
                    <div style="padding-top: 8px">
                        <template v-for="data in this.$store.getters.getInfo.otherApp">
                            <el-link :href="'/app/'+data.id+'.html'" target="_blank" :underline="false" style="width: 33%;margin-bottom: 18px;overflow:hidden;white-space: nowrap">
                                <div style="display: flex;flex-direction: column;align-items: center">
                                    <img :src="url+data.id+'.png'" style="width: 68px;height: 68px" :alt="data.name" :title="data.name"/>
                                    {{ data.name }}
                                </div>
                            </el-link>
                        </template>
                    </div>
                </div>
            </div>
            <div style="width: 75%;padding:18px">
                <div class="information">
                    <h2>{{ this.$store.getters.getInfo.name}}资讯</h2>
                </div>
                <div style="padding-bottom:28px;display: flex;justify-content: space-between;align-items: center;flex-wrap: wrap">
                    <div v-for="data in this.$store.getters.getInfo.news" style="border-bottom: 1px dashed #ccc;width: 50%;height:28px;display: flex;align-items: center;overflow: hidden;white-space: nowrap">
                        <span style="height: 20px;line-height: 20px;border-radius: 4px;background: #409EFF;color: white">资讯</span>
                        <el-link :underline="false" :href="'/news/'+data.id+'.html'" target="_blank">{{ data.title }}</el-link>
                    </div>
                </div>
                <div class="information">
                    <h2>{{ this.$store.getters.getInfo.name}}介绍</h2>
                </div>
                <div style="padding-bottom: 28px">
                    {{ this.$store.getters.getInfo.typeinfo.content}}
                </div>
                <div class="information">
                    <h2>{{this.$store.getters.getInfo.name}}更新日志</h2>
                </div>
                <div style="padding-bottom: 28px">
                    <div v-html="this.$store.getters.getInfo.typeinfo.log"></div>
                </div>
            </div>
        </div>
    </el-main>
</template>
<script>
import {goodornot} from "../api";
import Cookies from 'js-cookie';
export default {
    name:'Show',
    data(){
        return {
            url:'//127.0.0.1/api/'
        }
    },
    methods:{
        goodornot(type){
            const data={
                id:this.$store.getters.getInfo.id,
                type:type
            }
            if(Cookies.get(this.$store.getters.getInfo.id)){
                const id=JSON.parse(Cookies.get(this.$store.getters.getInfo.id)).id;
                if(id){
                    return this.$message.error('您的频率太快,请稍候再试');
                }
            }
            Cookies.set(this.$store.getters.getInfo.id,JSON.stringify({id:this.$store.getters.getInfo.id}));
            goodornot(data)
            .then((res)=>{
                if(res.code!==200){
                    return this.$message.error(res.msg);
                }
                this.$store.getters.getInfo[type]=this.$store.getters.getInfo[type]+1;
                this.$message({
                    message:res.msg,
                    type: 'success'
                });
            });
        },
        download(route,suffix){
            if(route===this.$route.name){
                window.open(this.url+route+'/'+this.$route.params.id+'.'+suffix)
            }
        },
        currentInfo(){
            let info={};
            for(var i=0;i<this.$store.getters.getInfo.classification.type.length;i++){
                if(this.$store.getters.getInfo.classification.type[i].route==='/'+this.$route.name){
                    info=this.$store.getters.getInfo.typeinfo;
                    break;
                }
            }
            if(JSON.stringify(info)==='{}'){
                info=this.$store.getters.getInfo.typeinfo;
            }
            return info;
        }
    },
    computed:{
        title(){
            let info=this.currentInfo();
            return this.$store.getters.getInfo.name+'-'+this.$store.getters.getInfo.name+this.route.name+'v'+info.version+'-Jr'+this.route.name+'下载网'
        },
        keywords(){
            return this.$store.getters.getInfo.name+','+this.$store.getters.getInfo.name+this.route.name;
        },
        description(){
            let info=this.currentInfo();
            return this.$store.getters.getInfo.name+'下载,'+info.content;
        },
        route(){
            const path=this.$route.path;
            const name=path.match(/(\/.*?)\/\d+.*?/i)[1];
            if(name==='/app'){
                return {
                    route:'/app',
                    name:'应用软件'
                };
            }
            for(var i=0;i<this.$store.getters.getNavigation.length;i++){
                if(name===this.$store.getters.getNavigation[i].route){
                    return this.$store.getters.getNavigation[i];
                }
            }
        }
    },
    asyncData ({store,route}) {
        return Promise.all([
            store.dispatch('FETCH_INFO',route)
        ])
    },
    metaInfo () {
        return {
            title:this.title,
            meta:[
                {name: 'keywords', content:this.keywords},
                {name: 'description', content:this.description}
            ]
        }
    }
}
</script>
<style>
.information{
    height: 24px;
    line-height: 24px;
    font-size: 22px;
    padding: 0;
    color: #333;
    border-left: 12px solid #409EFF;
    margin: 10px 0 15px 0;
    background: url(/public/fgx.png) left center repeat-x;
}
.information h2{
    height: 24px;
    line-height: 24px;
    font-size: 22px;
    font-weight: 400;
    float: left;
    display: block;
    padding: 0 8px 0 12px;
    background: #fff;
    border: none;
}
</style>
