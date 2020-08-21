import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { images } from 'src/app/pages/home/data/image.data';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor() {}
  fetchImages(): Observable<any> {
    return of(images);
  }
}
