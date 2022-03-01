function navToggle() {
    let nav = document.querySelector('nav')
    let menu = document.querySelector('.menu i')

    nav.classList.toggle('toggle')
    menu.classList.toggle('fa-times')
}

function videoToggle(){
    let show = document.querySelector(".video-container")
    let video = document.querySelector("video")

    show.classList.toggle('toggleVideo')

    video.currentTime = 0
    video.play()
}