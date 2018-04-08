var Chocobo = function() {
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
        idle: "../SharedImages/ChocoboIdle.png",
        walkingLeft: "../SharedImages/ChocoboIdle.png",
        walkingRight: "../SharedImages/ChocoboIdle.png",
        dying: "../SharedImages/Explosion.png",
        dead: "../SharedImages/ChocoboDead.png"
    }
    this.setImage(this.images.idle);

    this.hp     = 5;
    this.damage = 1;
    this.speed  = 7;
    this.width  = 30;
    this.height = 45;

    // 60 frames per second and dyingFrames of 20 means this is 1/3 of a second.
    this.dyingFrames = 20;
    this.dyingWidth = 40;
    this.dyingHeight = 40;

    this.deadWidth = 45;
    this.deadHeight = 20;
    
    this.x      = 250;
    this.y      = -this.height;
}