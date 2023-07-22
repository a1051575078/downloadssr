<template>
    <router-view :key="key"/>
</template>
<script>
export default {
    name:'Main',
    computed:{
        key(){
            return this.$route.path;
        }
    }
}
</script>
<style>
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
.el-main {
    padding: 0 168px;
    color: #333;
}
.el-divider--horizontal {
    display: block;
    height: 1px;
    width: 100%;
    margin: 8px 0;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}
</style>
