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

function acessar() {
  const email = document.querySelector('.campo input[type="email"]');
  const senha = document.querySelector('.campo input[type="text"]');

  let valido = true;

  [email, senha].forEach((campo) => {
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
    setTimeout(() => {
      window.location.href = "./sistema.html";
    }, 1000);
  }
}

function abrirConsulta() {
  document.getElementById("card-boas-vindas").style.display = "none";
  document.getElementById("card-consulta").style.display = "flex";
  document.getElementById("resultado-consulta").textContent = "";
  document.getElementById("input-consulta").value = "";
}

const produtos = [
  { id: "1", nome: "Bomba Alta Pressão 1cv" },
  { id: "2", nome: "Bomba Submersível 2cv" },
  { id: "3", nome: "Bomba Centrífuga 3cv" },
  { id: "4", nome: "Bomba de Poço 0.5cv" },
  { id: "5", nome: "Bomba Industrial 5cv" },
];

function consultarProduto() {
  const input = document.getElementById("input-consulta").value.trim();
  const resultado = document.getElementById("resultado-consulta");

  if (input === "") {
    resultado.textContent = "";
    return;
  }

  const encontrado = produtos.find(
    (p) => p.id === input || p.nome.toLowerCase().includes(input.toLowerCase()),
  );

  if (encontrado) {
    resultado.style.color = "#1a56a0";
    resultado.textContent = "Produto encontrado: " + encontrado.nome;
  } else {
    resultado.style.color = "#e53935";
    resultado.textContent = "Produto não encontrado!";
  }
}
