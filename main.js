status = "";


function preload() {
}

function setup() {
    canvas = createCanvas(450,350);
    canvas.position(430,280);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,0,0,450,350);
}

function start() {
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}

function modelLoaded() {
    console.log("ModelLoaded");
    status = true;
}