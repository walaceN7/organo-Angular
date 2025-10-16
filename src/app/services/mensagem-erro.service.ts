import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class MensagemErroService {
  constructor(private snackBar: MatSnackBar) {}

  mostrarMensagemErro(mensagem: string): void {
    const config: MatSnackBarConfig = {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    };

    this.snackBar.open(mensagem, 'Fechar', config);
  }
}
