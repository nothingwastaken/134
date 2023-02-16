img = "";
var status = ""
objects = [];
var alert = "alert.mp3"


function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: detecting objects";
}

function modelLoaded(){
    console.log("model is loaded");
    status = true;
    objectDetector.detect(video, gotResult);
}

function draw(){
    image(video, 0, 0, 380, 380);

    if (status != ""){
        r = random(225);
        g = random(225);
        b = random(225);
        objectDetector.detect(video, gotResult);

        if (results){
            document.getElementById("status").innerHTML = "yes baby";
            alert.stop();

        }

        else{
            document.getElementById("status").innerHTML = "no baby";
            alert.play();
        }
    }
}

function gotResult(error, results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}