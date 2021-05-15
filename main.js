var canvas=new fabric.Canvas('hello');
block_image_width=50;
block_image_height=50;
player_x=10;
player_y=10;
var block_object="";
var player_object="";
function playerUpdate(){
fabric.fromURL("player.png"),function (Img){
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
    top:player_y,
    left:player_x,
});
canvas.add(player_object);
}
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img) {
        block_object=Img;
        block_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(block_image_height);
        block_object.set({
            top:player_y,
            left:player_x,
        });
        canvas.add(block_object);
        });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    if(e.shiftKey==true && keypressed=='80'){
        console.log("shift and p key pressed");
        block_image_height=block_image_height+10;
        block_image_width=block_image_width+10;
        document.getElementById("current_height").innerHTML=block_image_height;
        document.getElementById("current_width").innerHTML=block_image_width;
    }
    if(e.shiftKey==true && keypressed=='77'){
        console.log("shift and m key pressed");
        block_image_height=block_image_height-10;
        block_image_width=block_image_width-10;
        document.getElementById("current_height").innerHTML=block_image_height;
        document.getElementById("current_width").innerHTML=block_image_width;
    }
    if(keypressed=='38'){
        console.log("up key pressed");
        up();
    }
    if(keypressed=='40'){
        console.log("down key pressed");
        down();
    }
    if(keypressed=='37'){
        console.log("left key pressed");
        left();
    }
    if(keypressed=='39'){
        console.log("right key pressed");
        right();
    }
    if(keypressed=='85'){
        new_image('unique.png');
        console.log("u key pressed glowstone drawn");
    }
    if(keypressed=='67'){
        new_image('cloud.jpg');
        console.log("c key pressed cloud drawn");
    }
    if(keypressed=='68'){
        new_image('dark_green.png');
        console.log("d key pressed swamp grass drawn");
    }
    if(keypressed=='71'){
        new_image('ground.png');
        console.log("g key pressed bondocks grass drawn");
    }
    if(keypressed=='76'){
        new_image('light_green.png');
        console.log("l key pressed tree leaf drawn");
    }
    if(keypressed=='84'){
        new_image('trunk.jpg');
        console.log("t key pressed oak log drawn");
    }
    if(keypressed=='87'){
        new_image('wall.jpg');
        console.log("w key pressed oak plank drawn");
    }
    if(keypressed=='89'){
        new_image('yellow_wall.png');
        console.log("y key pressed yellow dyed brick drawn");
    }
    if(keypressed=='82'){
        new_image('roof.jpg');
        console.log("r key pressed netherack drawn");
    }

}
function up(){
    if(player_y>=0){
        player_y=player_y-block_image_height;
        console.log("Block image height="+ block_image_width);
        console.log("Up arrow pressed, X="+player_x+"Y="+player_y);
        canvas.remove(player_object);
        playerUpdate();
    }
}
function right(){
    if(player_x<=860){
        player_x=player_x+block_image_width;
        console.log("Block image height="+ block_image_width);
        console.log("Down arrow pressed, X="+player_x+"Y="+player_y);
        canvas.remove(player_object);
        playerUpdate();
    }
}
function left(){
    if(player_x>=0){
        player_x=player_x-block_image_width;
        console.log("Block image height="+ block_image_width);
        console.log("Left arrow pressed, X="+player_x+"Y="+player_y);
        canvas.remove(player_object);
        playerUpdate();
    }
}
function down(){
    if(player_y<=660){
        player_y=player_y+block_image_height;
        console.log("Block image height="+ block_image_width);
        console.log("Right arrow pressed, X="+player_x+"Y="+player_y);
        canvas.remove(player_object);
        playerUpdate();
    }
}

