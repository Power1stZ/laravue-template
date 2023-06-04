<template>
    <div class="container">
        <NormalCard header="About Page">
            <template #card-body>
                <p>{{ message }}</p>
            </template>
            <template #card-footer>
                <button class="btn btn-danger m-1" @click="decrement">
                    decrement
                </button>
                <button class="btn btn-primary m-1" @click="increment">
                    Increment
                </button>
                <button class="btn btn-secondary m-1" @click="reset">
                    Reset
                </button>
            </template>
        </NormalCard>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import NormalCard from "../components/NormalCard.vue";

const message = ref("Welcome to the About page!");
const store = useStore();

function increment() {
    store.dispatch("increment");
}
function decrement() {
    store.dispatch("decrement");
}
function reset() {
    store.dispatch("reset");
}
</script>
