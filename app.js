alert('Boas vindo ao jogo do numero aleatorio');

let numeroSecreto = 5;
let numeroRecebidoPeloUsuario;
let tentativas = 0;

while (numeroRecebidoPeloUsuario != numeroSecreto) {
     numeroRecebidoPeloUsuario = prompt('Escolha um numero entre 1 e 10');

     if (numeroRecebidoPeloUsuario == numeroSecreto) {
          alert(`Isso ai, você descobriu o numero secreto ${numeroSecreto}, com ${tentativas} tentativas`);
     } else {
          if (numeroRecebidoPeloUsuario > numeroSecreto) {
               alert(`O número secreto é menor que ${numeroRecebidoPeloUsuario}`);
          } else {
               alert(`O número secreto é maior que ${numeroRecebidoPeloUsuario}`);
          }
     }
     tentativas++;
}
