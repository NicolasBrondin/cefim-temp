<template>
    <button :disabled="disabled" @click="$emit('click')" :class="[size, type]">
        <img v-if="icon" :src="icon"/>
        <span><slot/></span>
    </button>
</template>

<script>
export default {
    props: ["icon", "disabled", "size", "type"]
}
</script>

<style scoped>
    button {
        @apply 
        flex
        items-center
        w-full
        px-4
        p-2 
        rounded-full 
        shadow
        bg-blue-500
        text-white 
        text-lg;
    }

    button.small {
        @apply
        p-1
        px-8
        text-base;
    }

    button.danger {
        @apply 
        bg-red-500;
    }

    button[disabled] {
        opacity: 0.5;
        text-decoration: line-through;
    }

    button span {
        @apply flex-1 text-center;
    }

    button img {
        @apply h-5;
    }
</style>