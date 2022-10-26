function setup() {
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas = createCanvas(800,400);
    canvas.position(500,170);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotposes);
}

function draw() {
    background("#00abba");
}

function modelLoaded() {
    console.log("poseNet is initialized and loaded");
}

function gotposes(results, error) {
    if(error) {
        console.error(error);
    }

    if(results.length > 0) {
        console.log(results);

        console.log("rightWrist_x = " + results[0].pose.rightWrist.x + "rightWrist_y = " + results[0].pose.rightWrist.y);
        console.log("leftWrist_x = " + results[0].pose.leftWrist.x + "leftWrist_y = " + results[0].pose.leftWrist.y);
    }
}