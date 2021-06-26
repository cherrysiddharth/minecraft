var mini_canvas=new fabric.Canvas('MINECRAFT_canvas');
var block_img_width=30;
var block_img_height=30;
var playerx=0;
var playery=0;
var playerobject="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
   playerobject=Img;
   playerobject.scaleToWidth(150);
   playerobject.scaleToWidth(140);
   playerobject.set({
       top:playery,
       left:playerx,
   }) ;
   canvas.add(playerobject);
   
    })
}