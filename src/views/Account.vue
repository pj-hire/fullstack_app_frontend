<template>
  <div class="account-box">
    <div>Display Name: <input v-model="name"></div>
    <div>Email: <input v-model="email"></div>
    <div>Password: <input v-model="pswd"></div>
    <div>Confirm Password: <input v-model="confirmpswd"></div>
    <button @click="save">Save Changes</button>
    <button @click="logout">Log Out</button>
  </div>
</template>

<script>

import firebase from 'firebase';
//import axios from 'axios';

export default {
  name: "Account",
  data() {
    return {
      user: {},
      uid: '',
      name: '',
      email: '',
      pswd: '',
      confirmpswd: ''
    }
  },
  methods: {
    save() {
      const user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: this.name,
      }).then(function() {
        console.log('display name change successful')
      }).catch(function(error) {
        console.log(error);
      });
      user.updateEmail(this.email).then(function() {
        console.log('email change successful')
      }).catch(function(error) {
        console.log(error);
      });
      if (this.pswd === this.confirmpswd) {
        var newPassword = this.pswd;
        user.updatePassword(newPassword).then(function() {
          console.log('password change successful');
          this.pswd = '';
          this.confirmpswd = '';
        }).catch(function(error) {
          console.log(error);
        });
      }
      else {
        alert(`passwords don't match!`)
      }
    },
    logout() {
      firebase.auth().signOut()
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        this.uid = user.uid;
        this.name = user.displayName;
        this.email = user.email;
      }
      else {
        console.log('no user signed in')
        window.location.href = "http://127.0.0.1:8080/";
      }
    })
  }
}

</script>
