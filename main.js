var nose_X = 10;
var nose_Y = 10;

var leftWrist_X = 0;
var rightWrist_X = 0;

var length_side = 0;



function preload() {

}

function setup() {
    canvas = createCanvas(500, 500);
    background("coral");
    canvas.position(500, 100);

    video = createCapture(VIDEO);
    video.size(500, 500);

    my_poseNet = ml5.poseNet(video, modelLoaded);

    my_poseNet.on('pose', gotPoses);

}

function draw() {
    background("coral");
    stroke("maroon");
    fill("gold");
    //square(x,y,length)
    square(nose_X, nose_Y, length_side);

}

function modelLoaded() {

    console.log("your model is done");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        nose_X = results[0].pose.nose.x;
        nose_Y = results[0].pose.nose.y;
      
        leftWrist_X = results[0].pose.leftWrist.x;
        rightWrist_X = results[0].pose.rightWrist.x;

        length_side = leftWrist_X-rightWrist_X;
     
    }
  
} 

