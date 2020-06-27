import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    marca: 'Actual Music',
    listaArtistas: [],
  },
  getters: {
    getMarca(state) {
      return state.marca;
    },
    envioArtistas(state) {
      return state.listaArtistas;
    }
  },
  mutations: {
    mutandoInfoArtista(state, infoArtistaRecibido) {
      state.listaArtistas = infoArtistaRecibido;
    }
  },
  actions: {
    recibidoInfoArtista(context, infoArtista) {
      context.commit('mutandoInfoArtista', infoArtista);
    },
  }
})