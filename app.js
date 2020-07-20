const btn=document.querySelector(".talk");
const content=document.querySelector(".content");

const greetings=[
    "Hai there!Sweetheart its me Kevin, i am doing well",
    "Goodafternoon,I am watching a movie with Varsha ",
    "Goodevening Mrs.Parippuvada philip,What about having a cup of tea?",
    "Hello Mrs.Aron Yan",
    "Hello Preyemwadha Its me Kevin! I am doing well, What's up? Is Aaron Yan doing well?",
 "Helloo chakkarae, i am fine"
]

const friends=[
    "Friend,best friend,all time crush,chakkara,application tester...Actually i dont know,All i know is that i just love you!"

]




const SpeechRecognition=window.SpeechRecognition|| window.webkitSpeechRecognition;
const recognition=new SpeechRecognition();

recognition.onstart=function(){
    console.log("Voice is activated");
}

recognition.onresult=function(event){

const current=event.resultIndex;
const transcript=event.results[current][0].transcript;
content.textContent=transcript;
readOutLoad(transcript);
}

//add the listener

btn.addEventListener("click",()=>{
    recognition.start();
})


function readOutLoad(message){
    const speech=new SpeechSynthesisUtterance();

    speech.text="I dont know what you said,please repeat!";

    if(message.includes("how are you")){
const finalText=greetings[Math.floor(Math.random()*greetings.length)]
speech.text=finalText;
    }

     
    speech.volume=3;
speech.rate=1;
speech.pitch=2;
window.speechSynthesis.speak(speech);
}