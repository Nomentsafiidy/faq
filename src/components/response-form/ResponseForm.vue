<template>
    <div v-if="open" class="qf_container">
        <div @click="onCloseModal" class="backdrop"></div>
        <div class="modal_container">
            <h3>Reponse</h3>
            <form @submit.prevent="onAddResponse">
                <div class="input_group">
                    <textarea v-model="response" class="textarea" placeholder="votre question" id="" cols="30" rows="7"></textarea>
                </div>
                <div>
                    <button class="btn btn_primary" type="submit">Soumettre</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { Response } from '../../models/response';

export default {
    data() {
        return {
            open: false,
            response: '',
        };
    },
    methods: {
        onCloseModal() {
            this.open = false;
        },
        onAddResponse: async function () {
            try {
                const tmpResponse = new Response({
                    content: this.response,
                });
                this.$emit('newResponse', tmpResponse);
                this.open = false;
            } catch (error) {
                console.log('error => ', error);
            }
        },
        openResponseForm() {
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
