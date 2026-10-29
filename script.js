// Filtro de projetos por categoria
const botoes = document.querySelectorAll(".filtro");
const projetos = document.querySelectorAll(".projeto");
const aviso = document.getElementById("vazio");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const filtro = botao.dataset.filtro;

    botoes.forEach((b) => {
      const ativo = b === botao;
      b.classList.toggle("ativo", ativo);
      b.setAttribute("aria-pressed", String(ativo));
    });

    let visiveis = 0;
    projetos.forEach((projeto) => {
      const mostrar = filtro === "todos" || projeto.dataset.tipo === filtro;
      projeto.hidden = !mostrar;
      if (mostrar) visiveis++;
    });

    aviso.hidden = visiveis > 0;
  });
});

// Ano atual no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();
