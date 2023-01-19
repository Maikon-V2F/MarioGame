const mario = document.querySelector('.mario')
const plant = document.querySelector('.plant')
const sound = document.querySelector('audio')

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')}
        ,1000)
}

const loop = setInterval(() => {
    
    const plantPosition = plant.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    console.log(marioPosition)
    
    if (plantPosition <= 300 && marioPosition < 300 && plantPosition > 0 ) {
        
        plant.style.animation = 'none'
        plant.style.left = `${plantPosition}px`
        
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = './assets/death.gif'
        mario.style.width = '50vh'

        sound.play()

        clearInterval(loop)
    }

}, 10)

document.addEventListener('keydown', jump)
document.addEventListener('mousedown', jump)
document.addEventListener('touchstart', jump)