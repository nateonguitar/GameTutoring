function Star(maxX){
    this.size = Math.floor(Math.random() * 5);
    this.x       = Math.random() * maxX;
    this.y       = -2;
    this.color   = "#bbbbbb";
    this.outline = "rgb(" + Math.floor(Math.random() * 120) + ", " + Math.floor(Math.random() * 120) + ", " + Math.floor(Math.random() * 120) + ")";
    
    this.moveDown = function(){
        this.y += (this.size + 1) / 20;
    }

    this.setY = function(y){
        this.y = y;
    }
};