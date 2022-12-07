import { Injectable } from '@angular/core';
import { PlacanjeVM } from 'src/app/features/clanovi/models/placanje.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  public selectedElement: PlacanjeVM;
   
  constructor() { }

  public setSelectedElement(element: PlacanjeVM) {
    this.selectedElement = element;
  }

  public patchSelectedElement(obj: Partial<PlacanjeVM>) {
    this.selectedElement = {
      ...this.selectedElement,
      ...obj
    };
  }
}
