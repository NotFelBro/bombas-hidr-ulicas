function enviarMensagem() {
  const nome = document.querySelector('.campo input[type="text"]');
  const email = document.querySelector('.campo input[type="email"]');
  const mensagem = document.querySelector(".campo textarea");

  let valido = true;

  [nome, email, mensagem].forEach((campo) => {
    const aviso = campo.parentElement.querySelector(".aviso-erro");
    if (aviso) aviso.remove();

    if (campo.value.trim() === "") {
      valido = false;

      const span = document.createElement("span");
      span.classList.add("aviso-erro");
      span.textContent = "Preencha este campo";
      campo.parentElement.appendChild(span);
    }
  });

  if (valido) {
    alert("Mensagem enviada com sucesso!");
    nome.value = "";
    email.value = "";
    mensagem.value = "";
  }
}
