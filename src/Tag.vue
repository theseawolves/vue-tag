<template>
  <div class="__tag">
    {{ msg }}
  </div>
</template>

<script>
  module.exports = {
    data: function(){
      return {
        msg: 'hello vue-tag'
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
