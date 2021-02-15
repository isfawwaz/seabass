<template>
    <div class="sb-alert">
        <div class="sb-alert__container">
            <div class="sb-alert__svg">
                <lottie-animation path="./img/animation/whale.json" />
            </div>
            <div class="sb-alert__content">
                <h2 class="sb-alert__title">Daftar Harga Ikan</h2>
                <p class="sb-alert__description">List data ikan yang tersedia di eFishery</p>
            </div>
            <div class="sb-alert__svg-prepend d-none d-md-inline">
                <lottie-animation path="./img/animation/fish.json" />
            </div>
        </div>
        <div class="sb-alert__background"></div>
    </div>
</template>

<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";

export default {
    name: "Alert",
    components: {
        LottieAnimation
    }
}
</script>