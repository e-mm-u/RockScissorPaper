const buttons = document.querySelectorAll('.btn');

const yourScore = document.getElementById('your-score');
const computerScore = document.getElementById('computer-score');

const you =  document.getElementById('you');
const computer = document.getElementById('computer');

let clicks=0;
const reload = document.getElementById('reload');

let win ;

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
        win = null;
        return 0;
       
    }
    else if(option.name === your_option && option.beats === comp_option){
        console.log('you win');
        yourScore.innerText = your_score + 1;
        win = true;
        return 1;
    }
    else{
        console.log('you lose');
        computerScore.innerText = comp_score + 1;
       
        win = false;
        return 2;
    }

}
// const showAlert =(win) => {
//     if(win === true){
//         alert('Yayyy, You win 💃')
//     }else if(win === false){
//         alert('Oops, You lose 🤦‍♀️')
//     }else{
//         alert('Withdrawn  💁‍♀️')
//     }
// }

reload.addEventListener('click', (e)=>{
    location.reload();
});
