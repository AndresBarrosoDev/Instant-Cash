<template>
    <div>
        <b-card class="list-box my-4">
            <div class="list-title">
                <b-card-title>Lista de Compras de Divisas</b-card-title>
                <b-card-text>En este apartado encontrarás una lista con todos los cambios de divisa que hemos gestionado.</b-card-text>
            </div>
            <b-table small :fields="fields" :items="simulationsCollection" responsive="sm">

                <template #cell(index)="data">
                    {{ data.index + 1 }}
                </template>
                <!-- Columna de Nombre -->
                <template #cell(name)="data">
                    <span>{{ simulationsCollection[data.index].name }} </span> 
                    <span>{{ simulationsCollection[data.index].lastname }} </span> 
                    <span>{{ simulationsCollection[data.index].secondLastname }}</span>
                </template>
                Columna de 
                <template #cell(money)="data">
                    <span>{{ simulationsCollection[data.index].money }}</span>
                    <div> CLP</div>
                </template>

                <template #cell(result)="data">
                    <span>{{ simulationsCollection[data.index].result }} </span>
                    <div>{{ simulationsCollection[data.index].resultType.selected }} </div>
                </template>
            </b-table>
        </b-card>
    </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        data() {
            return {
                fields: [
                    { key: 'index', label: '*' },
                    { key: 'name', label: 'Nombre' },
                    { key: 'email', label: 'Email' },
                    { key: 'region.selected', label: 'Región' },
                    { key: 'phone', label: 'Telefono' },
                    { key: 'money', label: 'Cantidad' },
                    { key: 'result', label: 'Resultado' },
                ]
            }
        },
        computed: {
            ...mapState(["simulationsCollection"])
        }
    }
</script>

<style lang="scss" scoped>
    .list-title {
        text-align: left;
    }
</style>