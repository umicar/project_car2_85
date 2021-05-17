
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width=120;
car1_heigth=70;
car1_x=10;
car1_y=10;

car2_width=120;
car2_heigth=70;
car2_x=10;
car2_y=100;
background_image="racing.jpg";
car1_image="car1.png";
car2_image="car2.png";
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    car1_imgTag=new Image();
    car1_imgTag.onload=uploadcar1;
    car1_imgTag.src=car1_image;

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadcar2;
    car2_imgTag.src=car2_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_imgTag , car1_x , car1_y , car1_width , car1_heigth);
}
function uploadcar2(){
    ctx.drawImage(car2_imgTag , car2_x , car2_y , car2_width , car2_heigth);
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38'){
        car1_up();
        console.log("up")
    }
    if(keyPressed == '40'){
        car1_down();
        console.log("down")
    }
    if(keyPressed == '37'){
        car1_left();
        console.log("left")
    } 
    if(keyPressed == '39'){
        car1_right();
        console.log("right")
    } 
    if(keyPressed == '65'){
        car2_up();
        console.log("a")
    }
    if(keyPressed == '66'){
        car2_down();
        console.log("b")
    }
    if(keyPressed == '67'){
        car2_left();
        console.log("c")
    }
    if(keyPressed == '68'){
        car2_right();
        console.log("d")
    }
}

function car1_up(){
    if(car1_y>=0)
    {
       car1_y=car1_y-10;
        console.log("when up arrow is pressed, x=" + car1_x + "y=" + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}


function car1_down(){
    if(car1_y<=500)
    {
       car1_y=car1_y+10;
        console.log("when down arrow is pressed, x=" + car1_x + "y=" + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left(){
    if(car1_x>=0)
    {
       car1_x=car1_x-10;
        console.log("when left arrow is pressed, x=" + car1_x + "y=" + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}


function car1_right(){
    if(car1_x<=650)
    {
       car1_x=car1_x+10;
        console.log("when right arrow is pressed, x=" + car1_x + "y=" + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
    if(car1_x > 650)
{
    console.log("car1_won")
    document.getElementById('game_status').innerHTML="Car1 Won!!";
}
}

function car2_right(){
    if(car2_x<=650)
    {
       car2_x=car2_x+10;
        console.log("when right arrow is pressed, x=" + car2_x + "y=" + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }       
    if(car2_x > 650)
{
    console.log("car2_won")
    document.getElementById('game_status').innerHTML="Car2 Won!!";
}
}


function car2_down(){
    if(car2_y<=500)
    {
       car2_y=car2_y+10;
        console.log("when down arrow is pressed, x=" + car2_x + "y=" + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_up(){
    if(car2_y>=0)
    {
       car2_y=car2_y-10;
        console.log("when up arrow is pressed, x=" + car2_x + "y=" + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_left(){
    if(car2_x>=0)
    {
       car2_x=car2_x-10;
        console.log("when left arrow is pressed, x=" + car2_x + "y=" + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
    
