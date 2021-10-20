<template>
    <div class="h_container">
        <div class="h_header">
            <input class="input" type="text" placeholder="Mot clé" />
            <button class="btn btn_primary">Rechercher</button>
        </div>
        <div class="question_list">
            <QuestionItem v-for="(question, index) in questionList" v-bind:key="index" :question="question" />
        </div>
    </div>
</template>

<script>
import QuestionItem from './../../../components/question-item/QuestionItem';
import { getQuestionWithResponse } from '../../../firebase/firebase';

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
            this.questionList = await getQuestionWithResponse(this.$route.params.userId);
        },
    },
    mounted() {
        this.getQuestions();
    },
};
</script>

<style lang="scss" scoped>
.h_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
    border: 1px solid #e5e5e5;
    color: #666;
    .input {
        flex-grow: 1;
        margin-right: 16px;
    }
}
h3 {
    font-size: 24px;
    line-height: 24px;
    font-weight: bold;
}
</style>
