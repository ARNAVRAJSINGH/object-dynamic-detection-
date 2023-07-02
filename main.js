status="";
array1=[];
function preload(){
}
function setup(){
canvas= createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.size(400,400);
video.hide();
objectDetection= ml5.objectDetector('cocossd',modelLoaded);
document.getElementById('status').innerHTML="Objects are being detected";
}
  
function draw(){
image(video,0,0,400,400);
if(status!=""){
  r=random(255);
  g=random(255);
  b=random(255);
  
  objectDetection.detect(video,gotResult);
 for(i=0; i<array1.length; i++)
 
 {
  document.getElementById("status").innerHTML="status: object Detected" ;
  document.getElementById("no_ofobjects").innerHTML="No. of objects detected are:"+ array1.length;
  fill(r,g,b);
  hi=floor(array1[i].confidence*100);
  text(array1[i].label+ " "+ hi + '%',array1[i].x-35, array1[i].y+35);
noFill();
stroke(r,g,b);

rect(array1[i].x,array1[i].y,array1[i].width,array1[i].height);
}

}


}

function modelLoaded(){
  console.log('Model is loaded');
  status=true;
  
}
function gotResult(error,results){
  if(error){
    console.log(error);
      
  }
  console.log(results);
  array1=results;
}