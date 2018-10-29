import { Injectable } from '@angular/core';
import { HttpService } from '../@core/services/http.service';
import YouTubePlayer from 'youtube-player';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  public ytScript;
  public ytPlayer;
  public yt = YouTubePlayer;

  constructor(
    private _http: HttpService
  ) { }

  getBaseYouTubeVideoList() {

  }

  public ytStartApiIntegration() {
    this.ytScript = document.createElement('script');
    this.ytScript.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(this.ytScript);
  }

  public ytReadyApiIntegration() {
    (<any>window).onYouTubeIframeAPIReady = () => {
      this.ytPlayer = new (<any>window).YT.Player()
    }
  }

  ytGetVideo(_code: string) {
    this._http.post(_code, );
  }

}
