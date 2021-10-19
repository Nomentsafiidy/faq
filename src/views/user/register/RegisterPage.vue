<template>
    <div>
        <div class="slider">
            <div class="line"></div>
            <div class="subline inc"></div>
            <div class="subline dec"></div>
        </div>
        <div class="r_container">
            <h3>Register</h3>
            <form @submit.prevent="onSignUp">
                <div class="input_group">
                    <input class="input" type="email" v-model="email" placeholder="email" />
                </div>
                <div class="input_group">
                    <input class="input" type="password" v-model="password" placeholder="password" />
                </div>
                <button class="btn btn_primary" type="submit">Register</button>
            </form>
            <!-- <div class="error" v-if="error">
                {{ error.message }}
                </div> -->
            <div class="alert alert_success">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad blanditiis, amet rerum quod fuga aliquid distinctio dignissimos, doloribus
                corrupti incidunt iste deleniti. Tenetur eum ducimus deserunt sint fugit voluptas expedita.
            </div>
        </div>
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
        onSignUp() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then((res) => {
                    console.log('here', res);
                    // this.$router.replace({ name: 'secret' });
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

.slider {
    position: relative;
    width: 100%;
    height: 4px;
    overflow-x: hidden;
}

.line {
    position: absolute;
    opacity: 0.4;
    background: #4a8df8;
    width: 150%;
    height: 4px;
}
.subline {
    position: absolute;
    background: #4a8df8;
    height: 4px;
}
.inc {
    animation: increase 2s infinite;
}
.dec {
    animation: decrease 2s 0.5s infinite;
}
@keyframes increase {
    from {
        left: -5%;
        width: 5%;
    }
    to {
        left: 130%;
        width: 100%;
    }
}
@keyframes decrease {
    from {
        left: -80%;
        width: 80%;
    }
    to {
        left: 110%;
        width: 10%;
    }
}
</style>
