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

    this.idle_image = "../SharedImages/Fireball.png";
    this.setImage(this.idle_image);

    this.hp     = 5;
    this.damage = 5;
    this.speed  = 15;
    this.width  = 20;
    this.height = 40;
    
    this.x      = 250;
    this.y      = 100;
}