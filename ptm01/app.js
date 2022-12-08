
var recorderData = [];
var recorderData2 = [];
var isRecordOn = false;

function playSound(button_id){
    
    var audio = new Audio(button_id + ".mp3");

    recorderData.push(button_id);
    audio.play();
}

function recorder(){    
    
    if(!isRecordOn){
        $('#record').css('color', 'red');
        isRecordOn = true;
        recorderData = [];

    }else{
        $('#record').css('color', 'black');
        isRecordOn = false;
        recorderData2 = recorderData;
    }
    

}

function play(index) {
    var audio = new Audio(recorderData2[index] + ".mp3");

    console.log(recorderData2[index] + " playing.."); 

    audio.play();

    setTimeout(function(){
        recorderData2[index+1] && play(index+1);
    }, 6000)
}

function checkSound() {

    recorderData2.length>0 && play(0);
}

function deleteRecording(){

    recorderData2 = [];
}