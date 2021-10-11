<template>
  <div class="container">
    <CalendarHead />
    <Calendar />
    <Notes />
    <Modal />
  </div>
</template>

<script>
import Calendar from './components/Calendar.vue'
import CalendarHead from './components/CalendarHead.vue'
import Modal from './components/Modal.vue'
import Notes from './components/Notes.vue'



export default {
  name: 'App',
  components: {
    Calendar,
    CalendarHead,
    Notes,
    Modal
  }
}
</script>


<style >
.container {
  position: relative;
}
</style>

