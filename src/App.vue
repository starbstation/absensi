<style>

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h1,
h2 {
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

<template>

<div id="app">
    <div class="container">
        <div class="row">
            <div class="col s12 m12 l6">
                <div class="card  light-blue">
                    <div class="card-content white-text" style="text-align:left;">
                        <span class="card-title">Selamat Datang</span>
                        <p>Selamat datang di absensi siaran Starting Broadcast. Untuk mengisinya sangatlah mudah.
                            <ol>
                                <li>Kolom Penyiar 1 dan Penyiar 2 diisi dengan nama siaran.</li>
                                <li>Untuk konten diisi dengan konten siaran, tema untuk tema konten siaran.</li>
                                <li>Untuk jam masuk dan jam keluar, diisi dengan jam pada saat Opening.</li>
                            </ol>
                            <p>Mudah kan? Atau memang sudah tahu? Syukurlah kalo sudah tahu. Cuman ngingetin aja da. Biasa aja weh, gak usah ngegas. Bila ada masalah teknis, segera hubungi kepenyiaran. Masalah teknis ya bukan masalah hati!</p>
                            <p>Nuhun!</p>
                            <br />
                            <div class="row">
                                <marquee>
                                    <p>IT Division Starting Broadcast #9</p>
                                </marquee>
                            </div>
                    </div>
                </div>
            </div>
            <div class="col s12 m12 l6">
                <div class="card-panel">
                    <h4 class="header2">Absensi Kepenyiaran</h4>
                    <div class="row">
                        <form class="col s12">
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
                                <button class="btn waves-effect waves-light" type="submit" name="action" @click="submitName(); addRow();">Submit
                                    <i class="material-icons right">send</i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col s12 m12 l12">
                <h4 class="header2">Absensi Kepenyiaran</h4>
                <div v-for="personName of names" v-bind:key="personName['.key']">
                    <div class="col s4 m3 l4" v-if="!personName.edit">
                        <div class="card horizontal">
                            <div class="card-content" style="text-align:left;">
                                <p>Nama Penyiar : {{ personName.penyiarSatu }} & {{ personName.penyiarDua }}</p>
                                <p>Konten : {{ personName.konten }}</p>
                                <p>Tema : {{ personName.tema }}</p>
                                <p>Jam Masuk : {{ personName.jamMasuk }}</p>
                                <p>Jam Keluar : {{ personName.jamKeluar }}</p>
                            </div>
                            <div class="card-action">
                                <a href="#" @click="setEditName(personName['.key'])">Edit</a>
                                <a href="#" @click="removeName(personName['.key'])">Delete</a>
                            </div>
                        </div>
                    </div>
                    <form class="col s12" v-else>
                        <div class="row">
                            <div class="row">
                                <div class="input-field col s6">
                                    <input id="penyiar_satu" type="text" class="validate" v-model="personName.penyiarSatu">
                                </div>
                                <div class="input-field col s6">
                                    <input id="penyiar_dua" type="text" class="validate" v-model="personName.penyiarDua">
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s6">
                                    <input id="konten" type="text" class="validate" v-model="personName.konten">
                                </div>
                                <div class="input-field col s6">
                                    <input id="tema" type="text" class="validate" v-model="personName.tema">
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s6">
                                    <input id="jam_masuk" type="text" class="validate" v-model="personName.jamMasuk">
                                </div>
                                <div class="input-field col s6">
                                    <input id="jam_keluar" type="text" class="validate" v-model="personName.jamKeluar">
                                </div>
                            </div>
                            <div class="row">
                                <button class="btn waves-effect waves-light" type="submit" name="action" @click="saveEdit(personName)">Save
                                    <i class="material-icons right">send</i>
                                </button>
                                <button class="btn waves-effect waves-light" type="submit" name="action" @click="cancelEdit(personName['.key'])">Cancel
                                    <i class="material-icons right">cancel</i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>

import {
    namesRef
}
from './firebase';

export default {
    data() {
            return {
                name: '',
                rows: []
            }
        },
        firebase: {
            names: namesRef
        },
        methods: {
            submitName() {
                    namesRef.push({
                        penyiarSatu: this.penyiarSatu,
                        penyiarDua: this.penyiarDua,
                        konten: this.konten,
                        tema: this.tema,
                        jamMasuk: this.jamMasuk,
                        jamKeluar: this.jamKeluar,
                        edit: false
                    });
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
                    namesRef.child(key).update({
                        edit: true
                    });
                },
                cancelEdit(key) {
                    namesRef.child(key).update({
                        edit: false
                    })
                },
                saveEdit(name) {
                    const key = name['.key'];
                    namesRef.child(key).set({
                        penyiarSatu: name.penyiarSatu,
                        penyiarDua: name.penyiarDua,
                        konten: name.konten,
                        tema: name.tema,
                        jamMasuk: name.jamMasuk,
                        jamKeluar: name.jamKeluar,
                        edit: false
                    })
                },
                addRow() {
                    this.rows.push({});
                },
                removeRow(row) {
                    this.rows.$remove(row);
                }
        }
}

</script>
