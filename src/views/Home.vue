<template>
  <div >

     <div @click="onload"> onload</div>
  </div>
 
</template>


<script>
export default {
  methods:{
    onload(){
      console.log('onload')
      fetch('/article/lists')
      .then(res=>res.json())
      .then(res=>{
        if(res.status==200){
          console.log('success')
        }
      })
    }
  }

}
</script>

<style>

</style>