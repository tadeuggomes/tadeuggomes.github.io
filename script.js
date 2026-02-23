
function iniciarEfeitoDigitacao() {
    const elementoTitulo = document.getElementById("titulo-digitado");
    if (!elementoTitulo) return;
    
    const textoParaDigitar = 'Olá, eu sou <br> <span class="destaque-nome">Jorge Tadeu!</span>';
    let index = 0;
    let textoAtual = '';
    const velocidade = 80;

    function digitar() {
        if (index < textoParaDigitar.length) {
            textoAtual += textoParaDigitar.charAt(index);
            elementoTitulo.innerHTML = textoAtual;
            index++;
            
            if (textoParaDigitar.charAt(index) === '<') {
                while (textoParaDigitar.charAt(index) !== '>' && index < textoParaDigitar.length) {
                    textoAtual += textoParaDigitar.charAt(index);
                    index++;
                }
                textoAtual += '>';
                index++;
            }
            setTimeout(digitar, velocidade);
        }
    }
    digitar();
}

function copiarTexto(texto, idFeedback) {
    navigator.clipboard.writeText(texto).then(() => {
        const feedbackEl = document.getElementById(idFeedback + '-feedback');
        if (feedbackEl) {
            feedbackEl.classList.add('visivel');
            setTimeout(() => {
                feedbackEl.classList.remove('visivel');
            }, 2000);
        }
    }).catch(err => {
        console.error('Erro ao copiar texto: ', err);
        alert('Não foi possível copiar o texto automaticamente.');
    });
}

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
        rootMargin: '-50% 0px -50% 0px'
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

function ativarMenuMobile() {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll("#nav-menu ul li a");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("ativo");
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("ativo");
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    iniciarEfeitoDigitacao();
    menuAtivoScroll();
    ativarMenuMobile();
});