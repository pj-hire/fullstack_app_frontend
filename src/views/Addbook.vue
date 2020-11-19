<template>
  <div class="add-book-box">
     <div>Title: <input v-model="newbook.title"></div>
     <div>Year: <input v-model.number="newbook.year"></div>
     <div>Author: <input v-model="newbook.author"></div>
     <div>Genre: <input v-model="newbook.genre"></div>
     <button @click="save">Save</button>
  </div>
</template>

<script>

import firebase from 'firebase';
import axios from 'axios';

export default {
  name: "Addbook",
  data() {
    return {
      user: {},
      newbook: {
        title: '',
        author: '',
        year: '',
        genre: ''
      }
    }
  },
  methods: {
    save() {
      axios.post('http://localhost:3001/addbook', this.newbook)
        .then(response => {
          console.log(response);
          this.newbook.title = '';
          this.newbook.author = '';
          this.newbook.year = '';
          this.newbook.genre = '';
        })
        .catch(err => {
          throw err;
        })
    }
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
