import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VistaInicialComponent } from "./vista-inicial/vista-inicial.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, VistaInicialComponent]
})
export class AppComponent {
  title = 'Abril22';
}
