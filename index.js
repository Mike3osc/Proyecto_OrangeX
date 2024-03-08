
const NARANJITOS = [
  {
    texto: "¡Hola, mundo! Estoy probando el nuevo modelo de lenguaje GPT-3.5. ¿Qué les parece?",
    user: {
      imagen: "./assets/user1.png",
      nombre: "Usuario Ejemplo",
      username: "@usuario_ejemplo"
    },
    comentarios: [
      {
        texto: "¡Increíble! Me encanta la tecnología de inteligencia artificial.",
        user: {
          imagen: "./assets/user2.png",
          nombre: "Otro Usuario",
          username: "@otro_usuario"
        },
        likes: 5
      },
      {
        texto: "Estoy emocionado por las posibilidades que ofrece este modelo.",
        user: {
          imagen: "./assets/user4.png",
          nombre: "Usuario Emocionado",
          username: "@usuario_emocionado"
        },
        likes: 3
      }
    ],
    likes: 10
  },
  {
    texto: "¡Aprendiendo nuevas cosas cada día! 🚀 #AprendizajeContinuo",
    user: {
      imagen: "./assets/user6.png",
      nombre: "Aprendiz Curioso",
      username: "@aprendiz_curioso"
    },
    comentarios: [
      {
        texto: "Me encanta tu actitud positiva hacia el aprendizaje.",
        user: {
          imagen: "./assets/user5.png",
          nombre: "Seguidor Interesado",
          username: "@seguidor_interesado"
        },
        likes: 7
      }
    ],
    likes: 15
  }
];

const user = {
  imagen: "./assets/user2.png",
  nombre: "Usuario 2",
  username: "@usuario_2"
};

const printNaranjitos = (naranjitos) => {

  //Como tercer paso elejimos la seccion donde vamos a meter los elementos
  const narajitosSection = document.querySelector("#naranjitos");

  //narajitosSection.innerHTML = "";

  //Y por ultimo hacemos el bucle para que cree la estructura por tweet que necesitamos
  for (const naranjito of naranjitos) {

    //Primero creamos los elementos que conformaran nuestro HTML

    const imgUser = document.createElement("img");
    const userName = document.createElement("h3");
    const userAt = document.createElement("p");
    const divUser = document.createElement("div");
    const text = document.createElement("p");
    const comments = document.createElement("img");
    const numberOfComments = document.createElement("p");
    const divComments = document.createElement("div");
    const likes = document.createElement("img");
    const numberOfLikes = document.createElement("p");
    const divLikes = document.createElement("div");
    const additionalInfo = document.createElement("div")
    const divNarajito = document.createElement("div");

    //Como cuarto paso seria rellenar las imagenes que tenemos

    imgUser.src = naranjito.user.imagen;
    userName.textContent = naranjito.user.nombre;
    userAt.textContent = naranjito.user.username;
    divUser.className = "userInfo";
    text.textContent = naranjito.texto;
    text.className = "textoPrincipal";
    comments.src = "./assets/comentario.png";
    numberOfComments.textContent = naranjito.comentarios.length;
    likes.src = "./assets/corazon.png";
    numberOfLikes.textContent = naranjito.likes;
    additionalInfo.className = "info";

    likes.addEventListener("click", (e) => giveLike(e.target, numberOfLikes, naranjito))


    //Segundo añadimos los elementos al HTML

    divUser.appendChild(imgUser);
    divUser.appendChild(userName);
    divUser.appendChild(userAt);

    divComments.appendChild(comments);
    divComments.appendChild(numberOfComments);

    divLikes.appendChild(likes);
    divLikes.appendChild(numberOfLikes);

    additionalInfo.appendChild(divComments);
    additionalInfo.appendChild(divLikes);

    divNarajito.appendChild(divUser);
    divNarajito.appendChild(text);
    divNarajito.appendChild(additionalInfo);

    narajitosSection.appendChild(divNarajito);

  }
}

const giveLike = (image, numberOfLikes, naranjito) => {
  if (!image.className.includes("clicked")) {
    naranjito.likes++;
    numberOfLikes.textContent = naranjito.likes;
    image.src = "./assets/corazon_relleno.png";
    image.classList.add("clicked")

  }


}

printNaranjitos(NARANJITOS);

const printPublication = () => {

  const publication = document.querySelector("#publish");
  const input = document.createElement("input");
  const button = document.createElement("button");
  const img = document.createElement("img");

  img.src = "./assets/logo.png";
  input.placeholder = "Escribe aqui tu Naranjito...";
  button.addEventListener("click", () => postNaranjito(input))
  window.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      postNaranjito(input);
    }
  })

  publication.appendChild(input);
  publication.appendChild(button);
  button.appendChild(img);
}

const postNaranjito = (input) => {

  const naranjito = {
    texto: input.value,
    user: {
      imagen: user.imagen,
      nombre: user.nombre,
      username: user.username
    },
    comentarios: [],
    likes: 0
  }

  input.value = "";

  NARANJITOS.push(naranjito)

  const newArray = [naranjito]

  printNaranjitos(newArray);
}

printPublication();