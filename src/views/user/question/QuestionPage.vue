<template>
    <div class="q_container">
        <QuestionForm ref="questionForm" />
        <div class="q_header">
            <h3>Question</h3>
            <button @click="onOpenQuestionForm" class="btn btn_primary">Nouveau</button>
        </div>
        <div class="question_list">
            <!-- TODO -->
            <QuestionItem />
            <QuestionItem />
            <QuestionItem />
        </div>
    </div>
</template>

<script>
import QuestionItem from './../../../components/question-item/QuestionItem';
import QuestionForm from '../../../components/question-form/QuestionForm.vue';

export default {
    components: {
        QuestionItem,
        QuestionForm,
    },
    methods: {
        onOpenQuestionForm() {
            console.log(this.$refs);
            this.$refs.questionForm.openQuestionForm();
        },
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
