<template>
  <div class="__tag">
    {{ msg }}
  </div>
</template>

<script>
  import tagMixin from './tagMixin'

  export default  {
    mixins:[ tagMixin ],
    data () {
      return {
        msg: 'hello vue'
      }
    }
  }

</script>

<style>
  .__tag {
    font-size: 40px;
    color: #e2e2e2;
  }
</style>
