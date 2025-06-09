// Função para copiar texto (inalterada)
function copiarTexto(texto, idFeedback) {
    navigator.clipboard.writeText(texto).then(() => {
        const feedbackEl = document.getElementById(idFeedback + '-feedback');
        feedbackEl.classList.add('visivel');
        setTimeout(() => {
            feedbackEl.classList.remove('visivel');
        }, 2000);
    }).catch(err => {
        console.error('Erro ao copiar texto: ', err);
        alert('Não foi possível copiar o texto.');
    });
}

// Função para o efeito de digitação (inalterada)



// ---- NOVO CÓDIGO PARA DEIXAR O LINK DO MENU ATIVO ----
function menuAtivoScroll() {
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('header nav a');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        rootMargin: '-50% 0px -50% 0px' // Ativa o link quando a seção está no meio da tela
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}


// Inicia os efeitos quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    efeitoDigitar('#titulo-digitado');
    menuAtivoScroll(); // Ativa a nova função do menu
});