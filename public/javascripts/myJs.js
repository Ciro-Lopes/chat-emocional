//Player de Musica
var volControl = document.getElementById("volControl");
var song = new Audio();
song.volume = 0.5;

var musicas = ["", "./sounds/rock.mp3", "./sounds/celta.mp3", "/sounds/classica.mp3", "/sounds/chuva.mp3", "/sounds/riacho.mp3"];

//alterar o dropdown
function trocarDrop(id) {
    var dropdown = document.getElementById("dropdownMenuLink");
    for (var i = 0; i < 6; i++) {
        if (id == i) {
            document.getElementById(id).className = "dropdown-item active";
            dropdown.innerHTML = document.getElementById(id).value;
            dropdown.value = id;
            playMusic(id);
        }
        else {
            document.getElementById(i).className = "dropdown-item";
        }
    }
}

//Tocar a musica
function playMusic(id) {
    for (var i = 0; i < 6; i++) {
        if (id == i) {
            if (id == 0)
                document.getElementById("playPouse").className = "fas fa-play";
            else {
                document.getElementById("playPouse").className = "fas fa-pause";
            }
            song.src = musicas[i];
            song.play();
        }
    }
}

//Pausar e continuar musica
function pausePLay() {
    var playPause = document.getElementById("playPouse");
    if (song.paused) {
        song.play();
        playPause.className = "fas fa-pause";
    }
    else {
        song.pause();
        playPause.className = "fas fa-play";
    }
}

//Mudar volume
function changeVolume(valor) {
    song.volume = valor / 100;
}

//Botao toggle do responsivo
function toggleButton() {
    var infoChat = document.getElementById("infoChat");
    var chat = document.getElementById("chatToggle");

    if ($(infoChat).css('display') == 'none') {
        infoChat.setAttribute('style', 'display:flex!important; -webkit-animation: slide-left .2s ease-out; -moz-animation: slide-left .2s ease-out;');
        chat.setAttribute('style', 'display:none!important; -webkit-animation: slide-right .2s ease-out; -moz-animation: slide-right .2s ease-out;');
    }
    else {
        infoChat.setAttribute('style', '-webkit-animation: slide-right .2s ease-out; -moz-animation: slide-right .2s ease-out;');
        chat.setAttribute('style', 'display:flex!important; -webkit-animation: slide-right .2s ease-out; -moz-animation: slide-right .2s ease-out;');
    }
}