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


}



