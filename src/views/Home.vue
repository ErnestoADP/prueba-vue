<template>

  <div class="card">
    <b-container class="bv-example-row">
  <h2 style="margin: 20px 0">Lista de Cursos</h2>
  <b-row>
    <b-col v-for="(curso, i) in cursos" :key="i" class="card-cuerpo">
      <b-card no-body :img-src="curso.data.urlImg"  img-top class="img" >
          <template #header>
            <h6 class="mb-0">{{ curso.data.nombreCurso }}</h6>
          </template>
          <b-list-group flush>
            <b-list-group-item> <b>Cupos: </b>{{ curso.data.cuposDelCurso }}<br></b-list-group-item>
            <b-list-group-item><b>Duración:</b><br>{{ curso.data.duracionDelCurso }}</b-list-group-item>
            <b-list-group-item><b>Inscritos:</b><br>{{ curso.data.inscritosEnElCurso }}</b-list-group-item>
            <b-list-group-item><b>Descripción:</b><br>{{ curso.data.descripcion }}</b-list-group-item>
          </b-list-group>
        </b-card>
    </b-col>
  </b-row>
</b-container>
  



<div id="app">
  <v-app id="inspire">
    <v-container>
      <v-row justify="space-around">
        <v-card width="400">
          <v-img
            height="200px"
            src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
          >
            <v-app-bar
              flat
              color="rgba(0, 0, 0, 0)"
            >
              <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>
  
              <v-toolbar-title class="text-h6 white--text pl-0">
                Messages
              </v-toolbar-title>
  
              <v-spacer></v-spacer>
  
              <v-btn
                color="white"
                icon
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-app-bar>
  
            <v-card-title class="white--text mt-8">
              <v-avatar size="56">
                <img
                  alt="user"
                  src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                >
              </v-avatar>
              <p class="ml-3">
                John Doe
              </p>
            </v-card-title>
          </v-img>
  
          <v-card-text>
            <div class="font-weight-bold ml-8 mb-2">
              Today
            </div>
  
            <v-timeline
              align-top
              dense
            >
              <v-timeline-item
                v-for="message in messages"
                :key="message.time"
                :color="message.color"
                small
              >
                <div>
                  <div class="font-weight-normal">
                    <strong>{{ message.from }}</strong> @{{ message.time }}
                  </div>
                  <div>{{ message.message }}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </v-app>
</div>


</div>
</template>

<script>
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
 
  
} from "firebase/firestore";
export default {
  name: "About",

  data() {
    return {
      curso: {
        nombreCurso: "",
        urlImg: "",
        cuposDelCurso: "",
        inscritosEnElCurso: "",
        duracionDelCurso: "",
        codigoDelCurso: "",
        descripcion: "",
      },
    

      cursos: [],
      modalShow: false,
    };
  },
  methods: {
  
    async getCurso() {
      const db = getFirestore();
      const coleccion = collection(db, "cursos");
      const q = query(coleccion);

      onSnapshot(q, (querySnapshot) => {
        const cursos = [];
        querySnapshot.forEach((doc) => {
          const curso = { id: doc.id, data: doc.data() };
          cursos.push(curso);
        });
        this.cursos = cursos;
      });
    },
    
  },
  mounted() {
    this.getCurso();
  },
 
};
</script>

<style >

.img{
transition: transform .2s;
border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
 

  
}
img{
  width: 100%;
  height:200px;
}

.img:hover{ 
  transform: scale(1.1);
  
}
</style>

