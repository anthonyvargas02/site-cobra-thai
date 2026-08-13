// =============================================
// SCRIPT DO SITE COBRA THAI
// Aqui só temos 2 comportamentos simples:
// 1) Abrir/fechar o menu no mobile (hambúrguer)
// 2) Fechar o menu automaticamente ao clicar num link
// =============================================

// Pegamos os elementos do HTML pelo "id" que definimos lá
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

// Quando o botão hambúrguer for clicado, alterna (liga/desliga)
// a classe "nav--open", que no CSS controla se o menu aparece ou não
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('nav--open');
});

// Pegamos todos os links dentro do menu
const navLinks = document.querySelectorAll('.nav__link');

// Para cada link, adicionamos um "ouvinte de clique":
// ao clicar em qualquer link do menu, fechamos o menu mobile
// (importante pra não ficar aberto depois que a pessoa navega)
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav--open');
  });
});
