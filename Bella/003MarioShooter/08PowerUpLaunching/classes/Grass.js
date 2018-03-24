var Grass = function(x, y=null) {
    this.size   = 3;
    this.width  = Math.random() * this.size + 2;
    this.height = this.size * 5;

    this.x = x;
    if (y != null) {
        this.y = y;
    }
    else{
        this.y = -this.height;
    }
}