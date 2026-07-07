// Seleção dos elementos do DOM
const botoes = document.querySelectorAll(".botao");
const abas = document.querySelectorAll(".aba-conteudo");

// Lógica de alternância das abas
botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    botoes.forEach(b => b.classList.remove("ativo"));
    abas.forEach(a => a.classList.remove("ativo"));

    botao.classList.add("ativo");
    abas[indice].classList.add("ativo");
  });
});

// Definição das datas finais de cada objetivo (Ano de 2026)
// ATENÇÃO: Verifique se a ordem abaixo bate com a ordem das abas no seu HTML!
const tempos = [
  new Date("2026-07-15T00:00:00"), // Índice 0: Festa Julina (Ajustado para Julho)
  new Date("2026-08-05T00:00:00"), // Índice 1: faz carteira de motorista D
  new Date("2026-11-01T13:00:00"), // Índice 2: 
  new Date("2026-12-09T00:00:00")  // Índice 3: Atualizar Currículo
];

// Função que calcula o tempo restante e atualiza o HTML
function atualizarContador(indice, dataFinal) {
  const agora = new Date();
  const diferenca = dataFinal - agora;

  // Se o tempo já acabou, zera o cronômetro e encerra a função
  if (diferenca <= 0) {
    document.getElementById(`dias${indice}`).textContent = 0;
    document.getElementById(`horas${indice}`).textContent = 0;
    document.getElementById(`minutos${indice}`).textContent = 0;
    document.getElementById(`segundos${indice}`).textContent = 0;
    return;
  }

  // Cálculos matemáticos para converter milissegundos em dias, horas, minutos e segundos
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  // Inserção dos valores calculados nas respectivas abas do HTML
  document.getElementById(`dias${indice}`).textContent = dias;
  document.getElementById(`horas${indice}`).textContent = horas;
  document.getElementById(`minutos${indice}`).textContent = minutos;
  document.getElementById(`segundos${indice}`).textContent = segundos;
}

// Função que percorre todos os tempos cadastrados
function atualizarCronometros() {
  tempos.forEach((tempo, indice) => {
    atualizarContador(indice, tempo);
  });
}

// Executa a função imediatamente ao carregar a página e depois a cada 1 segundo
atualizarCronometros();
setInterval(atualizarCronometros, 1000);