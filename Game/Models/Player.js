function Player(x, y, width, height){
    this.x          = x;
    this.y          = y;
    this.width      = width;
    this.height     = height;

    this.outline = {
        color: "black",
        width: 1
    };

    // head  1/6
    // shirt 2/6
    // pants 2/6
    // shoes 1/6
    this.head = {
        x:      this.x + this.width / 5,
        y:      this.y,
        width:  this.width * 3/5,
        height: this.height / 6,
        color:  "pink"
    };

    this.shirt = {
        x:      this.x,
        y:      this.y + this.head.height,
        width:  this.width,
        height: this.height* 2/6,
        color:  "green"
    };

    this.pants = {
        x:      this.x + this.width / 5,
        y:      this.y + this.head.height + this.shirt.height,
        width:  this.width * 3/5,
        height: this.height* 2/6,
        color:  "blue"
    };

    this.shoes = {
        x:      this.x + this.width* 1/5,
        y:      this.y + this.head.height + this.shirt.height + this.pants.height,
        width:  this.width * 4/5,
        height: this.height* 1/6,
        color:  "grey"
    };
    
    this.gun = {
        width: this.width/5,
        height: this.height/5
    };
};