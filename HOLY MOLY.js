console.log('Howdy🤠')

let newPic = document.getElementById('cool-Pic') 
let playerChoice = '?'


function pic1(){
    console.log("You picked No, PICK Me!! enjoy the picture!")
    newPic.src = 'samurai.png'
    playerChoice = 'You picked No, PICK Me!! enjoy the picture!'
}

function pic2(){
    console.log("You picked Pick me!! enjoy the picture!")
    newPic.src = 'knight.png'
    
}

function pic3(){
    console.log("You picked Lottery!! enjoy the picture!")
    newPic.src = 'viking.png'
    
}
