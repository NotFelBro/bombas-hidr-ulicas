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
  {
    id: "1",
    nome: "Bomba Alta Pressão 1cv",
    img: "./img/bomba1cv.jpeg",
    descricao: "Ideal para prédios e sistemas que exigem força total.",
    preco: "R$ 1.200,00",
  },
  {
    id: "2",
    nome: "Bomba Submersível 2cv",
    img: "./img/bombasubmersivel2cv.webp",
    descricao: "Projetada para trabalhar dentro da água com alta eficiência.",
    preco: "R$ 1.800,00",
  },
  {
    id: "3",
    nome: "Bomba Centrífuga 3cv",
    img: "./img/bombacentrifuga3cv.webp",
    descricao: "Ideal para grandes sistemas hidráulicos industriais.",
    preco: "R$ 2.500,00",
  },
  {
    id: "4",
    nome: "Bomba de Poço 0.5cv",
    img: "./img/bombadepoco05cv.webp",
    descricao: "Potência e durabilidade para grandes vazões.",
    preco: "R$ 950,00",
  },
  {
    id: "5",
    nome: "Bomba Industrial 5cv",
    img: "./img/BombaIndustrial5cv.webp",
    descricao: "Eficiência máxima para poços e reservatórios.",
    preco: "R$ 4.300,00",
  },
];

function consultarProduto() {
  const input = document.getElementById("input-consulta").value.trim();
  const resultado = document.getElementById("resultado-consulta");

  resultado.innerHTML = "";

  if (input === "") return;

  const porId = produtos.find((p) => p.id === input);
  const encontrado =
    porId ||
    produtos.find((p) => p.nome.toLowerCase().includes(input.toLowerCase()));

  if (encontrado) {
    resultado.innerHTML = `
      <div class="produto-card">
        <img src="${encontrado.img}" alt="${encontrado.nome}" class="produto-img" />
        <div class="produto-info">
          <h3 class="produto-nome">${encontrado.nome}</h3>
          <p class="produto-descricao">${encontrado.descricao}</p>
          <p class="produto-preco">${encontrado.preco}</p>
        </div>
      </div>
    `;
  } else {
    resultado.innerHTML = `<p class="produto-nao-encontrado">Produto não encontrado!</p>`;
  }
}
