(() => {
  const page = document.querySelector("[data-catalog-kind]");
  const modelSelect = document.querySelector("#model-select");
  const stateTitle = document.querySelector("#catalog-state-title");
  const stateMessage = document.querySelector("#catalog-state-message");
  const contactLink = document.querySelector("#catalog-contact");

  if (!page || !modelSelect || !stateTitle || !stateMessage || !contactLink) {
    return;
  }

  const category = page.dataset.catalogKind;
  const productLabel = category === "baterias" ? "baterias" : "peças";
  const productSingular = category === "baterias" ? "bateria" : "peça";

  modelSelect.addEventListener("change", () => {
    const model = modelSelect.value;

    if (!model) {
      stateTitle.textContent = "Escolha um modelo";
      stateMessage.textContent = `A lista de ${productLabel} por modelo ainda está sendo cadastrada. Selecione seu drone para pedir uma consulta específica.`;
      contactLink.classList.add("is-hidden");
      contactLink.setAttribute("aria-hidden", "true");
      contactLink.tabIndex = -1;
      contactLink.removeAttribute("href");
      return;
    }

    stateTitle.textContent = `${productLabel[0].toLocaleUpperCase("pt-BR")}${productLabel.slice(1)} para ${model}`;
    stateMessage.textContent = `Ainda não temos uma lista confirmada de ${productLabel} para o ${model}. A equipe pode verificar a compatibilidade e a disponibilidade da ${productSingular} que você procura.`;

    const message = `Olá! Gostaria de consultar ${productLabel} compatíveis com o ${model}.`;
    contactLink.href = `https://wa.me/?text=${encodeURIComponent(message)}`;
    contactLink.classList.remove("is-hidden");
    contactLink.removeAttribute("aria-hidden");
    contactLink.tabIndex = 0;
  });
})();
