<template>
  <div>
    <div class="box" v-for="book in books" :key="book.title">
      <div><router-link :to="{name: 'Viewbook', params: {booktitle: book.title}}"><b>{{book.title}}</b> - {{book.author}} - {{book.year}} - {{book.genre}}</router-link></div>
    </div>
</div>
</template>

<script>

import firebase from 'firebase';
import axios from 'axios';

export default {
  name: "Unread",
  data() {
    return {
      user: {},
      books: {}
    }
  },
  methods: {
    //methods
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        axios.get('http://localhost:3001/notread')
          .then(results => {
            console.log(results)
            this.books = results.data;
          })
          .catch(err => {
            throw err
          })
      }
      else {
        console.log('no user signed in')
        window.location.href = "http://127.0.0.1:8080/";
      }
    })
  }
}

</script>
