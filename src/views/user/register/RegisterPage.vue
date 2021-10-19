<template>
    <div>
        <!-- <ProgessBar :loading="loading" />
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
            <div class="alert alert_success">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad blanditiis, amet rerum quod fuga aliquid distinctio dignissimos, doloribus
                corrupti incidunt iste deleniti. Tenetur eum ducimus deserunt sint fugit voluptas expedita.
            </div>
        </div> -->
    </div>
</template>

<script>
export default {};
// //components import
// import ProgessBar from '/src/components/progress-bar/ProgressBar.vue';
// //lib import
// // import db from '/src/firebase/firebaseInit';
// import firebase from 'firebase';
// // require('firebase/auth');
// // models import
// import { User } from '/src/models/user.js';

// export default {
//     data() {
//         return {
//             user: {
//                 pseudo: '',
//                 email: '',
//                 password: '',
//             },
//             error: '',
//             loading: false,
//         };
//     },
//     components: {
//         ProgessBar,
//     },
//     methods: {
//         onSignUp() {
//             this.loading = true;
//             firebase
//                 .auth()
//                 .createUserWithEmailAndPassword(this.email, this.password)
//                 .then(async (res) => {
//                     console.log('res firebase create user =>', res);
//                     const user = new User({
//                         id: res.user?.uid,
//                         ...this.user,
//                     });
//                     delete user.password;
//                     const dbRes = await db
//                         .collection('users')
//                         .doc(user.id)
//                         .set({
//                             ...user,
//                         });
//                     console.log(dbRes);
//                     this.loading = false;
//                     // this.$router.replace({ name: 'secret' });
//                 })
//                 .catch((error) => (this.error = error));
//         },
//     },
// };
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
