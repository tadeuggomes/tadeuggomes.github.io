document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfólio carregado com sucesso!");
});
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
// Função para copiar e-mail
function copiarTexto(texto) {
  navigator.clipboard.writeText(texto);
  
  const card = event.currentTarget;
  const feedback = card.querySelector('.copiado-feedback');
  
  feedback.style.display = 'block';
  setTimeout(() => {
    feedback.style.display = 'none';
  }, 2000);
}
function copiarTexto(texto, tipo) {
  // Remove caracteres não numéricos se for telefone
  const textoParaCopiar = tipo === 'tel' ? texto.replace(/\D/g, '') : texto;
  
  navigator.clipboard.writeText(textoParaCopiar);
  
  // Mostra feedback visual específico
  const feedback = document.getElementById(`${tipo}-feedback`);
  feedback.style.display = 'block';
  
  // Esconde após 2 segundos
  setTimeout(() => {
    feedback.style.display = 'none';
  }, 2000);
}

<button class="menu-mobile">☰</button>

document.querySelector('.menu-mobile').addEventListener('click', () => {
  document.querySelector('nav ul').classList.toggle('active');
});
