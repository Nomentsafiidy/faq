<template>
    <div v-if="question" class="qi_container">
        <div class="question">
            {{ question.content }}
        </div>
        <div v-if="question.response && question.response.content" class="answer">
            <h3>Reponse :</h3>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae eos fuga maiores placeat minus provident asperiores, quia,
                laudantium tempore sapiente eligendi. In quos quo tenetur labore libero voluptates ut. Quasi.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        question: Object,
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
</style>
