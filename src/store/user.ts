import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',   //id必填，且是唯一的
  state: ()=> {
    return {
      name:'张三'
    }
  },
  actions:{
    updateName(name){
      this.name = name
    }
  }
})
