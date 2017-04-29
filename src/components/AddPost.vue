<template lang="html">
  <div class="">
    Post
    <div class="">
      <input type="file" @change="onFileChange">
      Someting about photo<br>
      <textarea name="name" v-model="description" rows="8" cols="80"></textarea><br>
      <button type="button" @click="addPostToApp">add</button><br><br><br>
    </div>
  </div>
</template>

<script>
export default {
  props: ['addPost', 'profile'],
  data () {
    return {
      file: '',
      description: '',
      comments: [
        {
          comment: 'eiei'
        }
      ]
    }
  },
  methods: {
    addPostToApp () {
      var newPost = {
        username: this.profile.displayName,
        photoUser: this.profile.photoURL,
        description: this.description,
        comments: this.comments,
        photoShose: ''
      }
      this.addPost(newPost, this.file)
      this.brand = ''
      this.model = ''
      this.serie = ''
      this.description = ''
      this.file = ''
    },
    onFileChange (e) {
      var files = e.target.files
      this.file = files[0]
    }
  }
}
</script>
<style lang="css">
</style>
