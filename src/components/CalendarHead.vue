<template>
    <div class="container">
        <div class="head">
            <div class="hours">{{ hours }}</div>
            <div class="date">{{ date }}</div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    data() {
        return {
            // hours: moment().format('LTS'),
            date: moment().format('LL'),
            hours: moment().format('HH:mm:ss'),
        }
    },
    methods:{
        
    }
}
</script>

<style scoped>
.container {
    color: white;
    background-color: #3d3d3e !important;
    width: 270px;
    padding: 4px 0px 5px 0px;
}

.head {
    
}
.hours{
    font-size: 24px;
    margin-left: 7px;
    margin-bottom: 4px;
    padding: 4px 0px 5px 0px;
}

.date {
    margin-left: 7px;
    color: #2196f3;
}
</style>