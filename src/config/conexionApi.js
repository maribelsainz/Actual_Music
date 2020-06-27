import axios from 'axios';
import store from '../store/store';

export function conexionApi() {
  axios.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=4b6f92d31a8f858d5fa6fcb2a85bde97&format=json').then(response => {
    console.log(response.data.artists.artist);
    store.dispatch('recibidoInfoArtista', response.data.artists.artist);
  }).catch(error => {
    console.error(error);
  })
}