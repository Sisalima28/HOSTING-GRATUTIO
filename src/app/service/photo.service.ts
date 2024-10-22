import { Injectable } from '@angular/core';
import { Photo } from '../photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private photos: Photo[] = [
    { id: 1, title: 'Montañas', url: 'https://concepto.de/wp-content/uploads/2018/08/monta%C3%B1as-e1533762816593.jpg', description: 'Hermosas montañas al amanecer.' },
    { id: 2, title: 'Bosque', url: 'https://ecosistemas.ovacen.com/wp-content/uploads/2018/01/bosque.jpg.webp', description: 'Un denso bosque lleno de vida.' },
    { id: 3, title: 'Lago', url: 'https://www.iagua.es/sites/default/files/styles/thumbnail-830x455/public/lago_portada.jpg?itok=ZIzNjtIQ', description: 'Un tranquilo lago al atardecer.' },
    { id: 4, title: 'Desierto', url: 'https://www.ambientum.com/wp-content/uploads/2024/06/desiertos-scaled.jpg', description: 'Dunas de arena bajo el sol del desierto.' },
    { id: 5, title: 'Mar', url: 'https://concepto.de/wp-content/uploads/2019/12/mar-e1575940459660.jpg', description: 'La furia del océano azul.' }
  ];


  constructor() { }

  getPhotos(): Photo[] {
    return this.photos;
  }

  getPhotoById(id: number): Photo | undefined {
    return this.photos.find(photo => photo.id === id);
  }

}
