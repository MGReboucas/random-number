alert('Boas vindo ao jogo do numero aleatorio');

let numeroSecreto = parseInt(Math.random() * 100) + 1;
let numeroRecebidoPeloUsuario;
let tentativas = 1;

while (numeroRecebidoPeloUsuario != numeroSecreto) {
     numeroRecebidoPeloUsuario = prompt('Escolha um numero entre 1 e 100');

     if (numeroRecebidoPeloUsuario == numeroSecreto) {
          break;
     } else {
          if (numeroRecebidoPeloUsuario > numeroSecreto) {
               alert(`O número secreto é menor que ${numeroRecebidoPeloUsuario}`);
          } else {
               alert(`O número secreto é maior que ${numeroRecebidoPeloUsuario}`);
          }
     }
     tentativas++;
}
//operador ternario - depois da interrogação será verdadeiro e caso não seja depois dos dois pontos
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você venceu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);