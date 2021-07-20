<template>
  <div class="home-container">
    <b-container>
      <b-row>
        <b-col>
          <TitleCard title="Bienvenido a Instant Cash" content="En Instant Cash podras visualizar en tiempo real el valor del Dolar, Euro y Bitcoin. Información obtenida a través de la siguiente API: https://mindicador.cl/api"/>
        </b-col>
      </b-row>
      <b-row class="d-flex justify-content-around pt-4">
        <b-col 
        sm="12" 
        md="12"
        lg="6"
        xl="4"
        class="mb-3">
          <CurrencyCard :title="'Valor ' + dolarObject.nombre + ':'" subTitle="" :currencyValue="dolarObject.valor"/>
        </b-col>
        <b-col 
        sm="12" 
        md="12"
        lg="6"
        xl="4"
        class="mb-3">
          <CurrencyCard :title="'Valor ' + euroObject.nombre + ':'" subTitle="" :currencyValue="euroObject.valor"/>
        </b-col>
        <b-col 
        sm="12" 
        md="12"
        lg="6"
        xl="4"
        class="mb-3">
          <CurrencyCard :title="'Valor ' + bitcoinObject.nombre + ':'" subTitle="" :currencyValue="bitcoinObject.valor"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CurrencyCard from "@/components/CurrencyCard.vue";
import TitleCard from "@/components/TitleCard.vue";
import { mapActions, mapState } from 'vuex';
export default {
  name: 'Home',
  components: {
    CurrencyCard,
    TitleCard
  },
  computed: {
    ...mapState(["dolarObject", "euroObject", "bitcoinObject"])
  },
  methods: {
    ...mapActions(["getCurrencyValuesAction"])
  },
  mounted() {
    this.getCurrencyValuesAction();
  }
}
</script>

<style lang="scss" scoped>
  .home-container {
    height: 100%;
    min-height: 100vh;
    padding: 0;
    background: #606c88;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #3f4c6b, #606c88);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #3f4c6b, #606c88); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
</style>
