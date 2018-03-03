var Player = function(screen_size_multiplier) {
    this.speed  = 5;
    this.x      = 250;
    this.y      = 750;
    this.width  = 50;
    this.height = 100;

    this.moving_left  = false;
    this.moving_right = false;
    this.moving_up    = false;
    this.moving_down  = false;

    
    this.image_path = "../SharedImages/MarioIdle.png";
    this.image = new Image(this.width, this.height);
    this.image.src = this.image_path;
}