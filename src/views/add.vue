<template>
  <div>
    <van-uploader :max-count="1" v-model="fileList" :after-read="afterRead"/> 
  </div>
</template>

<script>
import { Uploader } from 'vant'
export default {
  components:{
    [Uploader.name]:Uploader
  },
  data(){
    return{
      fileList:[]
    }
  },
  methods:{
    afterRead(info){
      console.log(info)
    }
  }
}
</script>


<style>

</style>