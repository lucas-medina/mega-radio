import { Injectable } from '@angular/core';
import { HttpService } from '../@core/services/http.service';
import { PlayerService } from './player.service';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  public ytScript: any;
  public yt: any;

  constructor(
    private _http: HttpService,
    private _player: PlayerService
  ) { }

  getBaseYouTubeVideoList() {

  }

  public ytStartApiIntegration() {
    this.ytScript = document.createElement('script');
    this.ytScript.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(this.ytScript);
  }

  public ytAwaitReadyApiIntegration() {
    (<any>window).onYouTubeIframeAPIReady = () => {
      this.yt = (<any>window).YT;
      this._player.player = this.yt.Player(this._player.playerClass, {
        videoId: 'NUbdmaDr7WE',
        events: {
          'onError': (err) => console.log(err),
          'onReady': (e) => {
            console.log('ready here');
          }
        }
      });
    }
  }

  ytGetVideo(_code: string) {
    // this._http.post(_code, );
  }

}
