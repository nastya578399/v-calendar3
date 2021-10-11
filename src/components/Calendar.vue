<template>
    <div>
        <v-date-picker  v-model="date"
        is-dark
        title-position="left"
        :masks="{ title: 'MMMM YYYY' }"
        :attributes="attributes"
        @click="clickTime"
        >
        </v-date-picker>
    </div>
</template>

<script>


export default {
    data() {
        return {
            dateNotes: '',
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
                    name: "Date with David",
                    comments: "MUST bring chocolate.",
                }
            ]
        }
    },

    methods: {
        clickTime(){
            this.dataNotes = this.date
            console.log('event', this.dateNotes)
        }
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



</style>