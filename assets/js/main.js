// SWIPER JS
if (document.title !== 'MV | Curriculum') {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1.3,

    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      690: {
        slidesPerView: 2.5,

        spaceBetween: 20,
      },
      1300: {
        slidesPerView: 3.5,
      },
    },
  });
}

// Função para rolagem suave
const rolagemSuave = (alvo, duracao) => {
  // Seleciona o elemento alvo da rolagem
  const elementoAlvo = document.querySelector(alvo);
  // Define a posição do elemento alvo
  const posicaoAlvo = elementoAlvo.offsetTop;
  // Define a posição inicial da janela de visualização
  const posicaoInicial = window.pageYOffset;
  // Calcula a distância a ser percorrida durante a rolagem
  const distancia = posicaoAlvo - posicaoInicial;
  // Define o tempo inicial de animação
  let tempoInicio = null;

  // Função para animação suave (ease)
  const suavizar = (tempo, inicio, alteracao, duracao) => {
    tempo /= duracao / 2;
    if (tempo < 1) return (alteracao / 2) * tempo * tempo + inicio;
    tempo--;
    return (-alteracao / 2) * (tempo * (tempo - 2) - 1) + inicio;
  };

  // Função para animação da rolagem
  const animarRolagem = tempoAtual => {
    if (tempoInicio === null) tempoInicio = tempoAtual;
    const tempoDecorrido = tempoAtual - tempoInicio;
    const percorrido = suavizar(
      tempoDecorrido,
      posicaoInicial,
      distancia,
      duracao
    );
    window.scrollTo(0, percorrido);
    // Continua a animação enquanto o tempo não excede a duração especificada
    if (tempoDecorrido < duracao) requestAnimationFrame(animarRolagem);
  };

  requestAnimationFrame(animarRolagem);
};

// Selecionando os links para adicionar o evento de rolagem suave
const linksRolagemSuave = document.querySelectorAll('nav a[href^="#"]');

// Adicionando o evento de rolagem suave a cada link selecionado
linksRolagemSuave.forEach(link => {
  link.addEventListener('click', evento => {
    evento.preventDefault();
    // Seleciona o alvo da rolagem a partir do atributo href do link clicado
    const alvo = link.getAttribute('href');
    // Define a duração da animação
    const duracaoAnimacao = 1000; // duração da animação em milissegundos
    // Chama a função de rolagem suave
    rolagemSuave(alvo, duracaoAnimacao);
  });
});
