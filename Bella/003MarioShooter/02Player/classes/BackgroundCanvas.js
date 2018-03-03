var BackgroundCanvas = function(background_canvas, screen_size) {
    this.canvas = background_canvas;
    this.grass_color = "#3c7c41";
    this.background_color = "#9FC26F";

    this.context = this.canvas.getContext("2d");

    // is ran on start
    this.canvas.width = 4 * screen_size;
    this.canvas.height = 6 * screen_size;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    
    this.canvas.style.backgroundColor = this.background_color;
}