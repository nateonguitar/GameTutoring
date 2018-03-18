var Fireball = function() {
    this.hp     = 5;
    this.damage = 5;
    this.speed  = 15;
    this.width  = 20;
    this.height = 40;
    
    this.x      = 250;
    this.y      = 100;

    this.image_path = "../SharedImages/Fireball.png";
    this.image = new Image(this.width, this.height);
    this.image.src = this.image_path;
}