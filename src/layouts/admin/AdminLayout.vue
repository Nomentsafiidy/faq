<template>
    <div class="container">
        <div class="ul_headear">
            <div class="slot_start">
                <router-link class="nav_item" to="/admin/home">
                    <span>Home</span>
                </router-link>
                <router-link class="nav_item" to="/admin/question">Questions</router-link>
            </div>
            <div class="slot_end">
                <div @click.prevent.stop="toggleUserAction" class="avatar">
                    <img :src="'https://eu.ui-avatars.com/api/?name=' + user.pseudo" alt="" srcset="" />

                    <div v-if="showUserAction" class="user_action">
                        <a @click.prevent.stop="toggleUserAction" class="user_action_item text_dark">
                            Mon compte
                        </a>
                        <a @click.prevent.stop="signOut" class="user_action_item text_danger">
                            Déconnexion
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="ul_body">
            <router-view />
        </div>
    </div>
</template>

<script>
import { onAuthStateChanged } from 'firebase/auth';
import { auth, logOut, getUserById } from '../../firebase/firebase';
import { User } from '../../models/user';

export default {
    data() {
        return {
            showUserAction: false,
        };
    },
    methods: {
        toggleUserAction() {
            this.showUserAction = !this.showUserAction;
        },
        signOut: async function () {
            this.toggleUserAction();
            await logOut();
            this.$router.push('/home');
        },
    },
    mounted() {
        onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                const tmpUser = await getUserById(currentUser.uid);
                if (tmpUser) {
                    this.user = new User(tmpUser);
                }
            } else {
                this.user = null;
            }
        });
    },
};
</script>

<style lang="scss" scope>
.ul_headear {
    height: 64px;
    padding: 16px 0;
    margin-bottom: 16px;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    align-items: center;

    .nav_item {
        font-size: 16px;
        padding: 0.5em 0.9em;
        // background: #e5e5e5;
        margin-right: 8px;
        display: block;
        position: relative;
        color: #333;
        transition: color 0.25s ease-in-out;

        &::before {
            content: ' ';
            background: rgba(#000000, 0.3);
            border-radius: 4px;
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0;
            transition: opacity 0.25s ease-in-out;
        }

        & > span {
            z-index: 2;
        }

        &:hover {
            color: #fff;
            &::before {
                opacity: 1;
            }
        }

        &.router-link-exact-active {
            color: #42b983;
        }
    }
    .slot_start {
        display: flex;
        margin-right: auto;
    }
    .slot_end {
        display: flex;
        margin-left: auto;
    }
    .avatar {
        position: relative;
        height: 32px;
        width: 32px;
        padding: 0;
        margin: 0 8px;
        border: none;
        cursor: pointer;
        background: none;
        & > img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
        }
        .user_action {
            z-index: 3;
            position: absolute;
            background: white;
            right: 0px;
            border-radius: 3px;
            width: 200px;
            top: calc(100% + 8px);
            box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.2);
            animation: appear 0.2s;
            overflow: hidden;
            .user_action_item {
                height: 40px;
                cursor: pointer;
                display: flex;
                align-items: center;
                padding: 0 16px;
                transition: all 0.4s;
                &:hover {
                    background: #dfdfdf;
                }
            }

            @keyframes appear {
                0% {
                    // transform: translateX(200%);
                    height: 0px;
                }
                100% {
                    // transform: translateX(0);
                    height: 80px;
                }
            }
        }
    }
}
.ul_body {
    padding: 0 16px;
}
</style>
