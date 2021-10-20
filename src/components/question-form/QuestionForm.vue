<template>
    <div v-if="open" class="qf_container">
        <div @click="onCloseModal" class="backdrop"></div>
        <div class="modal_container">
            <h3>Question</h3>
            <form @submit.prevent="onAddQuestion">
                <div class="input_group">
                    <textarea v-model="question" class="textarea" placeholder="votre question" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button class="btn btn_primary" type="submit">Soumettre</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { Question } from '../../models/question';

export default {
    data() {
        return {
            open: false,
            question: '',
        };
    },
    methods: {
        onCloseModal() {
            this.open = false;
        },
        onAddQuestion() {
            const tmpQuestion = new Question({
                content: this.question,
            });
            console.log('tmpQuestion =>', tmpQuestion);
            this.open = false;
        },
        openQuestionForm() {
            console.log('open call');
            this.open = true;
        },
    },
};
</script>

<style scoped lang="scss">
.qf_container {
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.backdrop {
    position: absolute;
    z-index: 1001;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
}

.modal_container {
    background: #fff;
    border-radius: 4px;
    padding: 24px;
    z-index: 1002;
    width: 450px;
}
.textarea {
    width: 100%;
}

h3 {
    font-size: 24px;
    line-height: 24px;
    font-weight: bold;
    color: #000;
    margin-bottom: 0.7em;
}
</style>
