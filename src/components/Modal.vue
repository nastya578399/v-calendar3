<template>
    <div class="modal-backdrop"></div>
    <div class="modal">
        <h3></h3>

        <slot />
        <button class="btn danger">Закрыть</button>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.modal {
    position: fixed;
    top: 60px;
    width: 270px;
    padding: 1rem;
    background: #fff;
    z-index: 1000;
    left: 50%;
    border-radius: 10px;
    transform: translateX(-50%);
    box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
}

.modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .35);
    z-index: 100;
}


.btn.danger {
    margin-right: 2px;
    background: #e53935;
    color: #fff;
    border-color: #e53935;
}

</style>