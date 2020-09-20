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
        this.life = 8;
        this.points = 0;
        this.testObj = new Paddle(0, 0, 50, 50,3);
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
        this.checkCollision();
        if(this.life === 0){
            this.gameOverText = [
                "GAME OVER", 
                "",
                "",
                "Points: "+this.points];
            this.gameOver = true;
        }
    }

    checkCollision(){
        for(let i = 0; i < this.bullets.length; i++){
            for(let j = 0; j < this.stones.length; j++){
                if(this.bullets[i].y === this.stones[j].y+100){
                    if(this.bullets[i].x >= this.stones[j].x && this.bullets[i].x <= this.stones[j].x+30){//Die Positionen wurde nicht richtig gerechnet..
                        this.bullets.splice(i,1);
                        this.stones.splice(j,1);
                        this.points++;
                        //console.log("TEST");
                    }else if(this.bullets[i].y <0){
                        this.bullets.splice(i,1);
                    }
                    
                }else if(this.stones[j].y > 450){
                    this.stones.splice(j,1);
                    this.life--;
                }
            }
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

        this.drawLife(ctx);
        this.drawPoints(ctx);
        this.testObj.draw(ctx);
        
    }

    drawLife(ctx){
        ctx.fillStyle = "#008000";
        ctx.font = "30px monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.fillText(this.life, this.playerObj.x+25, 475);
    }

    drawPoints(ctx){
        ctx.fillStyle = "#6bd26b";
        ctx.font = "30px monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.fillText("Points: "+this.points, 80, 15);
    }

}
