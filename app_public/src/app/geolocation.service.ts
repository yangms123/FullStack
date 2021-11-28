import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }
  public getPosition(cbSuccess: PositionCallback, cbError: PositionErrorCallback | null | undefined, cbNoGeo: { (): void; (): void; }): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(cbSuccess, cbError);
    } else {
      cbNoGeo();
    }
  }
}
