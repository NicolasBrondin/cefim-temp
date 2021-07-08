<template>
    <div class="room">
        <div class="room-title">
            Pièce 1
        </div>
        <ul class="items-list">
            <li class="item" v-for="(item, index) in items" :key="index">
                <div class="item-infos">
                    <img class="item-icon" :src="item.icon"/>
                    <span>{{item.name}} ({{item.status}})</span>
                </div>
                <div class="item-actions">
                    <button @click="$emit('use', item)">
                        <img src="https://image.flaticon.com/icons/png/512/3039/3039498.png" alt="Utiliser"/>
                    </button>
                    <button @click="$emit('take',item)">
                        <img src="https://image.flaticon.com/icons/png/512/2165/2165920.png" alt="Prendre"/>
                    </button>
                </div>
            </li>
      </ul>
    </div>
</template>

<script>
export default {
    props:["items"]
}
</script>

<style scoped>

    .room {
        @apply bg-white rounded-xl shadow-xl my-5 overflow-hidden;
    }

    .room-title {
        @apply bg-blue-500 text-white text-center text-lg p-2;
    }

    .items-list {
        
    }

    .item {
        @apply flex border-b p-4 justify-between items-center;
    }

    .item-infos {
        @apply flex items-center;
    }

    .item-icon {
        @apply h-8 mr-2;
    }

    .item-actions button {
        @apply mx-2;
    }

    .item-actions button img {
        @apply h-10;
    }
</style>