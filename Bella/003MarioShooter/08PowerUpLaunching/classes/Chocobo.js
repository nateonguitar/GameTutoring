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
    
    this.idle_image = "../SharedImages/ChocoboIdle.png";
    this.setImage(this.idle_image);

    this.hp     = 5;
    this.damage = 1;
    this.speed  = 7;
    this.width  = 30;
    this.height = 45;
    
    this.x      = 250;
    this.y      = -this.height;
}