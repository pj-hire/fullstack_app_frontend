<template>
  <div id="app">
    <div id="nav">
      <img alt="Vue logo" src="./assets/logo.png"> <br>
      <h2>Books App</h2>
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

//custom styles

.book-router {
  border: solid 1px;
  margin-top: 20px;
  padding: 20px;
}

.add-book-box {
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding: 20px 20px 20px 40px;
  text-align: center;
}

.add-book-box div {
  margin-bottom: 20px;
}

.account-box {
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  border: solid 1px;
  padding: 20px 20px 20px 40px;
  text-align: center;
}

.account-box div {
  margin-bottom: 20px;
}

.account-box button {
  margin-top: 20px;
  margin-right: 10px;
}

.box {
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  border: solid 1px;
  padding: 20px 20px 20px 40px;
  text-align: left;
}

.box div {
  margin-bottom: 20px;
}

.box button {
  margin-top: 20px;
}

</style>
