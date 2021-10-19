<template>
    <div class="container">
        <div class="ul_headear">
            <div class="slot_start">
                <router-link class="nav_item" to="/home">
                    <span>Home</span>
                </router-link>
                <router-link class="nav_item" to="/questions">Mes Questions</router-link>
            </div>
            <div class="slot_end">
                <router-link class="nav_item" to="/register">register</router-link>
                <router-link class="nav_item" to="/login">login</router-link>
            </div>
        </div>
        <div class="ul_body">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {};
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
}
.ul_body {
    padding: 0 16px;
}
</style>
