<template>
<el-main>
    <h2>已签订合同维保</h2>
    <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item name="1">
    <span class="collapse-title" slot="title">
            <span>硬件设备维保</span>
            <span  class="text-total">小计金额</span>
    </span>
        <el-button size="mini" type="primary" plain @click="dialogVisible = true" class="my-button">往年数据</el-button>
        <EditTable></EditTable>
    </el-collapse-item>
    </el-collapse>
    <el-dialog
    v-dialogDrag
    :visible.sync="dialogVisible"
    width="90%">
    <el-row type="flex" class="row-bg my-pop-window-title">
      <el-col :span="3"><p class="my-title">硬件设备维保</p></el-col>
      <el-col :span="17">年度
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="4">小计金额</el-col>
    </el-row>
    <hr>
        <el-table
            :data="gridData" 
            class="my-table" 
            :header-cell-style="headeRowClass"
            :cell-style="columnStyle">
            <el-table-column property="year" label="年份" width="70"></el-table-column>
            <el-table-column property="content" label="预算内容" width="200"></el-table-column>
            <el-table-column property="budget" label="合同金额" width="200"></el-table-column>
            <el-table-column property="budget" label="计划列支" width="200"></el-table-column>
            <el-table-column property="daterange" label="维保起止时间" width="200"></el-table-column>
            <el-table-column property="tips" label="备注"></el-table-column>
        </el-table>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">关闭</el-button>
        </span>
    </el-dialog>
</el-main>
</template>

<script>
import EditTable from '@/components/layouts/EditTable'

    export default {
        name: "signed-table",
        components: {
            EditTable
        },
        data() {
            return {
                activeNames: ['1'],
                dialogVisible: false,
                gridData: [{
                    id:'1',
                    year: '2016',
                    content: '科华机房维保',
                    budget: '10000',
                    date:'',
                    tips:''
                }],
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: ''
        }
        },
        methods:{
            handleChange(val) {
                console.log(val);
            },
            headeRowClass({row, column, rowIndex, columnIndex}){
                if(rowIndex==0){
                    return 'background:#F7F8F9'
                }
            },
            columnStyle({row, column, rowIndex, columnIndex}){
                if (columnIndex ==1||columnIndex ==3||columnIndex ==5) {   
	                return 'background:rgba(150, 154, 184,0.05);'
	  		  	}
            }
        },
    }

</script>

<style scoped>
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
.my-button{
    margin-left: 30px;
}
.my-pop-window-title {
    line-height: 40px;
}
.my-title{
    font-size: 24px;
    margin: 0 0 0 10px;
    font-weight:bold;
}
.my-table{
    margin-top: 50px;
}
</style>