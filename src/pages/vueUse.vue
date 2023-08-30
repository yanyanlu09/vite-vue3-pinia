<template>
  <h1>测试vueUse的鼠标坐标</h1>
  <h3>Mouse： {{ x }}、 {{ y }}</h3>
</template>
 
<script lang="ts" setup>
import { defineComponent, reactive } from 'vue';
import { useMouse } from '@vueuse/core';

const {x,y} = useMouse()


// export default defineComponent({
//   name:'VueUse',
//   setup(){
//     const {x,y} = useMouse()
//     return {
//       x,
//       y
//     }
//   }
// })

</script>