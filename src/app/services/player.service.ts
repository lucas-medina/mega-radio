import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  public player: any;
  public playerClass = 'megaradio__player';

  constructor() { }
}
