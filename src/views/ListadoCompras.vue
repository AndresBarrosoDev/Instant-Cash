<template>
    <div class="list-container">
        <b-container>
            <b-row>
                <b-col>
                    <Table/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import Table from '@/components/Table.vue'
export default {
    components: {
        Table
    }
}
</script>

<style lang="scss" scoped>
.list-container {
    height: 100%;
    min-height: 100vh;
    padding: 0;
    background: #606c88;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #3f4c6b, #606c88);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #3f4c6b, #606c88); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>