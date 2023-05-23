 Peter_pan_song="";
 harry_potter_theme_song="";

leftWrist_X = 0;
leftWrist_Y = 0;
rightWrist_x = 0;
rightWrist_y = 0;
scoreleftWrist = 0;
song_Peter_pan = "";


 function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide;

    ml5.poseNet(modelLoaded);
    sposeNet.on('pose',gotPoses)
 }

 function preload(){
    Peter_pan_song = loadsound("music1.mp3.mp3");
    harry_potter_theme_song = loadsound("music1.mp3.mp3");
 }
 function draw(){
    image(video,0,0,600,530);

   Fill("#FFFF00");
   stroke("#FFFACD")


   song_Peter_pan = Peter_pan_song.isplaying();
console.log(song_Peter_pan);

    if(scoreleftWrist > 0.2){
        circle(LeftWrist_x,leftWrist_y,20);
        harry_potter_theme_song.stop();
        if(Peter_pan_song = flase){
            Peter_pan_song.play();
        }
        else{
            document.getElementById("song_id").innerHTML = "Song Name: Peter Pan Song";
        }
    }
 }

 

function modelLoaded(){
    console.log("PoseNet is initialized")
}

function gotPoses(results){
    if(results.lenght > 0){
        console.log(results);

        //scoreleftWrist = results[0].pose.keypoints;
        console.log("scoreleftWrist")

        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = "+LeftWrist_x+" leftWrist_y = "+leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = "+rightWrist_x+" rightWrist_y = "+rightWrist_y);
    }
};