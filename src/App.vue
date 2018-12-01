<template>
  <div id="app">
    <nav class="navbar is-link">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <h3 class="subtitle is-3 has-text-white">
            Go-2SanFe
          </h3>
        </router-link>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
