var Seymour = function(x) {
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
        idle: "../SharedImages/Seymour.png",
        walkingLeft: "../SharedImages/Seymour.png",
        walkingRight: "../SharedImages/Seymour.png",
        dying: "../SharedImages/Explosion.png",
        dead: "../SharedImages/ChocoboDead.png"
    }
    this.setImage(this.images.idle);

    this.hp     = 30;
    this.damage = 1;
    this.speed  = 4;
    this.width  = 150;
    this.height = 150;

    this.inPlace = false;
    this.movingLeft = (Math.random() < 0.5);

    // 60 frames per second and dyingFrames of 20 means this is 1/3 of a second.
    this.dyingFrames = 30;
    this.dyingWidth = 150;
    this.dyingHeight = 100;

    this.deadWidth = 150;
    this.deadHeight = 150;
    
    this.x      = x;
    this.y      = -this.height;
}