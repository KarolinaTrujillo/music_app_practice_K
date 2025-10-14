import { Component} from '@angular/core';
@Component({
    selector: 'app-info-song',
    standalone: false,
    templateUrl: './info-song.html',
    styleUrl: './info-song.css'
})
export class InfoSong{
    song: any

    constructor(){
        this.song = {
            name:"Cancion por medio de codigo",
            artist: "Artista por medio de codigo",
            url: "https://picsum.photos/200"
        };
    }
}