import { Component, input } from '@angular/core';

@Component({
  selector: 'app-titulo',
  imports: [],
  templateUrl: './titulo.component.html',
  styleUrl: './titulo.component.css'
})
export class TituloComponent {
  texto = input<string>();
}
