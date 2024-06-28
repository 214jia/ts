import {reactive} from 'vue'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
  } from '@element-plus/icons-vue'  

import {ITest} from '../../models/index'


export const useMenu =()=>{
    const items = reactive<Array<ITest>>([
        {name:'首页',url:'/index',icon:Document},
        {name:'数据监控',url:'/monitor',icon:Location},
        {name:'订单信息',url:'/order',icon:IconMenu},
        {name:'统计管理',url:'/census',icon:Setting}
    ]);
    return {
        items
    }
}