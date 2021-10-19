<template>
    <div class="alert" v-bind:class="alertClass">
        {{ message }}
    </div>
</template>

<script>
export default {
    props: {
        message: String,
        type: String,
    },
    computed: {
        alertClass() {
            if (this.type === 'success') {
                return 'alert_success';
            } else if (this.type === 'error') {
                return 'alter_error';
            }
            return '';
        },
    },
};
</script>

<style scope>
.alert {
    font-size: 14px;
    padding: 1.5em;
    border-radius: 4px;
    margin: 1em auto;
    line-height: 18px;
    color: #666;
    border: 1px solid #666;
}

.alert_success {
    color: #3cb371;
    border: 1px solid #3cb371;
}

.alter_error {
    color: #ff0000;
    border: 1px solid #ff0000;
}
</style>
