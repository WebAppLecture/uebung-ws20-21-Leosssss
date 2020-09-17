import { GameTemplate } from "./GameTemplate.js";
import { GameObject, MovableGameObject, Ball, Mode } from "../GameObject.js";
import { Paddle } from "./Pong.js";

export class FallingStones extends GameTemplate {

    start(){
        this.gameOver= false;
        this.playerObj = new Paddle(200, 450, 50, 50,3);
        //this.bullets = new MovableGameObject(200, 450, 8, 8, "#6bd26b", 0, -4);
        this.bullets = [];
        this.stones = [];
        this.timer=0;
        //this.stone = new MovableGameObject(Math.random()*450, 0, 50, 100, "#6bd26b", 0, 4);
    }

    bindControls(){
        this.inputBinding = {
            "left": this.playerObj.left.bind(this.playerObj), 
            "right": this.playerObj.right.bind(this.playerObj),
            "primary": this.createBullet.bind(this),// E --> Bullets
        }
    }
    update(ctx){
        this.playerObj.update(ctx);
        
        for(let i = this.bullets.length-1; i > 0; i--){
            this.bullets[i].update(ctx);
        }

        for(let i = this.stones.length-1; i > 0; i--){
            this.stones[i].update(ctx);
        }
        this.timer+=1;
        if(this.timer >=70){
            this.createStone(ctx);
            this.timer = 0;
        }
    }

    createBullet(bool){
        if(bool === true){
            this.bullets.push(new MovableGameObject(this.playerObj.x+20, this.playerObj.y, 10, 10, "#6bd26b", 0, -4));
        }
    }
     
    createStone(){
        this.stones.push(new MovableGameObject(Math.random()*350, 0, 50, 100, "#6bd26b", 0, 3))
    }

    draw(ctx){
        this.playerObj.draw(ctx);
        for(let i = this.bullets.length-1; i > 0; i--){
            this.bullets[i].draw(ctx);
        }
        
        for(let i = this.stones.length-1; i > 0; i--){
                this.stones[i].draw(ctx);
        }
    }
}
