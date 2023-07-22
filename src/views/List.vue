<template>
    <el-main>
        <div style="height: 40px;display: flex;align-items: center">
            <el-breadcrumb separator="->">
                <el-breadcrumb-item>当前位置</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">首页</a></el-breadcrumb-item>
                <el-breadcrumb-item><a :href="this.currentNavigation().route">{{ this.currentNavigation().name}}</a></el-breadcrumb-item>
                <el-breadcrumb-item>{{breadcrumb|classification(this)}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div>
            <div class="tag">
                <b>软件分类</b>
            </div>
            <div style="display: flex;flex-wrap: wrap;padding: 8px 0 8px 0">
                <div style="width: 10%;height: 38px;padding:0 8px 8px 0">
                    <el-link :underline="false" :href="route+'_'+'0.html'" style="height: 100%;width:100%;border-radius: 4px;text-align:center;border: 1px solid #DCDFE6;">
                        全部分类
                    </el-link>
                </div>
                <template v-for="data in $store.getters.getList.classification">
                    <div style="width: 10%;height: 38px;padding:0 8px 8px 0">
                        <el-link :underline="false" :href="route+'_'+data.id+'.html'" style="height: 100%;width:100%;border-radius: 4px;text-align:center;border: 1px solid #DCDFE6;">
                            {{ data.name }}
                        </el-link>
                    </div>
                </template>
            </div>
        </div>
        <div style="display: flex;justify-content:space-between">
            <div style="width: 75%">
                <el-tabs v-model="activeName">
                    <el-tab-pane label="最新" name="new">
                        <div style="display: flex;flex-wrap: wrap;text-align: center;">
                            <template v-for="(data,index) in newData.slice((currentPage-1)*pageSize,currentPage*pageSize)">
                                <div :style="{'width':'19%','height':'228px','border':'1px solid #ccc','margin-right':(index+1)%5?'1%':'','margin-bottom':'18px'}">
                                    <el-link :href="route+'/'+data.id+'.html'" target="_blank" :underline="false" style="padding-top: 18px;display: flex;flex-direction: column;overflow:hidden;white-space: nowrap">
                                        <img :src="url+data.id+'.png'" style="width: 120px;height: 120px" :alt="data.name" :title="data.name"/>
                                        <div><b>{{ data.name}}</b></div>
                                    </el-link>
                                    <div style="margin-top: 8%">
                                        <div><small>{{ data.navigations.newdate }}</small></div>
                                        <div><small>{{ data.navigations.size }}</small></div>
                                    </div>
                                </div>
                            </template>
                        </div>
                        <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-sizes="[100, 200]"
                            :page-size="pageSize"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="newData.length">
                        </el-pagination>
                    </el-tab-pane>
                    <el-tab-pane label="热门" name="hot">
                        <div style="display: flex;flex-wrap: wrap;text-align: center;">
                            <template v-for="(data,index) in hotData.slice((currentPage-1)*pageSize,currentPage*pageSize)">
                                <div :style="{'width':'19%','height':'228px','border':'1px solid #ccc','margin-right':(index+1)%5?'1%':'','margin-bottom':'18px'}">
                                    <el-link :href="route+'/'+data.id+'.html'" target="_blank" :underline="false" style="padding-top: 18px;display: flex;flex-direction: column;overflow:hidden;white-space: nowrap">
                                        <img :src="url+data.id+'.png'" style="width: 120px;height: 120px" :alt="data.name" :title="data.name"/>
                                        <div><b>{{ data.name}}</b></div>
                                    </el-link>
                                    <div style="margin-top: 8%">
                                        <div><small>{{ data.navigations.newdate }}</small></div>
                                        <div><small>{{ data.navigations.size }}</small></div>
                                    </div>
                                </div>
                            </template>
                        </div>
                        <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-sizes="[100, 200]"
                            :page-size="pageSize"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="hotData.length">
                        </el-pagination>
                    </el-tab-pane>
                    <el-tab-pane label="推荐" name="recommend">
                        <div style="display: flex;flex-wrap: wrap;text-align: center;">
                            <template v-for="(data,index) in recommendData.slice((currentPage-1)*pageSize,currentPage*pageSize)">
                                <div :style="{'width':'19%','height':'228px','border':'1px solid #ccc','margin-right':(index+1)%5?'1%':'','margin-bottom':'18px'}">
                                    <el-link :href="route+'/'+data.id+'.html'" target="_blank" :underline="false" style="padding-top: 18px;display: flex;flex-direction: column;overflow:hidden;white-space: nowrap">
                                        <img :src="url+data.id+'.png'" style="width: 120px;height: 120px" :alt="data.name" :title="data.name"/>
                                        <div><b>{{ data.name}}</b></div>
                                    </el-link>
                                    <div style="margin-top: 8%">
                                        <div><small>{{ data.navigations.newdate }}</small></div>
                                        <div><small>{{ data.navigations.size }}</small></div>
                                    </div>
                                </div>
                            </template>
                        </div>
                        <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-sizes="[100, 200]"
                            :page-size="pageSize"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="recommendData.length">
                        </el-pagination>
                    </el-tab-pane>
                </el-tabs>
            </div>
            <div style="width: 25%;margin-left: 18px">
                <div>
                    <div style="height: 50px;line-height: 50px;font-size: 18px;">推荐标签</div>
                    <div style="padding-bottom: 18px">
                        <template v-for="data in $store.getters.getList.classification">
                            <span :style="{'font-size':Math.floor(Math.random() * (46 - 1))+'px','color':'#'+Math.random().toString(16).slice(2,8)}">{{data.name}}</span>
                        </template>
                    </div>
                </div>
                <div style="padding-bottom: 18px">
                    <dt>
                        <div style="height: 50px;line-height: 50px;font-size: 18px;border-bottom: 1px solid #409EFF">TOP榜</div>
                        <div style="background:rgb(217, 236, 255);display: flex;justify-content: space-between;color: #409EFF">
                            <div>
                                <span>排名</span>
                                <span>应用名称</span>
                            </div>
                            <div>
                                <span>大小</span>
                            </div>
                        </div>
                    </dt>
                    <dd>
                        <template v-for="(data,index) in hotData.slice(0,3)">
                            <div style="display: flex;padding:8px 0 8px 0;border-bottom: 1px dashed #ccc">
                                <div style="text-align: center;background-color: #409EFF;color: white;width:9%;margin-right: 4%">
                                    {{ index+1 }}
                                </div>
                                <div style="width: 65%;margin-right: 3%;overflow: hidden;white-space: nowrap">{{ data.name}}</div>
                                <div style="overflow: hidden;white-space: nowrap;width: 18%">{{ data.navigations.size}}</div>
                            </div>
                        </template>
                    </dd>
                </div>
                <div>
                    <dt>
                        <div style="height: 50px;line-height: 50px;font-size: 18px;border-bottom: 1px solid #409EFF;display: flex;justify-content: space-between">
                            <div>猜您喜欢</div>
                            <div>
                                <el-button type="primary" @click="change()">换一换</el-button>
                            </div>
                        </div>
                    </dt>
                    <dd style="display: flex;text-align: center;flex-wrap: wrap">
                        <template v-for="data in this.$store.getters.getList.likes.slice((currentChangeData-1)*6,currentChangeData*6)">
                            <div style="width: 49%;margin:18px 1% 8px 0">
                                <el-link :href="route+'/'+data.id+'.html'" target="_blank" :underline="false" style="display: flex;flex-direction: column;overflow:hidden;white-space: nowrap">
                                    <img :src="url+data.id+'.png'" :alt="data.name" :title="data.name" style="width: 120px;height: 120px"/>
                                    <div><b>{{ data.name }}</b></div>
                                </el-link>
                            </div>
                        </template>
                    </dd>
                </div>
            </div>
        </div>
    </el-main>
</template>
<script>
export default {
    name:'list',
    metaInfo () {
        return {
            title:this.title,
            meta:[
                {name: 'keywords', content:this.keywords},
                {name: 'description', content:this.description}
            ]
        }
    },
    filters:{
        classification:function(value,that){
            if(that.typeId()){
                return that.currentNavigation().type;
            }
            return value;
        }
    },
    data(){
        return {
            typeData:'all',
            activeName:'new',
            currentPage:1,
            currentChangeData:1,
            pageSize:100,
            url:'//127.0.0.1/api/',
            breadcrumb:'资源列表',
            newData:this.$store.getters.getList.apps,
            hotData:this.insertSort(this.$store.getters.getList.apps,'hot'),
            recommendData:this.insertSort(this.$store.getters.getList.apps,'recommend')
        }
    },
    methods: {
        handleSizeChange(val){
            this.pageSize=val;
        },
        handleCurrentChange(val){
            this.currentPage=val;
        },
        change(){
            this.currentChangeData=this.currentChangeData+1;
            if(this.currentChangeData>3){
                this.currentChangeData=1;
            }
        },
        //插入排序
        insertSort(data,type){
            const temp=[];
            for(var i=0;i<data.length;i++){
                temp.push(data[i]);
            }
            let len = temp.length;
            let preIndex, current ;
            for (let i = 1; i < len; i++) {
                preIndex = i - 1;
                current = temp[i];
                switch(true){
                    /*case type==='new':
                        while (preIndex >= 0 && current.navigations.newdate < temp[preIndex].navigations.newdate) {
                            temp[preIndex + 1] = temp[preIndex];
                            preIndex--;
                        }
                        break;*/
                    case type==='hot':
                        while (preIndex >= 0 && current.popular < temp[preIndex].popular) {
                            temp[preIndex + 1] = temp[preIndex];
                            preIndex--;
                        }
                        break;
                    case type==='recommend':
                        while (preIndex >= 0 && current.weights < temp[preIndex].weights) {
                            temp[preIndex + 1] = temp[preIndex];
                            preIndex--;
                        }
                        break;
                }
                temp[preIndex+1]=current;
            }
            return temp.reverse();
        },
        currentNavigation(){
            const currentPath=this.route;
            const typeId=this.typeId();
            for(var i=0;i<this.$store.getters.getNavigation.length;i++){
                if(this.$store.getters.getNavigation[i].route===currentPath){
                    if(typeId){
                        for(var j=0;j<this.$store.getters.getList.classification.length;j++){
                            if(typeId===this.$store.getters.getList.classification[j].id){
                                this.$store.getters.getNavigation[i].type=this.$store.getters.getList.classification[j].name;
                                break;
                            }
                        }
                    }else{
                        this.$store.getters.getNavigation[i].type=this.$store.getters.getNavigation[i].name;
                    }
                    return this.$store.getters.getNavigation[i];
                }
            }
            let name='应用软件';
            if(typeId){
                for(var j=0;j<this.$store.getters.getList.classification.length;j++){
                    if(typeId===this.$store.getters.getList.classification[j].id){
                        name=this.$store.getters.getList.classification[j].name;
                        break;
                    }
                }
            }
            return {
                type:name,
                name:'应用软件',
                route:'/app'
            }
        },
        typeId(){
            let typeId=0;
            let path=this.$route.path;
            if(path.match(/.*?(\d+).*?/i)){
                typeId=path.match(/.*?(\d+).*?/i)[1];
            }
            return Number(typeId);
        }
    },
    computed:{
        route(){
            let path=this.$route.path;
            const len=path.length;
            const last=path.charAt(len-1);
            if(last==='/'){
                path=path.slice(0,path.length-1);
            }
            if(path.match(/(.*?)_\d+.*?/i)){
                path=path.match(/(.*?)_\d+.*?/i)[1];
                for(var i=0;i<this.$store.getters.getNavigation.length;i++){
                    if(this.$store.getters.getNavigation[i].route===path){
                        this.$store.getters.getNavigation[i].type=this.$store.getters.getNavigation[i].name;
                    }
                }
            }
            return path;
        },
        title(){
            let info=this.currentNavigation();
            return info.name+'-'+info.name+'下载-'+info.type+'下载排行榜-Jr'+info.name+'下载网';
        },
        keywords(){
            let info=this.currentNavigation();
            return info.type+'产品,'+info.type+'下载';
        },
        description(){
            let info=this.currentNavigation();
            let temp='';
            for(var i=0;i<this.$store.getters.getList.classification.length;i++){
                temp=temp+info.name+this.$store.getters.getList.classification[i].name+',';
            }
            if(!this.typeId()){
                return '提供'+info.name+'下载,如'+temp+'等'+info.name+'下载,每日更新最好的'+info.name+'免费下载';
            }else{
                return info.type+'产品的使用越来越广泛,'+info.type+'安装后可以直接在终端设备上进行操作使用,并且还可以及时了解到最新的'+info.type+'动态,充实了生活,'+info.type+'软件推荐给大家';
            }
        }
    },
    asyncData ({store,route}) {
        return Promise.all([
            store.dispatch('FETCH_LIST_NAVIGATION'),
            store.dispatch('FETCH_LIST',route)
        ])
    },
}
</script>
<style>
.tag{
    line-height: 50px;
    border-bottom: 2px solid #409EFF;
    font-size: 24px;
    color: #409EFF;
}
</style>
