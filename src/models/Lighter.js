import { GameObject } from './GameObject'

export class Lighter extends GameObject {
    constructor(game, name, status){
        const type = "Lighter";
        const icons = {
            idle: "https://image.flaticon.com/icons/png/512/3232/3232752.png",
            on: "https://image.flaticon.com/icons/png/512/1020/1020597.png"
        };
        super(game, name, icons, type, status);
    }

    use(){
        if(this.status === "idle"){
            this.setStatus("on");
        }
    }

    combine(otherItem){
        if(this.status === "on"){
            return otherItem.burn();
        }
        return false;
    }
}