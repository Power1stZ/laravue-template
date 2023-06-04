<template>
    <div class="card">
        <div class="card-header">
            <h1>{{ header }}</h1>
        </div>

        <div class="card-body">
            <slot name="card-body"></slot>
        </div>
        <div class="card-footer">
            <slot name="card-footer"></slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    header: String,
});
</script>
