<template>
  <div>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>

import firebase from "firebase";
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

export default {
  name: 'Home',
  created() {
    console.log('created');
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ],
      signInSuccessUrl: '/dashboard',
        //other config options...
    });
  }
}

</script>
