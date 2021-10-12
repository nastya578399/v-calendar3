<template>
    <div class="container">
        <div class="title">Сегодня</div>
        <input type="text" placeholder="Добавить событие сегодня" 
        v-bind:value="inputValue"
        v-on:input="inputChangeHandler"
        v-on:keypress="inputKeyPress"
        >
        <div class="text" v-if="notes.length === 0">Нет событий</div>
        <ul>
            <li class="list-item" v-for="(note, i) in notes" :key="i">
                {{ note }} {{ timezone }}
                <button class="btn" v-on:click="removeNote(i, $event)">удалить</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['timezone'],
    data() {
        return {
            inputValue: '',
            notes: ['Notes 1', 'Notes 2'],
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        inputKeyPress(event) {
            if(event.key === 'Enter') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        removeNote(i) {
            this.notes.splice(i, 1)
        }
    }
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

.btn{
    margin-left: 0px;
    color: white;
    background-color: #2196f3;
}
</style>