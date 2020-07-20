const btn=document.querySelector(".talk");
const content=document.querySelector(".content");


const SpeechRecognition=window.SpeechRecognition|| window.webkitSpeechRecognition;
const recognition=new SpeechRecognition();

recognition.onstart=function(){
    console.log("Voice is activated");
}

recognition.onresult=function(event){

const current=event.resultIndex;
const transcript=event.results[current][0].transcript;
content.textContent=transcript;

}

//add the listener

btn.addEventListener("click",()=>{
    recognition.start();
})
