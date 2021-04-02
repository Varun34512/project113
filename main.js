function setup() {
    canvas=createCanvas(680,480);
    canvas.position(110,250);
    video=createCapture(VIDEO) ;
    video.hide() ;
}

function draw() {
    image(video,50,50,580,380) ;
    fill('violet')
    triangle(25,20,5,50,45,50) ;
    fill('violet')
    triangle(25,460,5,430,45,430) ;
    fill('violet')
    triangle(655,20,675,50,635,50) ;
    fill('violet')
    triangle(655,460,675,430,635,430) ;
    fill('orange')
    ellipse(340,25,500,30)
    fill('orange')
    ellipse(340,455,500,30)
    fill('cyan')
    circle(25,90,35)
    fill('cyan')
    circle(25,390,35)
    fill('cyan')
    circle(655,90,35)
    fill('cyan')
    circle(655,390,35)
    fill('lightgreen')
    rect(5,130,40,220)
    fill('lightgreen')
    rect(635,130,40,220)
}