<template>
    <div class="title-container">
        <b-card class="title-card">
            <b-card-title>{{title}}</b-card-title>
            <b-card-text>{{content}}</b-card-text>
            <img class="title-image" src="~@/assets/coinbanner.jpg" alt="">
        </b-card>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        content: String
    }
}
</script>

<style lang="scss" scoped>
    .title-card {
        text-align: left;
        margin: 1rem 0;
    }
    .title-container {
        border-bottom: 3px solid #212529;
    }
    .title-image {
        width: 100%;
        height: auto;
        max-height: 300px;
        object-fit: cover;
    }
</style>