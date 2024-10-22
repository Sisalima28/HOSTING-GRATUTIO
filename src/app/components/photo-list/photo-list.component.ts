import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../service/photo.service';
import { Photo } from '../../photo.model';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrl: './photo-list.component.css'
})
export class PhotoListComponent {
  photos: Photo[] = [];
  selectedPhoto: Photo | null = null;

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photos = this.photoService.getPhotos();
  }
  openModal(photo: Photo): void {
    this.selectedPhoto = photo;  // Muestra la foto seleccionada en el modal
  }

  closeModal(): void {
    this.selectedPhoto = null;   // Cierra el modal
  }
}
