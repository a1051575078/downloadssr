<template>
    <el-header style="height: auto">
        <div style="display: flex;justify-content: space-between;align-items:center;padding: 0 168px;background: #fafafa;border-bottom: 1px solid #ddd;height: 38px">
            <div class="font">
                {{this.$store.getters.getConfig.describe}}
            </div>
            <div>
                <el-link href="/" :underline="false">首页</el-link>
                <el-divider direction="vertical"></el-divider>
               <template v-for="data in this.$store.getters.getNavigation">
                    <el-link :href="data.route" :underline="false">{{data.name}}</el-link>
                    <el-divider direction="vertical" v-if="data.id!==$store.getters.getNavigation.length"></el-divider>
                </template>
            </div>
        </div>
        <div style="display: flex;justify-content: space-between;align-items: center;padding: 0 168px;height: 88px">
            <div>
                <a href="/">
                    <img :src="this.$store.getters.getConfig.headerpic"/>
                </a>
            </div>
            <div style="display: flex;flex-direction:column">
                <div style="display: flex;padding-bottom: 8px;justify-content: flex-end">
                    <el-input v-model="input" style="width: 388px"></el-input>
                    <el-button type="primary" @click="searchButton()">搜索</el-button>
                </div>
                <div class="search" v-show="searchShow" ref="main">
                    <template v-for="data in searchData">
                        <p @click="searchClick(data)" @mouseover="searchBackGround(data.name)" :class="searchCurrentBackground===data.name?'searchCurrentBackground':'searchBackground'">
                            {{data.name}}
                        </p>
                    </template>
                </div>
                <div style="display: flex;justify-content: space-between">
                    <template v-for="data in this.$store.getters.getApp.slice(0,5)">
                        <el-link :href="'/app/'+data.id+'.html'" target="_blank" :underline="false" style="font-size: 12px;padding-left: 8px">{{ data.name }}</el-link>
                    </template>
                </div>
            </div>
        </div>
        <nav style="padding: 0 168px;background:rgb(102, 177, 255);height: 45px;display: flex;">
            <div @mouseover="mouseover('/')" :class="navCurrentBackground==='/'?'currentBackground':'background'" :style="{'width':headerNavigation+'%','height': 100+'%','display': 'flex','justify-content': 'center','align-items': 'center'}">
                <el-link :underline="false" href="/" style="color: white;width: 100%;height: 100%">
                    首页
                </el-link>
            </div>
            <template v-for="data in this.$store.getters.getNavigation">
                <div @mouseover="mouseover(data.route)" :class="navCurrentBackground===data.route?'currentBackground':'background'" :style="{'width':headerNavigation+'%','height': 100+'%','display': 'flex','justify-content': 'center','align-items': 'center'}">
                    <el-link :underline="false" :href="data.route" style="color: white;width: 100%;height: 100%">
                        {{data.name}}
                    </el-link>
                </div>
            </template>
        </nav>
    </el-header>
</template>
<script>
import {search} from "../../../api";
export default {
    name:'Header',
    data(){
        return {
            navCurrentBackground:'',
            input:'',
            searchShow:false,
            searchCurrentBackground:'',
        }
    },
    methods:{
        searchButton(){
            const data={
                name:this.input
            }
            search(data)
            .then((res)=>{
                if(res){
                    window.open('/app/'+res.id+'.html');
                }else{
                    window.open('/404');
                }
            })
        },
        searchClick(data){
            this.input=data.name;
            const route=this.$router.resolve({
                name:'app',
                params:{
                    id:data.id
                }
            });
            window.open(route.href,'_blank');
        },
        bodyClick(e){
            let self = this;
            if (this.$refs.main && !this.$refs.main.contains(e.target)) {
                if (self.searchShow == true){
                    self.searchShow = false;
                }
            }
        },
        searchBackGround(info){
            this.searchCurrentBackground=info;
        },
        mouseover(info){
            this.navCurrentBackground=info;
        },
        //没用到的方法
        insertSort(data){
            let len = data.length;
            let preIndex, current;
            for (let i = 1; i < len; i++) {
                preIndex = i - 1;
                current = data[i];
                while (preIndex >= 0 && current.popular < data[preIndex].popular) {
                    data[preIndex + 1] = data[preIndex];
                    preIndex--;
                }
                data[preIndex + 1] = current;
            }
            const desc=data.reverse();
            const temp=[];
            for(var i=0;i<5;i++){
                temp.push(data[i]);
            }
            return temp;
        }
    },
    computed:{
        searchData(){
            var input=this.input;
            this.searchShow=false;
            this.searchCurrentBackground='';
            if(input){
                const data=this.$store.getters.getApp.filter(function(product){
                    const name=String(product['name']).toLowerCase().indexOf(input)>-1;
                    if(name){
                        return name;
                    }
                    /*return Object.keys(product).some(function(key){
                        return String(product[key]).toLowerCase().indexOf(input)>-1;
                    })*/
                });
                //如果是搜索列表当中点击某个app名字，则弹出的搜索列表消失
                if(data.length===1){
                    if(data[0].name===this.input){
                        return this.searchShow=false;
                    }
                }
                if(data.length){
                    this.searchShow=true;
                }
                if(data.length<=10&&data.length){
                    return data;
                }else{
                    const temp=[];
                    for(var i=0;i<data.length-1;i++){
                        temp.push(data[i]);
                    }
                    return temp;
                }
            }
        },
        headerNavigation(){
            return Math.ceil(100/(this.$store.getters.getNavigation.length+1));
        },
    },
    created(){
        switch(this.$route.path.replace(/^(\/.*?)[_|\/].*?$/, "$1")){
            case '/computer':
                this.navCurrentBackground='/computer';
                break;
            case '/android':
                this.navCurrentBackground='/android';
                break;
            case '/ios':
                this.navCurrentBackground='/ios';
                break;
            case '/harmonyos':
                this.navCurrentBackground='/harmonyos';
                break;
            default:
                this.navCurrentBackground='/';
                break;
        }
        /*this.navCurrentBackground='/';
        if(this.$route.path.match(/.*?app.*?/i)){
            this.navCurrentBackground='/';
        }*/
    },
    mounted(){
        document.addEventListener('click',this.bodyClick);
    },
    beforeDestroy(){
        document.removeEventListener('click',this.bodyClick);
    }
}
</script>
<style>
.searchBackground{
    background-color:white ;
}
.searchCurrentBackground{
    background-color:#ccc ;
}
.search p {
    display: block;
    padding: 2px 5px;
    white-space: nowrap;
    overflow: hidden;
    height: 22px;
    line-height: 22px;
    text-decoration: none;
}
.search {
    max-height: 50%;
    position: absolute;
    z-index: 9;
    top: 86px;
    right:222px;
    width:388px;
    border: 1px solid #ddd;
    background: #fff;
    cursor: default;
    overflow: auto;
    box-shadow: 1px 4px 3px rgba(50,50,50,.64);
}
.currentBackground{
    background-color:#409EFF;
}
.background{
    background-color:rgb(102, 177, 255);
}
.el-header{
    padding: 0;
}
</style>
