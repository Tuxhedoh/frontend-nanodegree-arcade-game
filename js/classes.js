class Entity {
    constructor(){
        this.sprite ="images/";
        this.x = 0;
        this.y = 0;
    }

    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x*101, this.y*83);
    }

    update(){
        
    }
}
class Enemy extends Entity {
    constructor(){
        super();
        this.x = Math.ceil((Math.random()*-3))-1;
        this.y = Math.ceil((Math.random()*3));
        this.sprite+="enemy-bug.png"
    }
    update(dt){
        // console.log(dt)
        if(this.x < 5){
            this.x+=1*dt;
        }
        else { 
            this.remove();
        }
    }
    remove(){
        let index = allEnemies.indexOf(this);
        if (index > -1){
            allEnemies.splice(index,1);
        }
        allEnemies.push(new Enemy());
    }
    checkCollisions(){
        if(this.y === player.y && this.x > player.x-.5){
            player.reset();
            this.remove();
        }
    }
}

class Player extends Entity {
    constructor(){
        super();
        this.x = 2;
        this.y = 5;
        this.sprite +="char-boy.png";
    }    

    reset(){
        this.x =2;
        this.y=5;

    }

    handleInput(event){
        if(event === "up" && player.y > 0){
            this.y-=1;
        }
        if(event === "down" && player.y <5){
            this.y+=1;
        }
        if(event === "left" && player.x >0){
            this.x-=1;
        }
        if(event === "right" && player.x <4){
            this.x+=1;
        }
    }

}



