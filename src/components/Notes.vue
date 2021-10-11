<template>
    <div class="container">
        <div class="title">Сегодня</div>
        <input type="text" placeholder="Добавить событие сегодня">
        <div class="text">Нет событий</div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
    color: white;
    background-color: #3d3d3e !important;
    width: 270px;
}
.title {
    padding: 9px 0px 9px 7px;
    font-size: 20px;
}

input{
    background-color: #3d3d3e !important;
    border: 1px solid rgb(231, 228, 228);
    padding: 4px 0 4px 7px;
    outline:none;
    margin-left: 7px;
    margin-bottom: 4px;
    color: white;
    width: 230px;
}

.text{
    font-size: 15px;
    margin-bottom: 4px;
    padding: 9px 0px 9px 7px;
}
</style>