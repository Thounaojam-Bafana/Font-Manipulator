 var leftWristX,rightWristX,difference;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(100,150);
    canvas = createCanvas(550,500);
    canvas.position(750,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background("#ccccff");
    textSize(difference);
    fill("black");
    text("Bafana", 100,200);
}

function modelLoaded(){
    console.log("Posenet is initialised!");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        console.log("Left Wrist X = " + leftWristX);
        rightWristX = results[0].pose.rightWrist.x;
        console.log("Right Wrist X = "+ rightWristX);
        difference = floor(leftWristX - rightWristX);
        console.log("difference = "+ difference);
    }
}