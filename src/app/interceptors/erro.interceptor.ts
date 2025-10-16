import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { MensagemErroService } from '../services/mensagem-erro.service';
import { inject } from '@angular/core';

export const erroInterceptor: HttpInterceptorFn = (req, next) => {
  const mensagemErroService: MensagemErroService = inject(MensagemErroService);

  return next(req).pipe(
    catchError((erro: HttpErrorResponse) => {
      const mensagemErro = obterMensagemDeErro(erro.status);
      mensagemErroService.mostrarMensagemErro(mensagemErro);
      return throwError(() => erro);
    })
  );
};

function obterMensagemDeErro(status: number): string {
  const mensagemDeErro: Record<number, string> = {
    0: 'Erro de conexão. Verifique sua internet.',
    404: 'O recurso solicitado não foi encontrado.',
    500: 'Erro interno do servidor.',
  };

  return mensagemDeErro[status] || 'Ocorreu um erro inesperado.';
}
