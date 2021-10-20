<template>
    <div class="q_container">
        <div class="question_list">
            <QuestionItem v-for="(question, index) in questionList" v-bind:key="index" :question="question" :reply="true" @replied="onReplied" />
        </div>
    </div>
</template>

<script>
import QuestionItem from './../../../components/question-item/QuestionItem';
import { getQuestionWithoutResponse } from '../../../firebase/firebase';

export default {
    data() {
        return {
            questionList: [],
        };
    },
    components: {
        QuestionItem,
    },
    methods: {
        getQuestions: async function () {
            this.questionList = await getQuestionWithoutResponse(this.$route.params.userId);
        },
        onReplied(question) {
            this.questionList = this.questionList.filter((q) => {
                if (q.id !== question.id) {
                    return q;
                }
            });
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
