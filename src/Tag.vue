<template>
  <div class="__tag">
    {{ msg }}
  </div>
</template>

<script>
  export default  {
    data (){
      return {
        msg: 'hello vue'
      }
    }
  }

</script>

<style>
  .__tag {
    font-size: 20px;
    color: #e5e5e5;
  }
</style>
