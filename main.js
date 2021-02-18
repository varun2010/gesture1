prediction1=""
prediction2=""

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach(camera);

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:', ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-xvbcZn1Z/model.json',modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}

function speak(){
    var synth=window.speechSynthesis;
    speak1="The first prediction is "+prediction1;
    speak2="And the second prediction is "+prediction2;
    var utterThis=new SpeechSynthesisUtterance(speak1+speak2);
    synth.speak(utterThis);
}