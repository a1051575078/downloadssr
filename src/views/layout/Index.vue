<template>
    <div>
        <el-container direction="vertical">
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </el-container>
    </div>
</template>
<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
export default {
    name:'index',
    components:{Header,Main,Footer},
    asyncData ({store,router}) {
        return Promise.all([
            store.dispatch('FETCH_CONFIG'),
            store.dispatch('FETCH_LIST_NAVIGATION'),
            store.dispatch('FETCH_APP'),
        ])
    },
}
</script>
<style>
body, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, ul, ol, li, input, textarea, th, td {
    margin: 0;
    padding: 0;
}
.font{
    font-size: 14px;
    color: #666;
}
body > .el-container {
    margin-bottom: 40px;
    display: flex;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}
.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>
