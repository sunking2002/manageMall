<template>
    <div>
        <el-container style="height:100vh">
            <el-aside width="auto"><Aside/></el-aside>
            <el-container>
                <el-header><CommonHeader/></el-header>
                <CommonTag></CommonTag>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import Aside from '../src/components/Aside.vue'
    import CommonHeader from '../src/components/CommonHeader.vue'
    import CommonTag from '../src/components/CommonTag.vue'
    export default {
        name:'Main',
        components:{
            Aside,
            CommonHeader,
            CommonTag
        }
    }
</script>

<style scoped>
    .el-header{
        background-color:#333;
    }
    .el-main{
        padding-top: 0px;
    }
</style>