<template>
<el-main>
<el-row class="title-row">
<el-col :span=4>
    <h2>总览合同维保</h2>
</el-col>
<el-col :span=20>
    <el-button size="small" >导出合同维保表格</el-button>
</el-col>
</el-row>
    <h4>已签订合同维保</h4>
    <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item name="1">
    <span class="collapse-title" slot="title">
        <span>硬件设备维保</span>
        <span class="text-total">小计金额</span>
    </span>
        <view-table></view-table>
    </el-collapse-item>
    </el-collapse>
    <el-row>
        <el-col :span="4" :offset="20">
            <h5>合计金额：</h5>
        </el-col>
    </el-row>
    <h4>新增购买合同维保</h4>
    <el-collapse v-model="activeRow" @change="handleChange">
    <el-collapse-item name="1">
    <span class="collapse-title" slot="title">
        <span>硬件设备维保</span>
        <span class="text-total">小计金额</span>
    </span>
        <view-table></view-table>
    </el-collapse-item>
    </el-collapse>
    <el-row>
        <el-col :span="4" :offset="20">
            <h5>合计金额：</h5>
        </el-col>
    </el-row>
</el-main>
</template>
<script>
import ViewTable from '../../components/layouts/ViewTable'
export default {
    name: "view-all",
    data() {
        return {
            activeNames: ['1'],
            activeRow: ['1']
        }
    },
    components: {
        ViewTable
    },
    methods:{
        handleChange(val) {
            console.log(val);
        },
    }
}
</script>
<style scoped>
.title-row{
    margin: 20px 0;
}
h2{
    margin: 0;
}
h4{
    margin: 40px 0 20px 0;
    color: #7F7F7F;
}

.collapse-title {
    flex: 1 0 90%;
    order: 1;
}
.el-collapse-item__header {
    flex: 1 0 auto;
    order: -1;
}

.text-total{
    margin-left:1100px
}
</style>