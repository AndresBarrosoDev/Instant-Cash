<template>
    <b-card :title="title" :sub-title="subTitle">
        <b-card-text
        class="value-size"
        >
        {{currencyValue}}
        </b-card-text>
    </b-card>
</template>

<script>
export default {
    props: {
        title: String,
        subTitle: String,
        currencyValue: Number
    }
}
</script>

<style lang="scss" scoped>
.value-size{
    font-size: 1.5rem;
    color: black;
}
</style>