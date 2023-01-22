const mario = document.querySelector('.mario')
const plant = document.querySelector('.plant')
const sound = document.querySelector('audio')

var width = screen.width;

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')}
        ,1000)
}

if( width >= 900 ) {
function play(){

    document.getElementById("play").style.visibility = 'hidden'

    plant.classList.add('moveplant')
    

const loop = setInterval(() => {
    
    const plantPosition = plant.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    console.log(marioPosition)
    
    if (plantPosition <= 220 && marioPosition < 150 && plantPosition > 0 ) {
        
        document.getElementById('replay').style.visibility = "visible"
        document.getElementById('gameover').style.visibility = "visible"

        plant.style.animation = 'none'
        plant.style.left = `${plantPosition}px`
        
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = './assets/death.gif'
        mario.style.width = '350px'

        sound.play()

        clearInterval(loop)
    }

}, 10)

}}

else {
    function play(){

        document.getElementById("play").style.visibility = 'hidden'
    
        plant.classList.add('moveplant')
        
    
    const loop = setInterval(() => {
        
        const plantPosition = plant.offsetLeft
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
        console.log(marioPosition)
        
        if (plantPosition <= 100 && marioPosition < 75 && plantPosition > 0 ) {
            
            document.getElementById('replay').style.visibility = "visible"
            document.getElementById('gameover').style.visibility = "visible"
    
            plant.style.animation = 'none'
            plant.style.left = `${plantPosition}px`
            
            mario.style.animation = 'none'
            mario.style.bottom = `${marioPosition}px`
    
            mario.src = './assets/death.gif'
            mario.style.width = '150px'
    
            sound.play()
    
            clearInterval(loop)
        }
    
    }, 10)
    
    }

}

document.addEventListener('keydown', jump)
document.addEventListener('mousedown', jump)
document.addEventListener('touchstart', jump)

function reload(){
    window.location.reload();
} 