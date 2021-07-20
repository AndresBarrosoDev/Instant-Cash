<template>
    <div class="formulary-container">
        <b-container>
            <b-row>
                <b-col>
                    <Formulary/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import Formulary from "@/components/Formulary.vue"
export default {
    components: {
        Formulary
    }
}
</script>

<style lang="scss" scoped>
.formulary-container {
    height: 100%;
    min-height: 100vh;
    padding: 0;
    background: #606c88;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #3f4c6b, #606c88);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #3f4c6b, #606c88); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>