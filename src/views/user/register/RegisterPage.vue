<template>
    <div>
        <ProgessBar :loading="loading" />
        <div class="r_container">
            <h3>Register</h3>
            <form @submit.prevent="onSignUp">
                <div class="input_group">
                    <input class="input" type="text" v-model="user.pseudo" placeholder="Pseudo" />
                </div>
                <div class="input_group">
                    <input class="input" type="email" v-model="user.email" placeholder="Email" />
                </div>
                <div class="input_group">
                    <input class="input" type="password" v-model="user.password" placeholder="Password" />
                </div>
                <button class="btn btn_primary" type="submit">Register</button>
            </form>
            <div class="error" v-if="error">
                {{ error.message }}
            </div>
        </div>
    </div>
</template>

<script>
// //components import
import ProgessBar from '../../../components/progress-bar/ProgressBar.vue';
// import Alert from '../../../components/alert/Alert.vue';
// //lib import
// // import db from '/src/firebase/fireba seInit';
// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// // models import
// import { User } from '/src/models/user.js';

import { saveUserToCollection } from '../../../firebase/firebase';

export default {
    data() {
        return {
            user: {
                pseudo: '',
                email: '',
                password: '',
            },
            error: '',
            loading: false,
        };
    },
    components: {
        ProgessBar,
    },
    methods: {
        onSignUp: async function () {
            this.loading = true;
            await saveUserToCollection({ ...this.user });
            this.loading = false;
            // firebase
            //     .auth()
            //     .createUserWithEmailAndPassword(this.email, this.password)
            //     .then(async (res) => {
            //         console.log('res firebase create user =>', res);
            //         // const user = new User({
            //         //     id: res.user?.uid,
            //         //     ...this.user,
            //         // });
            //         // delete user.password;
            //         // const dbRes = await db
            //         //     .collection('users')
            //         //     .doc(user.id)
            //         //     .set({
            //         //         ...user,
            //         //     });
            //         // console.log(dbRes);
            //         // this.loading = false;
            //         // this.$router.replace({ name: 'secret' });
            //     })
            //     .catch((error) => (this.error = error));
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
