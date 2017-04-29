<template lang="html">
<div class="">
  <div v-for="post in posts">
    <div v-if="post.id == id">
      <img :src="post.photoUser" alt="">{{post.username}}
      <input type="text" name="" value="">
    </div>
  </div>
</div>

</template>

<script>
export default {
  props: ['id', 'posts']
}
</script>

<style lang="css">
</style>
