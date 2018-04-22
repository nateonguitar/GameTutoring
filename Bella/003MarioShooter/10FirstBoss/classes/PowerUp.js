var PowerUp = function() {
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
        idle: "../SharedImages/RedQuestionMark.png",
        walkingLeft: "../SharedImages/RedQuestionMark.png",
        walkingRight: "../SharedImages/RedQuestionMark.png",
        dying: "../SharedImages/RedQuestionMark.png",
        dead: "../SharedImages/RedQuestionMark.png"
    }
    this.setImage(this.images.idle);


    this.hp     = 5;
    this.damage = 5;
    this.speed  = 3;
    this.width  = 30;
    this.height = this.width;

    // 30 frames per second means this is 1/3 of a second.
    this.dyingFrames = 10;
    this.dyingWidth = 30;
    this.dyingHeight = 45;

    this.deadWidth = 30;
    this.deadHeight = 45;
    
    this.x      = 250;
    this.y      = 100;
}