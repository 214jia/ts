<script setup lang="ts">
import {ref,onMounted,computed} from 'vue'
import {ITableData} from '../../models/index'
import  http from '../../http'
import {ElNotification} from 'element-plus'
const tableData=ref<ITableData[]>([]);//初始化&添加类型
let dialogFormVisible=ref<boolean>(false);//弹窗的状态，默认隐藏
const form =ref<ITableData>({}as ITableData);//类型断言
let catgory=ref<string>('');//类型

onMounted(async ()=>{
getData()
 
})
const getData=async()=>{
  let {data} = await http.request<{data:ITableData[]}>('get','/data/query');
  tableData.value=data;
}

//文本格式化
const checkFilter=computed(()=>(item:boolean):string=>{
  switch (item) {
    case true:
      return '已发布'


    case false:
      return '未发布'
    default:
      return '未知'
  }
})
// 设置数据
const setData=(type:string,row:ITableData|null)=>{
  catgory.value=type;
  dialogFormVisible.value=true;//弹窗
  type=='add'? form.value={} :form.value={...row};
}

//提交数据
const submitData=async()=>{
  ElNotification({
    title:'提示',
    message:'提交成功',
    type:'success',
    duration:1000
  })
  dialogFormVisible.value=false;
  let method=catgory.value=='add'?'post':'put';
  let {data} = await http.request<{data:ITableData[]}>(method,`/data/${catgory.value}`,form.value);
  getData();
}


//筛选
const filterHandler=(value:string,row:ITableData,column:any)=>{
  return row.date===value;
}

const dateHandler=computed(()=>{
   return tableData.value.map((item:ITableData):{text:string,value:string}=>({text:item.date,value:item.date}))
   }
)

</script>

<template>  

  <div>
    <!--添加-->
    <div>
        <el-button type="success" @click="setData('add',null)" round>添加</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">  

      <el-table-column prop="date" label="日期" :filters="dateHandler" :filter-method="filterHandler"></el-table-column>  

      <el-table-column prop="title" label="发布标题"></el-table-column>  

      <el-table-column prop="user" label="发布作者"></el-table-column>  

      <el-table-column label="发布状态">  

        <template #default="{ row }">  

          <el-tag :type="row.check ? 'success' : 'warning'">{{ checkFilter(row.check) }}</el-tag>  

        </template>  

      </el-table-column>

        <el-table-column label="操作">
      <template #default="scope">
        <!-- <el-button size="mini" type="primary" @click="setData('setData',row)">编辑</el-button> -->
        <el-button size="mini" type="primary" @click="setData('edit', row)">编辑</el-button>
        <el-button size="mini" type="danger">删除</el-button>
      </template>
    </el-table-column>  

    </el-table>  

    <el-dialog title="添加" v-model="dialogFormVisible" width="500">
  <el-form :model="form">
    <el-form-item label="发布作者" >
      <el-input v-model="form.user"></el-input>
    </el-form-item>
      <el-form-item label="文章标题" >
      <el-input v-model="form.title"></el-input>
    </el-form-item>
      <el-form-item label="发表日期" >
         <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
      </el-form-item>
      
      <el-form-item label="发表状态" >
         <el-switch v-model="form.check"></el-switch>
      </el-form-item>
      

  </el-form>
  <div class="footer dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitData">确 定</el-button>
  </div>
</el-dialog>

  </div>  

</template>

<style scoped>

</style>