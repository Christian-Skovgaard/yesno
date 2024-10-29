const noButton = document.querySelector('#no')

noButton.addEventListener('mouseover', moveButton)

function moveButton () {
    noButton.style.position = 'absolute'
    noButton.style.bottom = `${getRanNum()}%`
    noButton.style.right = `${getRanNum()}%`
}

const getRanNum = () => Math.floor(Math.random()*100)

console.log(getRanNum())