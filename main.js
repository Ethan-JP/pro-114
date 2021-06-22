var nosex=""
var nosey=""
function preload(){
nose=loadImage("https://i.postimg.cc/Vk620kSH/download-2.png")
}
function setup(){
    canvas=createCanvas(400,400)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(400,400)
    video.hide()
    poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on("pose",gotPoses)
}
function draw(){
    image(video,0,0,400,400)
    image(nose,nosex,nosey,35,35)
}
function modelLoaded() {
    console.log("Model has been loaded")
}

function gotPoses(results) {
   
    if (results.length>0) {
        console.log(results)
        nosex=results[0].pose.nose.x
        nosey=results[0].pose.nose.y
    }
}