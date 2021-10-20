<template>
    <div class="q_container">
        <QuestionForm @newQuestion="onNewQuestion" ref="questionForm" />
        <div class="q_header">
            <h3>Question</h3>
            <button @click="onOpenQuestionForm" class="btn btn_primary">Nouveau</button>
        </div>
        <div class="question_list">
            <QuestionItem v-for="(question, index) in questionList" v-bind:key="index" :question="question" />
        </div>
    </div>
</template>

<script>
import QuestionItem from './../../../components/question-item/QuestionItem';
import QuestionForm from '../../../components/question-form/QuestionForm.vue';
import { getQuestionByUserId } from '../../../firebase/firebase';

export default {
    data() {
        return {
            questionList: [],
        };
    },
    components: {
        QuestionItem,
        QuestionForm,
    },
    methods: {
        onOpenQuestionForm() {
            console.log(this.$refs);
            this.$refs.questionForm.openQuestionForm();
        },
        onNewQuestion(question) {
            this.questionList.push(question);
        },
        getQuestions: async function () {
            this.questionList = await getQuestionByUserId(this.$route.params.userId);
        },
    },
    mounted() {
        this.getQuestions();
    },
};
</script>

<style lang="scss" scoped>
.q_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
    border: 1px solid #e5e5e5;
    color: #666;
}
h3 {
    font-size: 24px;
    line-height: 24px;
    font-weight: bold;
}
</style>
