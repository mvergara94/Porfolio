const botaoTopo = document.querySelector('#back-to-top');

window.addEventListener('scroll', () => {
  const posicao = window.scrollY + window.innerHeight;
  const metadePagina = document.body.offsetHeight / 2;

  if (posicao > metadePagina) {
    botaoTopo.style.display = 'block';
  } else {
    botaoTopo.style.display = 'none';
  }
});

function subirTopo() {
  botaoTopo.addEventListener('click', () => {
    console.log('clicou');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}
