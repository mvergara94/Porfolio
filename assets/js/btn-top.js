const botaoTopo = document.querySelector('#back-to-top');

function atualizarBotaoTopo() {
  const posicao = window.scrollY + window.innerHeight;
  const metadePagina = document.body.offsetHeight / 2;

  if (window.innerWidth > 820) {
    if (posicao > metadePagina) {
      botaoTopo.style.display = 'block';
    } else {
      botaoTopo.style.display = 'none';
    }
  } else {
    botaoTopo.style.display = 'none';
  }
}

window.addEventListener('scroll', atualizarBotaoTopo);
window.addEventListener('resize', atualizarBotaoTopo);

function subirTopo() {
  botaoTopo.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

subirTopo();
