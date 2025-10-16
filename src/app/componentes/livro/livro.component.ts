import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

import { Livro } from './livro';
import { BotaoComponent } from '../botao/botao.component';
import { LivroService } from '../../services/livro.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-livro',
  imports: [CommonModule, BotaoComponent, RouterLink],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css',
})
export class LivroComponent {
  livro = input.required<Livro>();
  excluirLivro = output<string>();

  constructor(private livroService: LivroService) {}

  alternarFavorito() {
    const livroAtualizado = {
      ...this.livro(),
      favorito: !this.livro().favorito,
    };

    this.livroService.atualizarFavorito(livroAtualizado).subscribe(() => {
      this.livro().favorito = livroAtualizado.favorito;
    });
  }

  excluir() {
    this.excluirLivro.emit(this.livro().id);
  }
}
