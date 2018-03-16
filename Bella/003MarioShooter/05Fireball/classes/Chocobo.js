var Chocobo = function() {
    this.speed  = 5;
    this.width  = 30;
    this.height = 45;
    
    this.x      = 250;
    this.y      = -this.height;

    this.image_path = "../SharedImages/ChocoboIdle.png";
    this.image = new Image(this.width, this.height);
    this.image.src = this.image_path;
}