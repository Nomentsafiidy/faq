<template>
    <div>
        <ProgessBar :loading="loading" />
        <div class="l_container">
            <h3>Login</h3>
            <form @submit.prevent="onSignIn">
                <div class="input_group">
                    <input class="input" type="email" required placeholder="Email" v-model="login.email" />
                </div>
                <div class="input_group">
                    <input class="input" type="password" required placeholder="Password" v-model="login.password" />
                </div>
                <button class="btn btn_primary">Login</button>
            </form>
            <Alert v-if="error" :message="error.message" :type="'error'" />
        </div>
    </div>
</template>

<script>
import ProgessBar from '../../../components/progress-bar/ProgressBar.vue';
import Alert from '../../../components/alert/Alert.vue';
import { signIn } from './../../../firebase/firebase';

export default {
    data() {
        return {
            login: {
                email: '',
                password: '',
            },
            error: '',
            loading: false,
        };
    },
    components: {
        ProgessBar,
        Alert,
    },
    methods: {
        onSignIn: async function () {
            try {
                this.loading = true;
                const user = await signIn(this.login);
                this.loading = false;
                if (user) {
                    if (user.isAdmin) {
                        this.$router.replace('/admin/home');
                    } else {
                        this.$router.replace('/home');
                    }
                }
            } catch (error) {
                this.error = error;
                this.loading = false;
            }
            //TODO
            // firebase
            //     .auth()
            //     .signInWithEmailAndPassword(this.email, this.password)
            //     .then((data) => {
            //         console.log(data);
            //         this.$router.replace({ name: 'secret' });
            //     })
            //     .catch((error) => {
            //         this.error = error;
            //     });
        },
    },
};
</script>

<style lang="scss" scoped>
.l_container {
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
