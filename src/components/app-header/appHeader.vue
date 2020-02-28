<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand>
        <router-link to="/">EMT</router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/about">About</router-link>
          </b-nav-item>
           <b-nav-item>
            <router-link to="/employees">Employees</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'app-header',
};
</script>

<style scoped>
.navbar-brand a,
.nav-item a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
}
</style>
