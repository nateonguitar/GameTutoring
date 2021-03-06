var Player = function(canvas) {
    this.setImage = function(image_src) {
        this.image = new Image(this.width, this.height);
        if (image_src == '' || image_src == null) {
            this.image.src = "../SharedImages/RedQuestionMark.png"
        }
        else {
            this.image.src = image_src;
        }
    }

    this.idle_image = "../SharedImages/MarioIdle.png";
    this.setImage(this.idle_image);

    this.hp     = 20;
    this.damage = 5;
    this.speed  = 5;
    this.width  = 50;
    this.height = 100;

    this.x      = 250;
    this.y      = canvas.height - this.height - this.height/2;

    this.moving_left  = false;
    this.moving_right = false;
    this.moving_up    = false;
    this.moving_down  = false;
    

    this.controlPlayer = function() {
        if (this.moving_left) {
            player.x -= this.speed;

            // keep player from going through the left wall
            if (player.x < 0){
                player.x = 0;
            }
        }
        if (this.moving_up) {
            player.y -= this.speed;

            // keep player from going through the top wall
            if (player.y < 0) {
                player.y = 0;
            }
        }
        if (this.moving_right) {
            player.x += this.speed;

            // keep player from going through the right wall
            if (player.x + player.width > canvas.width) {
                player.x = canvas.width - player.width;
            }
        }
        if (this.moving_down) {
            player.y += this.speed;

            // keep player from going through the bottom wall
            if (player.y + player.height > canvas.height) {
                player.y = canvas.height - player.height;
            }
        }
    }
}