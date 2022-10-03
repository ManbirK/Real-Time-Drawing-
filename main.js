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

}

function modelLoaded() {

    console.log("your model is done");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
  
} 

