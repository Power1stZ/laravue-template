<template>
    <div class="container">
        <NormalCard header="Welcome to the Home Page">
            <template #card-body>
                <p>Count: {{ count }}</p>
                <p>Double Count: {{ doubleCount }}</p>
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
import { ref, computed } from "vue";
import { useStore } from "vuex";
import NormalCard from "../components/NormalCard.vue";

const store = useStore();
const count = computed(() => store.state.count);
const doubleCount = computed(() => store.getters.doubleCount);
const message = ref("");

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
