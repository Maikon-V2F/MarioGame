const mario = document.querySelector('.mario')
const plant = document.querySelector('.plant')

const soundjump = document.getElementById('jump')
const soundover = document.getElementById('over')

function reload(){
    window.location.reload();
} 


var width = screen.width;

const jump = () => {
    mario.classList.add('jump')

    soundjump.play()

    setTimeout(() => {
        mario.classList.remove('jump')}
        ,1000)

            var son = document.getElementById("jump")      
            son.play()    

}

if( width >= 900 ) {
function play(){

    document.addEventListener('keydown', jump)
    document.addEventListener('mousedown', jump)
    document.addEventListener('touchstart', jump)

    document.getElementById("play").style.visibility = 'hidden'

    plant.classList.add('moveplant')
    

const loop = setInterval(() => {
    
    const plantPosition = plant.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    console.log(marioPosition)
    
    if (plantPosition <= 220 && marioPosition < 150 && plantPosition > 0 ) {

        document.removeEventListener('keydown', jump)
        document.removeEventListener('mousedown', jump)
        document.removeEventListener('touchstart', jump)

        document.addEventListener('keydown', reload)
        document.addEventListener('mousedown', reload)
        document.addEventListener('touchstart', reload)

        document.getElementById('replay').style.visibility = "visible"

        plant.style.animation = 'none'
        plant.style.left = `${plantPosition}px`
        
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = './assets/death.gif'
        mario.style.width = '350px'

        soundover.play()
    
        clearInterval(loop)
    }

}, 10)

}}

else {
    function play(){
    
        document.addEventListener('keydown', jump)
        document.addEventListener('mousedown', jump)
        document.addEventListener('touchstart', jump)
    
        document.getElementById("play").style.visibility = 'hidden'
    
        plant.classList.add('moveplant')
        
    
    const loop = setInterval(() => {
        
        const plantPosition = plant.offsetLeft
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
        console.log(marioPosition)
        
        if (plantPosition <= 100 && marioPosition < 75 && plantPosition > 0 ) {
    
            document.removeEventListener('keydown', jump)
            document.removeEventListener('mousedown', jump)
            document.removeEventListener('touchstart', jump)
    
            document.addEventListener('keydown', reload)
            document.addEventListener('mousedown', reload)
            document.addEventListener('touchstart', reload)
    
            document.getElementById('replay').style.visibility = "visible"
    
            plant.style.animation = 'none'
            plant.style.left = `${plantPosition}px`
            
            mario.style.animation = 'none'
            mario.style.bottom = `${marioPosition}px`
    
            mario.src = './assets/death.gif'
            mario.style.width = '150px'
    
            soundover.play()
        
            clearInterval(loop)
        }
    
    }, 10)
    
    }}

        document.addEventListener('keydown', play)
        document.addEventListener('mousedown', play)
        document.addEventListener('touchstart', play)
