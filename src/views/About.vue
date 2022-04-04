<template>
  <div class="cuerpo">
    <div>
      <div class="nose">
        <h2 style="margin: 20px 0">Administración</h2>
        <!--------------------------------------------------------BOTON PARA AGREGAR LOS DATOS DEL CURSO------------------------------------------------------------------------------->

        <b-button
          class="m-2"
          variant="outline-primary"
          @click="$bvModal.show('bv-modal-example')"
          >Agregar Curso</b-button
        >
        <!--------------------------------------------------------MODAL PARA AGREGAR LOS DATOS DEL CURSO------------------------------------------------------------------------------->

        <b-modal id="bv-modal-example" hide-footer>
          <template #modal-title> Agregando Curso </template>
          <div>
            <b-form-input
              class="m-1"
              v-model="curso.nombreCurso"
              placeholder="Nombre del Curso"
            ></b-form-input>
            <b-form-input
              class="m-1"
              v-model="curso.urlImg"
              placeholder="Url de la imagen del Curso"
            ></b-form-input>
            <b-form-input
              class="m-1"
              v-model="curso.cuposDelCurso"
              placeholder="Cupos del Curso"
            ></b-form-input>
            <b-form-input
              class="m-1"
              v-model="curso.inscritosEnElCurso"
              placeholder="Inscritos en el Curso"
            ></b-form-input>
            <b-form-input
              class="m-1"
              v-model="curso.duracionDelCurso"
              placeholder="Duración del Curso"
            ></b-form-input>
            <b-form-input
              class="m-1"
              v-model="curso.codigoDelCurso"
              placeholder="Codigo del Curso"
            ></b-form-input>
            <b-form-textarea
              class="m-1"
              v-model="curso.descripcion"
              id="textarea-rows"
              placeholder="Descripción del curso"
              rows="8"
            >
            </b-form-textarea>
            <div class="m-2">
              <b-button @click="addCurso" class="m-1" variant="success"
                >Registrar</b-button
              >
              <b-button class="m-1" variant="danger"
                >Limpiar Formulario</b-button
              >
              <b-button class="m-1" variant="warning"
                >Limpiar Validación</b-button
              >
            </div>
          </div>
        </b-modal>
      </div>
    </div>
    <!--------------------------------------------------------TABLA CON LOS DATOS------------------------------------------------------------------------------->
    <section>
      <table class="tabla">
        <thead>
          <tr>
            <th>Cursos</th>
            <th>Cupos</th>
            <th>Inscritos</th>
            <th>Duración</th>

            <th clas="texto">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(curso, i) in cursos" :key="i">
            <td>{{ curso.data.nombreCurso }}</td>
            <td>{{ curso.data.cuposDelCurso }}</td>
            <td>{{ curso.data.inscritosEnElCurso }}</td>
            <td>{{ curso.data.duracionDelCurso }}</td>

            <td>
              <!--------------------------------------------------------BOTON PARA EDITAR------------------------------------------------------------------------------>
              <b-button
                class="buttons-table"
                squared
                variant="outline-warning"
                @click="onEditarCurso(curso.id)"
                ><b-icon icon="pencil" scale="1" variant="dark"></b-icon
              ></b-button>
              <!--------------------------------------------------------BOTON PARA ELIMINAR------------------------------------------------------------------------------->
              <b-button
                class="buttons-table"
                squared
                variant="outline-danger"
                @click="borrar(curso.id)"
                ><b-icon icon="trash" scale="1" variant="dark"></b-icon
              ></b-button>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <!--------------------------------------------------------MODAL PARA EDITAR------------------------------------------------------------------------------->
      <b-modal v-model="modalShow">
        <h1>Editar</h1>

        <div class="m-3">
          <label>Url imagen del curso</label>
          <input
            v-model="cursoSeleccionado.data.nombreCurso"
            placeholder="CSS"
          />
        </div>
        <div class="m-3">
          <label>Url de imagen del curso</label>
          <input
            v-model="cursoSeleccionado.data.urlImg"
            placeholder="https://bootstrap-vue.org"
          />
        </div>
        <div class="m-3">
          <label>Cupos del curso</label>
          <input
            v-model="cursoSeleccionado.data.cuposDelCurso"
            placeholder="0"
          />
        </div>
        <div class="m-3">
          <label>Inscritos en el curso</label>
          <input
            v-model="cursoSeleccionado.data.inscritosEnElCurso"
            placeholder="0"
          />
        </div>
        <div class="m-3">
          <label>Duración del curso</label>
          <input
            v-model="cursoSeleccionado.data.duracionDelCurso"
            placeholder="1"
          />
        </div>
        <div class="m-3">
          <label>Descripción del curso</label>
          <b-form-textarea
            v-model="cursoSeleccionado.data.descripcion"
            id="textarea-rows"
            placeholder="Curso con las nuevas actualizaciones de JavaScript Avanzado"
            rows="8"
          >
          </b-form-textarea>
        </div>
      </b-modal>

      <!--------------------------------------------------------CONTEO DE LOS CURSOS Y ALUMNOS------------------------------------------------------------------------------->
      <div>
        <p class="uno m-2" type="text" readonly="readonly">
          Cantidad Total de alumnos permitidos: {{ totalDeCupos }}
        </p>

        <p class="dos m-2" type="text" readonly="readonly">
          Cantidad total de alumnos inscritos: {{ totalDeInscritos }}
        </p>
        <p class="tres m-2" type="text" readonly="readonly">
          Cantidad de cupos restantes: {{ totalDeCuposDisponibles }}
        </p>
        <p class="cuatro m-2" type="text" readonly="readonly">
          Cantidad de cursos terminados: {{ totalDeCursosterminados }}
        </p>
        <p class="cinco m-2" type="text" readonly="readonly">
          Cantidad de cursos activos: {{ totalDeCursosActivos }}
        </p>
        <p class="seis m-2" type="text" readonly="readonly">
          Cantidad de cursos:{{ totalDeCursos }}
        </p>
      </div>
    </section>
  </div>
</template>
<script>
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  doc,
  deleteDoc,
  setDoc,
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
      cursoSeleccionado: {
        id: "",
        data: {
          nombreCurso: "",
          urlImg: "",
          cuposDelCurso: "",
          inscritosEnElCurso: "",
          duracionDelCurso: "",
          codigoDelCurso: "",
          descripcion: "",
        },
      },

      cursos: [],
      modalShow: false,
    };
  },
  methods: {
    ///AGREGAR CURSO
    async addCurso() {
      alert("Regristro con exito!");
      const db = getFirestore();

      const coleccion = collection(db, "cursos");

      const documento = this.curso;
      await addDoc(coleccion, documento);
    },
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
    ///BORRAR
    async borrar(id) {
      const db = getFirestore();
      const coleccion = "cursos";
      await deleteDoc(doc(db, coleccion, id));
      alert("Curso Eliminado!");
    },

    ///EDITAR
    onEditarCurso(id) {
      const { cursos } = this;
      const resultado = { ...cursos.find((u) => u.id === id) };
      this.modalShow = true;
      this.cursoSeleccionado = resultado;
    },
    async actualizarCurso() {
      const db = getFirestore();
      const { id, data } = this.cursoSeleccionado;
      await setDoc(doc(db, "cursos", id), data);
      this.modalShow = false;
    },
  },
  mounted() {
    this.getCurso();
  },

  computed: {
    totalDeCupos(state) {
      const { cursos } = state;
      return cursos.reduce((a, b) => {
        return a + parseInt(b.data.cuposDelCurso);
      }, 0);
    },
    totalDeInscritos(state) {
      const { cursos } = state;
      return cursos.reduce((a, b) => {
        return a + parseInt(b.data.inscritosEnElCurso);
      }, 0);
    },
    totalDeCuposDisponibles(state) {
      const { cursos } = state;
      return cursos.reduce((a, b) => {
        const cuposDisponibles = parseInt(
          b.data.cuposDelCurso - b.data.inscritosEnElCurso
        );
        return a + cuposDisponibles;
      }, 0);
    },
    totalDeCursosterminados(state) {
      const { cursos } = state;
      return cursos.reduce((a, b) => {
        if (b.data.cursoTerminado) return a + 1;
        else return a;
      }, 0);
    },
    totalDeCursosActivos(state) {
      const { cursos } = state;
      return cursos.reduce((a, b) => {
        if (!b.data.cursoTerminado) return a + 1;
        else return a;
      }, 0);
    },
    totalDeCursos(state) {
      const { cursos } = state;
      return cursos.length;
    },
  },
};
</script>




<style about>
input {
  border-radius: 0.3rem;
  padding: 0.2rem;
  border: 0.1rem solid;
  margin: 0.4rem;
  width: 100%;
  box-shadow: 1px 2px 1px #aaaaaa;
}
p {
  border-radius: 0.3rem;
  padding: 0.2rem;
  border: 0.1rem solid;
  margin: 0.4rem;
  width: 100%;
  box-shadow: 1px 2px 1px #aaaaaa;
  text-align: left;
}
.uno {
  border: 2px solid rgb(140, 92, 236);
}
.dos {
  border: 2px solid rgb(11, 255, 255);
}
.tres {
  border: 2px solid orangered;
}
.cuatro {
  border: 2px solid crimson;
}
.cinco {
  border: 2px solid saddlebrown;
}
.seis {
  border: 2px solid orange;
}
.nose {
  display: flex;
  justify-content: center;
  align-items: center;
}
.cuerpo {
  width: 70%;
  margin: auto;
}
.tabla {
  width: 100%;
}
.texto {
  text-align: center;
}
.buttons-table {
  margin: 0.1rem;
}
table {
  border: 2px solid rgb(0, 0, 0);
  box-shadow: 0px 5px 10px #aaaaaa;
  margin: 0.4rem;
}
th,
td {
  padding: 4px 1px 3px 1px;
  border-bottom: 1px solid;
  box-shadow: 0px 1px 0px #000000;
}
</style>