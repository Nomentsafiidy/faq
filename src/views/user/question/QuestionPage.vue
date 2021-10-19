<template>
    <div class="q_container">
        <div class="q_header">
            <h3>Question</h3>
            <button class="btn btn_primary">Nouveau</button>
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
export default {
    components: {
        QuestionItem,
    },
};
</script>

<style lang="scss">
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
