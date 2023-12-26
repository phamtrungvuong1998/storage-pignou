<script>
export default {
    name: "UrlComp",
    props: {
        textConfirm: {
            type: String,
            required: true,
        },
        urlRedirect: {
            type: String,
            required: true,
        },
        textQuestion: {
            type: String,
            required: true,
        }
    }
}
</script>

<template>
    <div class="margin-top20 text-center">
        {{textQuestion}} <router-link :to="urlRedirect">{{textConfirm}}</router-link>
    </div>
</template>

<style scoped>

</style>
