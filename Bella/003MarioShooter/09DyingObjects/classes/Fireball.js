var Fireball = function() {
    this.setImage = function(image_src) {
        this.image = new Image(this.width, this.height);
        if (image_src == '' || image_src == null) {
            this.image.src = "../SharedImages/RedQuestionMark.png"
        }
        else {
            this.image.src = image_src;
        }
    }

    this.images = {
        idle: "../SharedImages/Fireball.png",
        walkingLeft: "../SharedImages/Fireball.png",
        walkingRight: "../SharedImages/Fireball.png",
        dying: "../SharedImages/Fireball.png",
        dead: "../SharedImages/Fireball.png"
    }
    this.setImage(this.images.idle);

    this.hp     = 5;
    this.damage = 5;
    this.speed  = 15;
    this.width  = 20;
    this.height = 40;

    // 30 frames per second means this is 1/3 of a second.
    this.dyingFrames = 10;
    this.dyingWidth = 30;
    this.dyingHeight = 45;

    this.deadWidth = 30;
    this.deadHeight = 45;
    
    this.x      = 250;
    this.y      = 100;
}