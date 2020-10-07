function Snake(){
    this.x = 3;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.total = 3;
    this.tail = [];
    this.tail[1] = { x: 2, y: 0};
    this.tail[2] = { x: 1, y: 0};
    let alive = true;

    this.draw = function(){
        ctx.fillStyle = "green";
        for (let i=0; i < this.tail.length; i++){
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }
        ctx.fillRect(this.x, this.y, scale, scale);
    }
    this.update = function(){
        if(alive){
            for (let i=0; i < this.tail.length - 1; i++){
                this.tail[i] = this.tail[i + 1];
            
            if (this.x===this.tail[i].x && this.y===this.tail[i].y){
                alive = false;
                alert("VÉGE!");
                
            }
        }
        this.tail[this.total - 1] = { x: this.x, y: this.y};

        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if (this.x > canvas.width){
            this.x = 3;
        }
        if (this.y > canvas.height){
            this.y = 0;
        }
        if (this.x < 0){
            this.x = canvas.width;
        }
        if (this.y < 0){
            this.y = canvas.height;
        }
        }
    }
    this.changeDirection = function(direction){
        switch(direction){
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
                break;
            case 'Left':
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
                break;
            case 'Right':
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
                break;
        }
    }
    this.eat = function(apple){
        if(this.x === apple.x && this.y === apple.y){
            this.total++;
            return true;
        }
        return false;
    }
}