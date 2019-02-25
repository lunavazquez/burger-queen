<template>
  <nav class="navbar navbar-light ">
  <span class="navbar">Burguer Queen</span>
        <router-link  to="/" class="salir"> Salir </router-link>
  </nav>

</template>
<script>
export default {
  name: "about"
};
</script>

<style>
body {
  background-image: none;
}

.navbar {
  background: #666666;
  /* opacity: 0.8; */
  line-height: 40px;
  /* display: block; */
  font-size: 22px;
  font-weight: bolder;
}

.salir {
  color: white;
  text-decoration: underline;
  font-size: 20px;
}
</style>
