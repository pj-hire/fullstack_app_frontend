<template>
  <div class="book-router">
    <router-link :to="{name: 'Unread'}">Unread</router-link> |
    <router-link :to="{name: 'Read'}">Read</router-link> |
    <router-link :to="{name: 'Addbook'}">Add Book</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

import firebase from 'firebase';

export default {
  name: "Books",
  data() {
    return {
      //data
    }
  },
  methods: {
    //methods
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      }
      else {
        console.log('no user signed in')
        window.location.href = "http://127.0.0.1:8080/";
      }
    })
  }
}

</script>
