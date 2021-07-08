<template>
    <div class="timer">
        <span>
            <slot/>
            {{time_str}}
        </span>
    </div>
</template>

<script>
export default {
    props: ["time"],
    computed: {
        time_str: function(){
            const seconds_str = (this.time % 60) + "";
            const minutes_str = Math.floor(this.time / 60) + "";
            return minutes_str.padStart(2,"0") + ":" + seconds_str.padStart(2,"0");
        }
    }
}
</script>

<style scoped>
    .timer {
        @apply p-4 bg-gray-900 rounded-lg text-white text-3xl;
    }
</style>