<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="card">
          <div class="container">
            <div class="row">
              <div class="input-field col s6">
                <input id="penyiar_satu" type="text" class="validate" v-model="penyiarSatu">
                <label for="penyiar_satu">Penyiar 1</label>
              </div>
              <div class="input-field col s6">
                <input id="penyiar_dua" type="text" class="validate" v-model="penyiarDua">
                <label for="penyiar_dua">Penyiar 2</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <input id="konten" type="text" class="validate" v-model="konten">
                <label for="konten">Konten</label>
              </div>
              <div class="input-field col s6">
                <input id="tema" type="text" class="validate" v-model="tema">
                <label for="tema">Tema</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <input id="jam_masuk" type="text" class="validate" v-model="jamMasuk">
                <label for="jam_masuk">Jam Masuk</label>
              </div>
              <div class="input-field col s6">
                <input id="jam_keluar" type="text" class="validate" v-model="jamKeluar">
                <label for="jam_keluar">Jam Keluar</label>
              </div>
            </div>
            <div class="row">
              <button class="btn waves-effect waves-light" type="submit" name="action" @click="submitName()">Submit
                <i class="material-icons right">send</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <li v-for="personName of names" v-bind:key="personName['.key']">
        <div v-if="!personName.edit">
          <p>{{ personName.penyiarSatu }}</p><br />
          <p>{{ personName.penyiarDua }}</p><br />
          <p>{{ personName.konten }}</p><br />
          <p>{{ personName.tema }}</p><br />
          <p>{{ personName.jamMasuk }}</p><br />
          <p>{{ personName.jamKeluar }}</p><br />
          <button @click="removeName(personName['.key'])">Delete</button>
          <button @click="setEditName(personName['.key'])">Edit</button>
        </div>
        <div v-else>
          <input type="text" v-model="personName.penyiarSatu" />
          <input type="text" v-model="personName.penyiarDua" />
          <input type="text" v-model="personName.konten" />
          <input type="text" v-model="personName.tema" />
          <input type="text" v-model="personName.jamMasuk" />
          <input type="text" v-model="personName.jamKeluar" />
          <button @click="saveEdit(personName)">Save</button>
          <button @click="cancelEdit(personName['.key'])">Cancel</button>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
import { namesRef } from './firebase';

export default {
  data () {
    return {
      name: ''
    }
  },
  firebase: {
    names: namesRef
  },
  methods: {
    submitName() {
      namesRef.push({ penyiarSatu: this.penyiarSatu,
        penyiarDua: this.penyiarDua,
        konten: this.konten,
        tema: this.tema,
        jamMasuk: this.jamMasuk,
        jamKeluar: this.jamKeluar,
        edit: false });
      this.penyiarSatu = '';
      this.penyiarDua = '';
      this.konten = '';
      this.tema = '';
      this.jamMasuk = '';
      this.jamKeluar = '';
    },
    removeName(key) {
      namesRef.child(key).remove();
    },
    setEditName(key) {
      namesRef.child(key).update({ edit: true });
    },
    cancelEdit(key) {
      namesRef.child(key).update({ edit: false })
    },
    saveEdit(name) {
      const key = name['.key'];
      namesRef.child(key).set({ penyiarSatu: name.penyiarSatu,
        penyiarDua: name.penyiarDua,
        konten: name.konten,
        tema: name.tema,
        jamMasuk: name.jamMasuk,
        jamKeluar: name.jamKeluar,
        edit: false })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}

button {
  background-color: transparent;
  border: 2px solid black;
}

.mb {
  margin-botton: 16px;
}

.mt {
  margin-top: 16px;
}
</style>
