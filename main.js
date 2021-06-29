var canvas = new fabric.Canvas("myCanvas");
player_x = 10;
player_y = 10;
block_image_width = 30;
block_image_height = 30;
var player_object = "";
var block_image_object = "";
function playerupdate() {
fabric.Image.fromURL("player.png", function (Img){
    player_object = Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object);
}); 
}
function block_img(get_Image) {
    fabric.Image.fromURL(get_Image, function (Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    }); 
    }
    window.addEventListener("keydown", mykeydown);
    function mykeydown(e) {
        keypressed = e.keyCode;
        console.log(keypressed);
        if (e.shiftKey==true && keypressed== "80") {
            console.log("p and shift pressed together");
            block_image_width = block_image_width + 10;
            block_image_height= block_image_height + 10;
            document.getElementById("current_width").innerHTML=block_image_width;
            document.getElementById("current_height").innerHTML=block_image_height;
        }
        if (e.shiftKey==true && keypressed== "77") {
            console.log("m and shift pressed together");
            block_image_width = block_image_width - 10;
            block_image_height= block_image_height - 10;
            document.getElementById("current_width").innerHTML=block_image_width;
            document.getElementById("current_height").innerHTML=block_image_height;
        }
        if (keypressed=="38") {
            up();
            console.log("up");
        }
        if (keypressed=="40") {
            down();
            console.log("down");
        }
        if (keypressed=="39") {
            right();
            console.log("right");
        }
        if (keypressed=="37") {
            left();
            console.log("left");
        }
        if (keypressed=="67") {
            block_img("cloud.jpg");
            console.log("cloud");
        }
        if (keypressed=="68") {
            block_img("dark_green.png");
            console.log("dark green");
        }
        if (keypressed=="71") {
            block_img("ground.png");
            console.log("ground");
        }
        if (keypressed=="76") {
            block_img("light_green.png");
            console.log("light green");
        }
        if (keypressed=="82") {
            block_img("roof.jpg");
            console.log("roof");
        }
        if (keypressed=="84") {
            block_img("trunk.jpg");
            console.log("trunk");
        }
        if (keypressed=="85") {
            block_img("unique.png");
            console.log("unique");
        }
        if (keypressed=="87") {
            block_img("wall.jpg");
            console.log("wall");
        }
        if (keypressed=="89") {
            block_img("yellow_wall.png");
            console.log("yellow wall");
        }
    }
    function up() {
        if (player_y >= 0) {
            player_y = player_y - block_image_height;
            console.log("block image height is  " + block_image_height);
            console.log("when up arrow key is pressed, x =  " + player_x + ", y =  " + player_y);
            canvas.remove(player_object);
            playerupdate();
        }
    }
    function down() {
        if (player_y <= 500) {
            player_y = player_y + block_image_height;
            console.log("block image height is  " + block_image_height);
            console.log("when down arrow key is pressed, x =  " + player_x + ", y =  " + player_y);
            canvas.remove(player_object);
            playerupdate();
        }
    }
    function left() {
        if (player_x >= 0) {
            player_x = player_x - block_image_width;
            console.log("block image width is  " + block_image_width);
            console.log("when left arrow key is pressed, x =  " + player_x + ", y =  " + player_y);
            canvas.remove(player_object);
            playerupdate();
        }
    }
    function right() {
        if (player_x <= 890) {
            player_x = player_x + block_image_width;
            console.log("block image width is  " + block_image_width);
            console.log("when right arrow key is pressed, x =  " + player_x + ", y =  " + player_y);
            canvas.remove(player_object);
            playerupdate();
        }
    }