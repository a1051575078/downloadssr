<template>
    <el-main>
        <div style="text-align: center">
            <img style="height: 188px" src="../../public/404.png" alt="404" title="404"/>
        </div>
        <div style="text-align: center">
            <h1>很抱歉，您访问的页面不存在...</h1>
        </div>
        <div style="text-align: center;margin:18px 0 28px 0">
            <el-button type="primary" style="margin-right:166px" @click="$router.push('/')">返回首页</el-button>
            <el-button type="primary" @click="$router.go(-1)">返回上页</el-button>
        </div>
        <el-divider>休息一下，看下面的软件信息</el-divider>
        <div style="display: flex;justify-content: center;margin-top: 28px">
            <div style="width:388px">
                <h2>常用软件</h2>
                <el-divider></el-divider>
                <div v-for="(data,index) in this.$store.getters.getApp.slice(8,16)" style="margin-top: 8px;display: flex">
                    <span style="font-size: 14px;margin-right: 8px">{{ index+1}}</span>
                    <el-link :underline="false" :href="'/app/'+data.id+'.html'">
                        {{data.name}}
                    </el-link>
                </div>
            </div>
            <div style="width: 388px">
                <h2>装机必备</h2>
                <el-divider></el-divider>
                <div v-for="(data,index) in this.$store.getters.getApp.slice(16,24)" style="margin-top: 8px;display: flex">
                    <span style="font-size: 14px;margin-right: 8px">{{ index+1}}</span>
                    <el-link :underline="false" :href="'/app/'+data.id+'.html'">
                        {{data.name}}
                    </el-link>
                </div>
            </div>
        </div>
    </el-main>
</template>
<script>
export default {
    name:'any',
    metaInfo () {
        return {
            title:'404页面未找到_应友下载网',
            meta:[
                {name: 'keywords', content:'404页面'},
                {name: 'description', content:'404页面未找到'}
            ]
        }
    },
}
</script>
