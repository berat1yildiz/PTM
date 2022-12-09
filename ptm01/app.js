var audioData = [];
var recordedData = [];
var isRecordOn = false;

function playSound(button_id){
    var audio = new Audio(button_id + ".mp3");

    audioData.push(button_id);

    audio.play();
}

function recorder(){    
    if(!isRecordOn){
        $('#record').css('color', 'red');

        isRecordOn = true;
        audioData = [];
    }else{
        $('#record').css('color', 'black');

        isRecordOn = false;
        recordedData = audioData;
    }
}

function play(index) {
    var audio = new Audio(recordedData[index] + ".mp3");

    console.log(recordedData[index] + " playing.."); 

    audio.play();

    setTimeout(function(){
        recordedData[index+1] && play(index+1);
    }, 6000)
}

function checkSound() {
    recordedData.length>0 && play(0);
}

function deleteRecording(){
    recordedData = [];
}