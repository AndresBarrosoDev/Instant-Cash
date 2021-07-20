<template>
    <div class="card-container">
        <b-card title="" sub-title="" class="card d-flex justify-content-center align-items-center">
            <b-card-text class="title-size">
                {{title}}
            </b-card-text>
            <b-card-text class="text-size">
                {{content}}
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            subTitle: String,
            content: String
        }
    }
</script>

<style lang="scss" scoped>
    .title-size {
        font-size: 1.5rem;
    }
    .text-size {
        font-size: 2rem;
    }
    .card {
        height: 100%;
        display: flex;
        align-content : center;
        justify-content: center;
    }
    .card-container {
        
    }
</style>