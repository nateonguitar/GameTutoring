function Star(x, size){
    this.width = size;
    this.height = size;
    this.color = 'rgb(' + Math.floor(Math.random() * 135) + 120 + ', ' + Math.floor(Math.random() * 135) + 120 + ', ' + Math.floor(Math.random() * 135) + 120 + ')';
    this.x = x;
    this.y = -this.height;
}