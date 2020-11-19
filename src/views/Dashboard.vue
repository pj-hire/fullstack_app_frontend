<template>
  <div>
    <router-link :to="{name: 'Info'}">Info</router-link> |
    <router-link :to="{name: 'Account'}">Account</router-link> |
    <router-link :to="{name: 'Books'}">Books</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

import firebase from 'firebase';

export default {
  name: "Dashboard",
  data() {
    return {
      //data
    }
  },
  methods: {
    //methods
  },
  created() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user);
      }
      else {
        console.log('no user signed in')
        window.location.href = "http://127.0.0.1:8080/";
      }
    })
  }
}

</script>
