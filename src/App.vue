<template>
  <div id="app" class="application">
    <header>
      <Timer :time="gameController.timer"/>
      <Craft @onCombine="gameController.combineItems()" @onRemoveItem="removeItemFromInventory"  :firstItem="gameController.inventory[0]" :secondItem="gameController.inventory[1]" />
    </header>
    <Room :items="gameController.world" @use="useItem" @take="takeItem"/>
    <Button icon="https://image.flaticon.com/icons/png/512/3064/3064155.png" type="danger" :disabled="!gameController.finished" @click="gameController.finish()">Sortir</Button>
  </div>
</template>

<script>
import { GameController } from './models/GameController';
import Timer from './components/Timer.vue';
import Craft from './components/Craft.vue';
import Room from './components/Room.vue';
import Button from './components/Button.vue';

export default {
  name: 'App',
  data: function(){
    return {
      gameController: new GameController(this)
    };
  },
  methods: {
    removeItemFromInventory: function(item){
      this.gameController.deleteItemFromInventory(item);
    },
    useItem: function(item){
      this.gameController.useItem(item);
    },
    takeItem: function(item){
      this.gameController.addItemToInventory(item);
    }
  },
  components: {
    Timer,
    Craft,
    Room,
    Button,
  }
}
</script>

<style>

html {
  @apply bg-green-400;
}

body {
  @apply flex flex-col justify-center items-center;
  width: 100vw;
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  @apply w-full max-w-xl;
}

header {
  @apply flex justify-between;
}
</style>
