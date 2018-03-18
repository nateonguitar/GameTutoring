var Chocobo = function() {
    this.hp     = 5;
    this.damage = 1;
    this.speed  = 7;
    this.width  = 30;
    this.height = 45;
    
    this.x      = 250;
    this.y      = -this.height;

    this.image_path = "../SharedImages/ChocoboIdle.png";
    this.image = new Image(this.width, this.height);
    this.image.src = this.image_path;
}