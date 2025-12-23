onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  window.onload = () => {
  // Remove a classe que impede a animação inicial
  document.body.classList.remove("not-loaded");

  // Adiciona o evento de clique na tela
  document.body.addEventListener("click", (e) => {
    createButterfly(e.clientX, e.clientY);
  });
};

function createButterfly(x, y) {
  const butterfly = document.createElement("div");
  butterfly.className = "butterfly";
  
  butterfly.style.left = `${x}px`;
  butterfly.style.top = `${y}px`;

  // Criando as 4 asas
  const wingPositions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
  
  wingPositions.forEach(pos => {
    const wing = document.createElement("div");
    wing.className = `wing ${pos}`;
    butterfly.appendChild(wing);
  });

  document.body.appendChild(butterfly);

  setTimeout(() => {
    butterfly.remove();
  }, 7000);
}