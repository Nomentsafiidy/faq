<template>
    <div class="r_container">
        <h3>Register</h3>
        <form @submit.prevent="pressed">
            <div class="input_group">
                <input class="input" type="email" v-model="email" placeholder="email" />
            </div>
            <div class="input_group">
                <input class="input" type="password" v-model="password" placeholder="password" />
            </div>
            <button class="btn btn_primary" type="submit">Register</button>
        </form>
        <div class="error" v-if="error">{{ error.message }}</div>
    </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
    data() {
        return {
            email: '',
            password: '',
            error: '',
        };
    },
    methods: {
        pressed() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    console.log('here');
                    this.$router.replace({ name: 'secret' });
                })
                .catch((error) => (this.error = error));
        },
    },
};
</script>

<style lang="scss" scoped>
.r_container {
    width: 350px;
    margin: 64px auto;
}
h3 {
    font-size: 24px;
    margin-bottom: 0.8em;
    font-weight: bold;
}
input {
    width: 100%;
}
</style>
