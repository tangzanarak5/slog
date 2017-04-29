<template>
  <div id="app">
    <div v-if="ready">
      <div v-if="authorized" >
        <img :src="profile.photoURL" alt="">
        <h1>{{ profile.displayName }}</h1>
        <button type="button" @click="logout" class="button is-danger">logout</button>
      </div>
      <div v-else>
        <button type="button" @click="login" class="button is-primary">login</button>
      </div>
    </div>
    <div v-else>
      <button type="button" name="button" class="button is-primary is-loading">login</button>
    </div>
    <router-view :posts="post" :addPost="addPost" :profile="profile"></router-view>
    <router-link to="/addpost" >addpost</router-link>
  </div>
</template>

<script>
import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyBRctA3Eq4nm23rB5Ho48TmSwX-q1UGARQ',
  authDomain: 'slog-1d912.firebaseapp.com',
  databaseURL: 'https://slog-1d912.firebaseio.com',
  projectId: 'slog-1d912',
  storageBucket: 'slog-1d912.appspot.com',
  messagingSenderId: '203904123343'
}
firebase.initializeApp(config)
var Post = firebase.database().ref('post')
var storage = firebase.storage().ref('photoPost')
var provider = new firebase.auth.FacebookAuthProvider()
import AddPost from './components/AddPost'
export default {
  name: 'app',
  data () {
    return {
      todoInput: '',
      xxx: 'xxx',
      profile: {},
      ready: false,
      authorized: false,
      todos: [],
      post: []
    }
  },
  mounted () {
    let vm = this
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        vm.authorized = true
        vm.profile = user
      }
      vm.ready = true
    })
    Post.on('child_added', function (snapshot) {
      var itemSlog = snapshot.val()
      itemSlog.id = snapshot.key
      vm.post.push(itemSlog)
    })
  },
  methods: {
    addPost (newPost, file) {
      storage.child(file.name).put(file).then(function (snapshot) {
        newPost.photoShose = snapshot.downloadURL
        Post.push(newPost)
        console.log('success')
      })
    },
    login () {
      firebase.auth().signInWithRedirect(provider)
    },
    logout () {
      let vm = this
      firebase.auth().signOut().then(function () {
        vm.authorized = false
      }, function (error) {
        console.error(error)
      })
    }
  },
  components: {
    AddPost
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
