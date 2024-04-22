import { Component } from '@angular/core';
import { InformacionExtendidaComponent } from '../informacion-extendida/informacion-extendida.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vista-inicial',
  standalone: true,
  templateUrl: './vista-inicial.component.html',
  styleUrl: './vista-inicial.component.css',
  imports: [InformacionExtendidaComponent,CommonModule]
})
export class VistaInicialComponent {
  mostrarInformacionExtendida = false;
  informacionExtendidaSeleccionada: string | undefined;

  toggleInformacionExtendida(informacion: string) {
    this.informacionExtendidaSeleccionada = informacion;
    this.mostrarInformacionExtendida = !this.mostrarInformacionExtendida;
  }
}