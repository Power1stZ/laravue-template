import { createStore } from "vuex";
import createPersistState from "vuex-persistedstate";

const store = createStore({
    state() {
        return {
            count: 0,
            listIcon: [
                "https://venngage-wordpress.s3.amazonaws.com/uploads/2022/09/meme_surprised_shocked_pikachu.png",
                "https://venngage-wordpress.s3.amazonaws.com/uploads/2022/09/meme_awkward_look_monkey_puppet.png",
                "https://venngage-wordpress.s3.amazonaws.com/uploads/2022/09/meme_handsome_squidward.png",
                "https://venngage-wordpress.s3.amazonaws.com/uploads/2022/09/meme_sad_frog.png",
                "https://venngage-wordpress.s3.amazonaws.com/uploads/2022/09/meme_doge_dog.png",
                "https://venngage-wordpress.s3.amazonaws.com/uploads/2022/09/meme_roll_safe.png",
                "https://venngage-wordpress.s3.amazonaws.com/uploads/2022/09/meme_icons_woman_yelling_cat_being_yelled_at.png",
            ],
        };
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        reset(state) {
            state.count = 0;
        },
    },
    actions: {
        increment(context) {
            context.commit("increment");
        },
        decrement(context) {
            context.commit("decrement");
        },
        reset(context) {
            context.commit("reset");
        },
    },
    getters: {
        doubleCount(state) {
            return state.count * 2;
        },
        randomIcon(state) {
            const randomIndex = Math.floor(
                Math.random() * state.listIcon.length
            );
            return state.listIcon[randomIndex];
        },
    },
    plugins: [
        createPersistState({
            excluded: ["count"],
        }),
    ],
});

export default store;
