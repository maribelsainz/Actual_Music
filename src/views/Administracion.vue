<template>
  <div class="admin">
    <h1>Administración</h1>

    <table class="admin__table table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Artista</th>
          <th>Imagen</th>
          <th>Editar</th>
          <th>Eliminar</th>
          <th>Ver</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(artista, index) in traerArtista" :key="index">
          <th>{{ artista.streamable }}</th>
          <td>{{ artista.name }}</td>
          <td><img :src="artista.image[0]['#text']" :alt="index" /></td>
          <td>
            <button type="button" class="btn btn-dark">
              Editar
            </button>
          </td>
          <td>
            <button type="button" class="btn btn-danger">
              Eliminar
            </button>
          </td>
          <td>
            <button type="button" class="btn btn-success">Ver</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Administracion",
  computed: {
    traerArtista() {
      return this.$store.getters.envioArtistas;
    },
  },
};
</script>

<style>
.admin {
  margin: 4%;
  background: rgba(00, 00, 0, 0.8);
  color: white;
}
.admin__table {
  color: white;
}
</style>
