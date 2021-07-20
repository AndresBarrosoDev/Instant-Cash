<template>
    <div>
        <b-card class="formulary-box my-4" title="Simulador de Conversion de Divisas" sub-title="Con nuestro simulador puedes previsualizar la conversion de divisas antes de comprar.">
            <div
            role="group"
            sm="12"
            md="12"
            lg="12"
            xl="12"
            >
                <!-- Primer input: Cantidad de pesos  -->
                <b-form-group
                label="Cantidad de pesos chilenos:"
                label-for="input-money-amount"
                description=""
                class="mb-4"
                >
                    <b-form-input
                        id="input-money-amount"
                        v-model="simulation.money"
                        placeholder="Ingresa cuanto quieres cambiar"
                        type="number"
                    ></b-form-input>
                </b-form-group>
                <!-- Segundo input: Tipo de Moneda  -->
                <b-form-group
                label="Tipo de moneda"
                label-for="input-money-type"
                description=""
                class="mb-4"
                >
                    <b-form-select
                    v-model="simulation.resultType.selected"
                    :options="simulation.resultType.options"
                    id="input-money-type"
                    class="form-control select"
                    ></b-form-select>
                </b-form-group>
                <!-- Botones -->
                <b-button v-on:click="convertCurrencyAction()" variant="secondary" class="calcular-btn">Calcular</b-button>
                <b-button v-on:click="saveSimulationAction();onResetAction();" variant="dark" class="comprar-btn">Comprar Divisas</b-button>
            </div>
            <!-- En este contenedor se mostraran los resultas de las conversiones monetarias -->
            <div class="d-flex">
                <b-card
                class="money-box mt-3 text-center"
                title=""
                sub-title="Cantidad a convertir:"
                >
                    <b-card-text
                    class="text-center result-size"
                    >
                        {{simulation.money}} CLP
                    </b-card-text>
                </b-card>
                <b-card
                class="result-box mt-3 text-center"
                title=""
                sub-title="Resultado:"
                >
                    <b-card-text
                    class="text-center result-size"
                    >
                        {{simulation.result}} {{simulation.resultType.selected}}
                    </b-card-text>
                </b-card>
            </div>
        </b-card>
        <b-card class="formulary-box my-4" title="" sub-title="Ingresa tus datos antes de presionar 'Comprar Divisas', para recordarte en nuestro Listado de Compras">
            <div class="mt-4 mb-0">
                <!-- Primer input: Email  -->
                <b-form-group
                label="Email:"
                label-for="input-email"
                description=""
                class="mt-4 mb-4"
                >
                    <b-form-input
                        id="input-email"
                        v-model="simulation.email"
                        placeholder="Ingresa tu email"
                    ></b-form-input>
                </b-form-group>
                <!-- Segundo input: Nombre  -->
                <b-form-group
                label="Nombre:"
                label-for="input-name"
                description="Los apellidos se ingresan por separado."
                class="mt-4 mb-1"
                >
                    <b-form-input
                        id="input-name"
                        v-model="simulation.name"
                        placeholder="Ingresa tu nombre"
                    ></b-form-input>
                </b-form-group>
                <!-- Tercero input: Apellido Paterno  -->
                <b-form-group
                label="Apellido Paterno:"
                label-for="input-lastname"
                description=""
                class="mb-4"
                >
                    <b-form-input
                        id="input-lastname"
                        v-model="simulation.lastname"
                        placeholder="Ingresa tu apellido paterno"
                    ></b-form-input>
                </b-form-group>
                <!-- Cuarto input: Apellido Materno  -->
                <b-form-group
                label="Apellido Materno:"
                label-for="input-second-lastname"
                description=""
                class="mb-4"
                >
                    <b-form-input
                        id="input-second-lastname"
                        v-model="simulation.secondLastname"
                        placeholder="Ingresa tu apellido materno"
                    ></b-form-input>
                </b-form-group>
                <!-- Quinto input: Region  -->
                <b-form-group
                label="Region"
                label-for="input-money-type"
                description=""
                class="mb-4"
                >
                    <b-form-select
                    v-model="simulation.region.selected"
                    :options="simulation.region.options"
                    id="input-money-type"
                    class="form-control select"
                    ></b-form-select>
                </b-form-group>
                <!-- Sexto input: Telefono  -->
                <b-form-group
                label="Telefono:"
                label-for="input-phone"
                description=""
                class="mb-4"
                >
                    <b-form-input
                        id="input-phone"
                        v-model="simulation.phone"
                        placeholder="Ingresa tu telefono"
                    ></b-form-input>
                </b-form-group>
            </div>
        </b-card>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
    export default {
        computed: {
            ...mapState(["simulation"]),
        },
        methods: {
            ...mapActions(["getCurrencyValuesAction", "convertCurrencyAction", "saveSimulationAction", "onResetAction"])
        },  
        mounted() {
            this.getCurrencyValuesAction();
        }
    }
</script>

<style lang="scss" scoped>
.formulary-box {
    text-align: left;
}
.title-size {
    font-size: 1.5rem;
}
.select {
    color: #5c6f82;
}
.calcular-btn {
    width: 49%;
    margin-right: 1%;
}
.comprar-btn {
    width: 49%;
    margin-left: 1%;
}
.money-box {
    width: 49%;
    margin-right: 1%;
    -webkit-box-shadow: -2px -1px 15px 7px rgba(0,0,0,0.5);
    -moz-box-shadow: -3px -2px 30px 14px rgba(0,0,0,0.425);
    box-shadow: -4px -3px 45px 3px rgba(0,0,0,0.35);
}
.result-box {
    width: 49%;
    margin-left: 1%;
    -webkit-box-shadow: -2px -1px 15px 7px rgba(0,0,0,0.5);
    -moz-box-shadow: -3px -2px 30px 14px rgba(0,0,0,0.425);
    box-shadow: -4px -3px 45px 3px rgba(0,0,0,0.35);
}
.result-size {
    font-size: 2rem;
}

</style>