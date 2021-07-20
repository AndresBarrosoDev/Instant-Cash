<template>
    <div class="dashboard-container">
        <b-container>
            <b-row class="blue-line">
                <b-col>
                    <TitleCard title="Dash Board" content="Aqui puedes revisar algunas estadisticas calculadas con funciones de JavaScript"/>
                </b-col>
            </b-row>
            <b-row>
                <b-col class="d-flex justify-content-around"
                sm="12"
                md="6"
                lg="12"
                xl="12"
                >
                    <DashCard class="dashcard" title="Total en Ventas" subTitle="" :content="totalSales + ' CLP'"/>
                </b-col>
                <b-col class="d-flex justify-content-around"
                sm="12"
                md="6"
                lg="4"
                xl="4"
                >
                    <DashCard class="dashcard" title="Compra de Dolares" subTitle="" :content="dolarSales"/>
                </b-col>
                <b-col class="d-flex justify-content-around"
                sm="12"
                md="6"
                lg="4"
                xl="4"
                >
                    <DashCard class="dashcard" title="Compra de Euros" subTitle="" :content="euroSales"/>
                </b-col>
                <b-col class="d-flex justify-content-around"
                sm="12"
                md="6"
                lg="4"
                xl="4"
                >
                    <DashCard class="dashcard" title="Compra de Bitcoins" subTitle="" :content="bitcoinSales"/>
                </b-col>
                <b-col class="d-flex justify-content-around"
                sm="12"
                md="6"
                lg="6"
                xl="6"
                >
                    <DashCard class="dashcard" title="Mayor Compra" subTitle="" :content="biggestPurchase + ' CLP'"/>
                </b-col>
                <b-col class="d-flex justify-content-around"
                sm="12"
                md="6"
                lg="6"
                xl="6"
                >
                    <DashCard class="dashcard" title="Menor Compra" subTitle="" :content="lowestPurchase + ' CLP'"/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import DashCard from "@/components/DashCard.vue";
import TitleCard from "@/components/TitleCard.vue";
import { mapActions, mapState } from 'vuex';

export default {
    components: {
        DashCard,
        TitleCard
    },
    computed: {
        ...mapState(["totalSales", "dolarSales", "euroSales", "bitcoinSales", "biggestPurchase", "lowestPurchase"])
    },
    methods: {
        ...mapActions(["calculateDashBoardAction"])
    },
    mounted() {
        this.calculateDashBoardAction();
    }
}  
</script>

<style lang="scss" scoped>
    .dashboard-container {
        height: 100%;
        min-height: 100vh;
        padding: 0;
        padding-bottom: 1rem;
        background: #606c88;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #3f4c6b, #606c88);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #3f4c6b, #606c88); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    .dashcard {
        margin-top: 1rem;
        width: 100%;
    }
</style>