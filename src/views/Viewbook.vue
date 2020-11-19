<template>
  <div class="add-book-box">
     <div>Title: {{ book.title }}</div>
     <div>Year: <input v-model.number="book.year"></div>
     <div>Author: <input v-model="book.author"></div>
     <div>Genre: <input v-model="book.genre"></div>
     <div>Completed: <input type="checkbox" :true-value="1" :false-value="0" v-model="book.haveread"></div>
     <button @click="update">Update</button>
     <button @click="remove">Delete</button>
  </div>
</template>

<script>

import axios from 'axios';
import firebase from 'firebase';

export default {
  name: "Viewbook",
  data() {
    return {
      user: {},
      book: {
        author: '',
        year: '',
        genre: '',
        haveread: ''
      }
    }
  },
  methods: {
    update() {
      axios.put('http://localhost:3001/updatebook', this.book)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          throw err;
        })
    },
    remove() {
      axios.delete('http://localhost:3001/deletebook/' + this.book.title)
        .then(response => {
          console.log(response);
          window.history.back();
        })
        .catch(err => {
          throw err;
        })
      }
  },
  created(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        console.log(this.$route.params.booktitle);
        axios.get('http://localhost:3001/books/' + this.$route.params.booktitle)
          .then(results => {
            console.log(results)
            this.book = results.data[0];
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
