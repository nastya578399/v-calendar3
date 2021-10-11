<template>
    <div>
        <v-date-picker v-model="date"
        is-dark
        is-expanded
        title-position="left"
        :masks="{ title: 'MMMM YYYY' }"
        >
        </v-date-picker>
    </div>
</template>

<script>

export default {


}
</script>

<style>
.vc-container.vc-is-dark{
    color: white;
    background-color: #3d3d3e;
}

</style>