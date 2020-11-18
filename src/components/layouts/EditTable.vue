<template>
<el-main class="hibe">
    <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    row-key="id"
    :header-cell-style="headeRowClass"
    @selection-change="handleSelectionChange">
    <el-table-column
        width="35">
          <i class="el-icon-rank"/>
    </el-table-column>
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="year"
      label="年份"
      width="90">
        <template slot-scope="scope">
            <el-input v-model=scope.row.year></el-input>
        </template>
    </el-table-column>
    <el-table-column
      prop="content"
      label="预算内容"
      width="200">
        <template slot-scope="scope">
            <el-input v-model=scope.row.content></el-input>
        </template>
    </el-table-column>
    <el-table-column
      prop="budget"
      label="合同金额"
      width="150"
      show-overflow-tooltip>
        <template slot-scope="scope">
            <el-input v-model=scope.row.budget></el-input>
        </template>
    </el-table-column>
    <el-table-column
      prop="budget"
      label="计划列支"
      width="150"
      show-overflow-tooltip>
        <template slot-scope="scope">
            <el-input v-model=scope.row.budget></el-input>
        </template>
    </el-table-column>
    <el-table-column
      prop="date"
      label="维保起止时间"
      width="380"
      show-overflow-tooltip>
        <template slot-scope="scope">
        <el-date-picker
            v-model="scope.row.date"
            type="daterange"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
        </el-date-picker>
            <!--el-input v-model=scope.row.date></el-input-->
        </template>
    </el-table-column>
    <el-table-column
      prop="tips"
      label="备注"
      width="500"
      show-overflow-tooltip>
        <template slot-scope="scope">
            <el-input v-model=scope.row.tips></el-input>
        </template>
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="80"
      show-overflow-tooltip>
    <template slot-scope="scope">
        <el-button
          @click.native.prevent="saveRow(scope.$index, tableData)"
          type="text"
          size="small">
          <i class="far fa-save"></i>
        </el-button>
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          <i class="el-icon-delete"></i>
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-row :gutter="20">
  <el-col :span="24" :offset="21" class="my-btn-group">
        <el-button type="primary" plain @click="added">添加</el-button>
        <el-button type="primary"  @click="deleted">删除</el-button>
  </el-col>
  </el-row>
  <el-dialog
    title="确认删除"
    :visible.sync="dialogVisible"
    width="30%"
    >
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
    </el-dialog>
  </el-main>
</template>
<script>

import draggable from 'vuedraggable'
import Sortable from 'sortablejs';

export default {
    name:"EditTable",
        components: {
            draggable,
        },
    data(){
        return {
        dragging: false,
        dialogVisible: false,
        tableData: [
            {
                id:'1',
                year: '2016',
                content: '科华机房维保',
                budget: '10000',
                date:'',
                tips:''
            }, {
                id:'2',
                year: '2016',
                content: '华机房',
                budget: '10000',
                date:'',
                tips:''
            }, {
                id:'3',
                year: '2016',
                content: '房维保',
                budget: '10000',
                date:'',
                tips:''
            }, {
                id:'4',
                year: '2016',
                content: '科华机房维保',
                budget: '10000',
                date:'',
                tips:''
            }, {
                id:'5',
                year: '2016',
                content: '州分',
                budget: '10000',
                date:'',
                tips:''
            }, {
                id:'6',
                year: '2016',
                content: '市州房',
                budget: '10000',
                date:'',
                tips:''
            }, {
                id:'7',
                year: '2016',
                content: '心机房维保',
                budget: '10000',
                date:'',
                tips:''
        }],
        multipleSelection: []
        }
    },
    mounted() {
        this.rowDrop();
    },
    // watch:{
    //     tableData(){
    //         console.log(this.tableData)
    //     }
    // },
    methods: {
       deleteRow(index, rows) {
        this.dialogVisible = true
        console.log(index, rows)
        // rows.splice(index, 1);
      },
      saveRow(index, rows) {
          console.log(index, rows)
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      //行元素拖拽
      rowDrop () {
        // 此时找到的元素是要拖拽元素的父容器
        const tbody = document.querySelector('.hibe .el-table__body-wrapper tbody');
        console.log(tbody)
        const _this = this;
        Sortable.create(tbody, {
        //  指定父元素下可被拖拽的子元素
            draggable: ".hibe .el-table__row",
            onEnd ({ newIndex, oldIndex }) {
                const currRow = _this.tableData.splice(oldIndex, 1)[0];
                 _this.tableData.splice(newIndex, 0, currRow);
            }
        });
      },
      //表头的背景颜色
      headeRowClass({row, column, rowIndex, columnIndex}){
        if(rowIndex==0){
            return 'background:#F7F8F9'
        }
      },
      //新增
      added(){
          let len = this.tableData.length
          let i = toString(len + 1)
          this.tableData.push({
                id:i,
                year: '',
                content: '',
                budget: '',
                date:'',
                tips:''
          });
      },
      //删除
      deleted(){

      }
    }
}
</script>
<style scoped>
.my-btn-group{
    margin-top: 20px
}
</style>