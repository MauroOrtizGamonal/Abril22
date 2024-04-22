import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-informacion-extendida',
  standalone: true,
  imports: [],
  templateUrl: './informacion-extendida.component.html',
  styleUrl: './informacion-extendida.component.css'
})
export class InformacionExtendidaComponent {
  @Input() informacionExtendida: string | undefined;
}   