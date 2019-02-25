<template>
<div class="fondo">
  <form class="form">
    <h1 class="title">Burguer Queen</h1>
    <div class="form-group">
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre del Mesero">
    </div>
    <div class="form-group">
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña">
    </div>
        <router-link class="btn-entrar" to="/about" > Entrar </router-link>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {}
};
</script>

<style>
.fondo {
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("../assets/burguer.jpg");
  height: 100%;
  width: 100%;
}
.form {
  float: none;
  text-align: center;
  margin: 20%;
}

.title {
  color: rgb(245, 139, 10);
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 50px;
}
.btn-entrar {
  background-color: rgb(172, 16, 53);
  border: none;
  border-radius: 3px;
  color: antiquewhite;
  cursor: pointer;
  display: block;
  font-size: 28px;
  font-size: 28px;
  text-decoration: none;
  padding: 18px 100px;
  margin: 20px;
}
</style>
