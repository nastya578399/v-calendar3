<template>
    <div>
        <v-date-picker  v-model="date"
        is-dark
        title-position="left"
        :masks="{ title: 'MMMM YYYY' }"
        :attributes="attributes"
        mode="dateTime" 
        :timezone="timezone"
        :minute-increment="5"
        :date="date" 
        >
        </v-date-picker>
    </div>
</template>

<script>
// import moment from 'moment'

export default {
    data() {
        let date = new Date();
        date.setMinutes(0, 0, 0);
        return {
            date: '',
            dateNotes: '',
            timezone: '',
            attributes: [
                {
                    key: 'today',
                    highlight: true,
                    dates: new Date()
                }
            ],
            events: [
                {
                    Notes: new Date(),
                }
            ]
        }
    },
    methods: {
        clickDate() {
            this.dateNotes = this.date.toLocaleString()
            console.log(this.dateNotes);
        },
    },
    watch: {
        
    }
}
</script>


<style>


.vc-container{
    border-radius: 0 !important;
    width: 270px !important;
}

.vc-container.vc-is-dark{
    color: white;
    background-color: #3d3d3e !important;
    
}

.vc-arrow.is-right{
    transform: rotate(90deg);
}

.vc-arrow.is-left{
    transform: rotate(90deg);
}

.vc-day-content.vc-focusable {
    border-radius: 0 !important;
}

.vc-highlight{
    border-radius: 0 !important;
    background-color: #2196f3 !important;
    border: 2px solid #000;
    outline: 2px solid#2196f3 ;
}



</style>