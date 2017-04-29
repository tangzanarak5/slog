import Vue from 'vue'
import Router from 'vue-router'
import Feeds from '@/components/Feeds'
import AddPost from '@/components/AddPost'
import Comments from '@/components/Comments'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Feeds',
      component: Feeds
    },
    {
      path: '/addpost',
      name: 'AddPost',
      component: AddPost
    },
    {
      path: '/comments/:id',
      name: 'Comments',
      props: true,
      component: Comments
    }
  ]
})
