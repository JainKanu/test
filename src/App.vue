<template>
  <div id="app">
    <nav>
      <b-button variant="outline-success" to="/">Users</b-button>
      <b-button class="formLink" variant="outline-primary" to="/form-page"
        >Forms</b-button
      >
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.formLink {
  margin-left: 20px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
