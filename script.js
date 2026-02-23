function efeitoDigitar(seletor) {
    const elemento = document.querySelector(seletor);
    if (!elemento) return;

    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    
    elemento.style.visibility = 'visible';

    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 75 * i);
    });
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

document.addEventListener('DOMContentLoaded', () => {
    efeitoDigitar('#titulo-digitado');
    menuAtivoScroll();
});

document.addEventListener("DOMContentLoaded", () => {
    const elementoTitulo = document.getElementById("titulo-digitado");
   
    const textoParaDigitar = 'Olá, eu sou <br> <span class="destaque-nome">Jorge Tadeu Filho!</span>';
    
    let index = 0;
    let textoAtual = '';
    let velocidade = 80; 

    function efeitoDigitacao() {
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
            
            setTimeout(efeitoDigitacao, velocidade);
        }
    }
    efeitoDigitacao();
});


document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("ativo");
        });
    }
});