<template>
<div>
<b-container class="bv-example-row">
  <h2 style="margin: 20px 0">Lista de Cursos</h2>
  <b-row>
    <b-col>
      <b-card
          no-body
          img-src="https://i.blogs.es/545cf8/es6-logo/450_1000.png"
          img-alt="Image"
          img-top
        >
          <template #header>
            <h6 class="mb-0">JavaScript Avanzado</h6>
          </template>

          <b-card-body>
            <b-card-title>Información</b-card-title>
          </b-card-body>

          <b-list-group flush>
            <b-list-group-item>Costo: <b>300000</b><br>Duración: 2 mes</b-list-group-item>
            <b-list-group-item>Cupos: <b>20</b><br>Completado: No</b-list-group-item>
            <b-list-group-item>Fecha de Registro:<br>06-03-2021</b-list-group-item>
            <b-list-group-item>Descripción:<br>Curso con las nuevas actualizaciones de JavaScript.</b-list-group-item>
          </b-list-group>

        </b-card>
    </b-col>
    <b-col>
      <b-card
          no-body
          img-src="https://soydigital.com/wp-content/uploads/2020/05/CSS3.jpg"
          img-alt="Image"
          img-top
        >
          <template #header>
            <h6 class="mb-0">Css para Principiantes</h6>
          </template>

          <b-card-body>
            <b-card-title>Información</b-card-title>
          </b-card-body>

          <b-list-group flush>
            <b-list-group-item>Costo: <b>10000</b><br>Duración: 1 mes</b-list-group-item>
            <b-list-group-item>Cupos: <b>35</b><br>Completado: No</b-list-group-item>
            <b-list-group-item>Fecha de Registro:<br>05-03-2021</b-list-group-item>
            <b-list-group-item>Descripción:<br>Aprendiendo estilos con CSS desde el nivel más básico.</b-list-group-item>
          </b-list-group>
        </b-card>
    </b-col>
    <b-col>
      <b-card
          no-body
          img-src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
          img-alt="Image"
          img-top
        >
          <template #header>
            <h6 class="mb-0">JavaScript Básico de 0 a 100</h6>
          </template>

          <b-card-body>
            <b-card-title>Información</b-card-title>
          </b-card-body>

          <b-list-group flush>
            <b-list-group-item>Costo: <b>20000</b><br>Duración: 1 mes</b-list-group-item>
            <b-list-group-item>Cupos: <b>25</b><br>Completado: Si</b-list-group-item>
            <b-list-group-item>Fecha de Registro:<br>05-03-2021</b-list-group-item>
            <b-list-group-item>Descripción:<br>Programando para la web con Javascript.</b-list-group-item>
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
export default {
 name: "",
}
</script>

<style >

</style>

