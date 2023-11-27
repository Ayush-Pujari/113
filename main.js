function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
           
}
function draw(){
    image(video,170,140,300,200);
    fill("green");
    rect(70,40,500,20);
    rect(70,440,500,20);
    rect(70,40,20,400);
    rect(570,40,20,420);
    fill("red");
    circle(70,40,90);
    circle(570,40,90);
    circle(570,440,90);
    circle(70,440,90);

    

    
}
 
function take_snapshot(){
    save('tint.png');
}