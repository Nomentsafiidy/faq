<template>
    <div v-if="loading === true" class="slider">
        <div class="line"></div>
        <div class="subline inc"></div>
        <div class="subline dec"></div>
    </div>
</template>

<script>
export default {
    props: {
        loading: Boolean,
    },
};
</script>

<style scope>
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
