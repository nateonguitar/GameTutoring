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

    this.idle_image = "../SharedImages/RedQuestionMark.png";
    this.setImage(this.idle_image);

    this.hp     = 5;
    this.damage = 5;
    this.speed  = 3;
    this.width  = 30;
    this.height = this.width;
    
    this.x      = 250;
    this.y      = 100;
}