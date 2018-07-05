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

class Player extends Entity {
    constructor(){
        super();
        this.x = 2;
        this.y = 5;
        this.sprite +="char-boy.png";
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



