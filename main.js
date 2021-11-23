// Selecting All Tags In Html For JavaScript Word
let time = document.querySelector("#time");
let counter = document.querySelector("#counter");
let start = document.querySelector("#start");

let result = document.querySelector("#result");

let words = document.querySelector("#words");
let characters = document.querySelector("#characters");
let error = document.querySelector("#error");

let typingText = document.querySelector("#typingText");
let userInput = document.querySelector("#userInput");

//Variables For CountDown
let timer = 0;
let interval = null;

//Variables To Store Errors , Words & Characters
let errorCounter = 0;
let wordsCounter = "";
let index = 0;

// Words for Speed Test
let text = `I can swallow a bottle of alcohol and I'll feel like Godzilla
Better hit the deck like the card dealer
My whole squad's in here, walkin' around the party
A cross between a zombie apocalypse and big Bobby
The Brain Heenan which is probably the
Same reason I wrestle with mania
Shady's in this bitch, I'm posse'd up
Consider it to cross me a costly mistake
If they sleepin' on me, the
Hoes better get insomnia, ADHD, hydroxycut
Pass the Courvoisi' (Hey, hey)`;

// disabled '#UserInput'
userInput.disabled = true;

// Start `Typing Speed Test` Game
start.addEventListener("click", ()=>{
    start.innerText = `Start Typing` //Change Text on Click
    userInput.disabled = false; //enabled '#userInput

    // Appending Spans
    text.split("").forEach(characters =>{
        let SpanTxt = document.createElement("span")
        SpanTxt.innerHTML = characters;
        typingText.appendChild(SpanTxt)
    })

    //start Counter
    interval = setInterval(countDown , 1000);
    time.style.display = "grid";
    result.style.display = "none";
    start.style.pointerEvents = "none";
})


//CountDown Function
let countDown = ()=>{
    if(timer < 60){
        timer++;
        counter.innerText = timer;
    }
    else
    {
        userInput.disabled = true;    // disabled '#UserInput'
        time.style.display = "none";
        result.style.display = "flex";  //Display Result 

        wordsCounter = userInput.value;
        characters.innerText = index;    //total Characters
        words.innerText = wordsCounter.split(" ").length;    //total Words
        error.innerText = errorCounter;    //total errors

        //Stop Timer
        clearInterval(interval);
        timer = 0;    //reset Timer
    }
}


//match Characters
userInput.addEventListener("input" , e =>{
    let userValue = userInput.value.split("");
    // console.log(userValue);
    
    let randomText = typingText.querySelectorAll("span");
    // console.log(randomText);
    
    //if user key will be equal to `backspace` so
    if(e.inputType === "deleteContentBackward"){
        index--;
        randomText[index].classList.remove("correct");
        randomText[index].classList.remove("incorrect");
    }
    //if user Key Matched So
    else if(userValue[index] === randomText[index].innerText){
        randomText[index].classList.add("correct");
        index++;
    }
    // if user key not matched so
    else
    {
        {
        randomText[index].classList.add("incorrect");
        index++;
        errorCounter++;
    }
    }
    });