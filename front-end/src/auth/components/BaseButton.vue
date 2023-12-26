<script>
export default {
    name: "BaseButton",
    props: {
        nameBtn: {
            type: String,
            required: true,
        }
    }
}
</script>

<template>
    <div class="form-group no-margin">
        <button type="submit" class="btn btn-primary btn-block">
            {{nameBtn}}
        </button>
    </div>
</template>

<style scoped>

</style>
