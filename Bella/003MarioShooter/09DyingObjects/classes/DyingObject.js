var DyingObject = function(dyingObject) {
    this.setImage = function(image_src) {
        this.image = new Image(this.width, this.height);
        if (image_src == '' || image_src == null) {
            this.image.src = "../SharedImages/RedQuestionMark.png"
        }
        else {
            this.image.src = image_src;
        }
    }

    this.handleImageSwapping = function() {
        if (this.dyingFramesCount < this.dyingFrames) {
            this.dyingFramesCount++;
            if (this.dyingFramesCount >= this.dyingFrames) {
                this.width = this.deadWidth;
                this.height = this.deadHeight;
                this.setImage(this.images.dead);
            }
        }
    }
    
    this.images = {
        dying: dyingObject.images.dying,
        dead: dyingObject.images.dead
    }

    this.setImage(this.images.dying);
    
    this.width = dyingObject.dyingWidth;
    this.height = dyingObject.dyingHeight;
    this.x      = dyingObject.x;
    this.y      = dyingObject.y;
    
    // 30 frames per second means this is 1/3 of a second.
    this.dyingFrames = dyingObject.dyingFrames;
    this.dyingFramesCount = 0;

    // for later when we swap images when this thing dies
    this.deadWidth = dyingObject.deadWidth;
    this.deadHeight = dyingObject.deadHeight;
    
}