const buttons = document.querySelectorAll('.btn'); // rock scissor paper

const yourScore = document.getElementById('your-score'); // player's score
const computerScore = document.getElementById('computer-score'); // computer's score

const you =  document.getElementById('you'); 
const computer = document.getElementById('computer');

const message = document.getElementById('modal-inner');

let clicks=0;
const reload = document.getElementById('reload');


const options = [
    {
        name : 'rock',
        emoji : '👊',
        beats : 'scissor'
    },
    {
        name : 'scissor',
        emoji : '✌️',
        beats : 'paper'
    },
    {
        name : 'paper',
        emoji : '🖐',
        beats : 'rock'
    }
]



// add click event to buttons to get user input

buttons.forEach(button => {
    button.addEventListener('click', (e) =>{

        clicks++; 
        if(clicks>5){
            reload.style.removeProperty('display');
            console.log(reload);
        }

        const your_option = e.target.id;
        const option = options.find(x => x.name === your_option);

        const comp_option = generateBtn();

        const w = winner(option, your_option, comp_option);
        
        addChild('you', your_option, w);
        addChild('computer', comp_option, w);

        showMessage(w);

    });
   
})

function generateBtn(){
    const comp_option = buttons[Math.floor(Math.random() * buttons.length)].id;
    // console.log(comp_option);
    return comp_option;
}

function addChild(who, btn, w){
    const emo = options.find(x => x.name === btn);
    const child = document.createElement('h2');

    child.innerText = emo.emoji;

    if(who === 'you'){
        you.appendChild(child);
        if(w ===1){
            child.style.border = '3px dashed green';
            child.style.fontSize = '1.5rem';
        }
    }else{
        computer.appendChild(child);
        if(w === 2){
            child.style.border = '3px dashed red';
            child.style.fontSize = '1.5rem';
        }
    }

}

function winner(option, your_option, comp_option){

    const your_score = parseInt(yourScore.innerText);
    const comp_score = parseInt(computerScore.innerText);

    if(your_option === comp_option){
        console.log('withdrawn');
        return 0;
       
    }
    else if(option.name === your_option && option.beats === comp_option){
        console.log('you win');
        yourScore.innerText = your_score + 1;
        return 1;
    }
    else{
        console.log('you lose');
        computerScore.innerText = comp_score + 1;
        return 2;
    }

}
const showMessage = (w) => {

    if(w === 0){
        message.innerHTML = `
        <h1 class="txt"> It's withdrawn </h1>
        <p style="font-size : 48px"> 💁‍♀️</p>
        `
    }
    else if(w === 1){
        message.innerHTML = `
        <h1 class="txt"> Yayyy, You win!</h1>
        <p style="font-size : 48px"> 💃 </p>
        `
    }
    else{
        message.innerHTML = `
        <h1 class="txt"> Oops, You lose!</h1>
        <p style="font-size : 48px"> 🤦‍♀️ </p>
        `
    }
}

reload.addEventListener('click', (e)=>{
    location.reload();
});
