<template>
  <div class="hello">
    <div v-for="post in posts">
      <div class="">
        <div class="">
          <img :src="post.photoUser" alt="">{{post.username}}
        </div>
        <div class="">
          <router-link :to="'/comments/' + id"><img :src="post.photoShose" alt="" @click="getID (post.id)"></router-link>
          <br>
          {{post.description}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['posts'],
  name: 'hello',
  data () {
    return {
      id: '',
      fluke: 'fluke'
    }
  },
  methods: {
    getID (id) {
      this.id = id
      console.log(this.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
