import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";
import { RodapeComponent } from './componentes/rodape/rodape.component';

@Component({
  selector: 'app-root',
  imports: [
    CabecalhoComponent,
    RodapeComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'organo';
}
