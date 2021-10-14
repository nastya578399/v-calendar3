<template>
  <div class="container">
    <CalendarHead />
    <Calendar  />
    <Notes />
  </div>
</template>

<script>
import Calendar from './components/Calendar.vue'
import CalendarHead from './components/CalendarHead.vue'
import Notes from './components/Notes.vue'



export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    Calendar,
    CalendarHead,
    Notes
  }
}
</script>


<style >
.container {
  position: relative;
}
</style>

