var song = "";
var leftX = 0;
var leftY = 0;
var rightX = 0;
var rightY = 0;
function preload(){
    song = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(800, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 800, 600);
}
function modelLoaded(){
    console.log('Posenet model loaded');
}
function gotPoses(){
    if(results.length > 0){
        leftX = results[0].pose.leftWrist.x;
        leftY = results[0].pose.leftWrist.y;
        rightX = results[0].pose.rightWrist.x;
        rightY = results[0].pose.rightWrist.y;
        console.log('left wrist x: ' + leftX);
        console.log('left wrist y: ' + leftY);
        console.log('right wrist x: ' + rightX);
        console.log('right wrist y: ' + rightY);
    }
}