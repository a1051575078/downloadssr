<template>
    <el-footer style="height: auto;margin-top: 88px">
        <div style="display: flex;flex-direction: column;align-items: center">
            <div>
                <el-link href="/about" target="_blank" :underline="false">关于本站</el-link>
                <el-divider direction="vertical"></el-divider>
                <el-link href="/about" target="_blank" :underline="false">下载帮助</el-link>
                <el-divider direction="vertical"></el-divider>
                <el-link href="/about" target="_blank" :underline="false">下载声明</el-link>
                <el-divider direction="vertical"></el-divider>
                <el-link href="/about" target="_blank" :underline="false">站点地图</el-link>
                <el-divider direction="vertical"></el-divider>
                <el-link href="/about" target="_blank" :underline="false">联系我们</el-link>
            </div>
            <div class="font">
                Copyright 2022-{{new Date().getFullYear()}} Jrdownload.com 【Jr下载】 版权所有 川ICP备1111号-1 | 川公网安备 4xxx60号
            </div>
            <div class="font">
                声明:本站所有软件和文章来自互联网 如有异议 请与本站联系
            </div>
        </div>
    </el-footer>
</template>
<script>
export default {
    name:'Footer',
    asyncData ({store,router}) {
        return Promise.all([
            store.dispatch('FETCH_ABOUT'),
        ])
    },
}
</script>
<style>
.el-footer {
    border-top: 1px solid #ddd;
    padding: 0 168px;
    color: #333;
    line-height: 38px;
}
</style>
