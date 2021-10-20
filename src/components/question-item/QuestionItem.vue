<template>
    <div v-if="question" class="qi_container">
        <ResponseForm @newResponse="onNewResponse" ref="responseForm" />
        <div class="question">
            <div>
                {{ question.content }}
            </div>
            <div v-if="reply === true" class="actions">
                <button @click="onOpenResponseForm" class="btn">reply</button>
            </div>
        </div>
        <div v-if="question.response && question.response.content && reply === false" class="answer">
            <h3>Reponse :</h3>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae eos fuga maiores placeat minus provident asperiores, quia,
                laudantium tempore sapiente eligendi. In quos quo tenetur labore libero voluptates ut. Quasi.
            </p>
        </div>
    </div>
</template>

<script>
import ResponseForm from '../response-form/ResponseForm.vue';
import { Question } from '../../models/question';
import { updateQuestion } from '../../firebase/firebase';

export default {
    props: {
        question: Object,
        reply: Boolean,
    },
    components: {
        ResponseForm,
    },
    methods: {
        onOpenResponseForm() {
            this.$refs.responseForm.openResponseForm();
        },
        onNewResponse: async function (response) {
            const updated = new Question({
                ...this.question,
                response: response,
            });
            await updateQuestion(updated);
            console.log('updateQuestion', updateQuestion);
            this.$emit('replied', updated);
        },
    },
};
</script>

<style scoped>
h3 {
    font-size: 24px;
    line-height: 24px;
    font-weight: bold;
    color: #000;
    margin-bottom: 0.7em;
}
p {
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 24px;
}
.qi_container {
    margin-top: 16px;
    border-radius: 4px;
    border: 1px solid #e5e5e5;
}
.question {
    padding: 24px;
    font-size: 18px;
    line-height: 24px;
    color: #222;
    font-weight: bold;
    text-align: justify;
    position: relative;
}
.answer {
    color: #555555;
    padding: 0 24px;
}
.actions {
    display: flex;
    justify-content: flex-end;
}
.btn {
    color: #42b983;
}
</style>
