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
}
function modelLoaded(){
    console.log("Posenet is initialised!");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}