const { reset } = require("nodemon")

let now_playing = document.querySelector('.now-playing')
let track_art = document.querySelector('.track-art')
let track_name = document.querySelector('.track_name')
let track_artist = document.querySelector('.track-artist')

let playpause_btn = document.querySelector('.playpause-track')
let next_btn = document.querySelector('.next-track')
let prev_btn = document.querySelector('.prev_track')

let seek_slider = document.querySelector('.seek_slider')
let volume_slider = document.querySelector('.volume-slider')
let curr_time = document.querySelector('.current-time')
let total_duration = document.querySelector('.total-duration')
let wave = document.querySelector('.wave')
let randomIcon = document.querySelector('.fa-random')

let track_index = 0
let isPlaying = false
let isRandom = false
let updateTimer

const music_list = [
    {
        img: 'media/girl2.jpg',
        name: 'Poly-coffee',
        artist: 'Plums',
        music: 'media/Poly-coffee.mp4'
    }
]

loadTrack(track_index)

function loadTrack(trackIndex){
    clearInterval(updaetTimer)
    reset()

    curr_track.src=music_list[track_index].music
    curr_track.oad()

    track_art.style.backgroundImage = "url(" + music_list[track_index].image + ")"
    track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
    
}