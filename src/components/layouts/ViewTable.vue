<template>
    <el-table
        :data="gridData" 
        :header-cell-style="headeRowClass"
        :cell-style="columnStyle">
        <el-table-column property="year" label="年份" width="70"></el-table-column>
        <el-table-column property="content" label="预算内容" width="200"></el-table-column>
        <el-table-column property="budget" label="合同金额" width="200"></el-table-column>
        <el-table-column property="budget" label="计划列支" width="200"></el-table-column>
        <el-table-column property="daterange" label="维保起止时间" width="200"></el-table-column>
        <el-table-column property="tips" label="备注"></el-table-column>
    </el-table>
</template>
<script>
export default {
    data() {
        return {
            gridData:''
        }
    },
    methods:{
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
<style scope>

</style>