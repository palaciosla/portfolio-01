// import Imagen from "../../../img/pro1.png";
import Ecommerce from "../../../img/ecommerce.png";
import BuscadorImg from "../../../img/buscador-preview.png";
import MenuImg from "../../../img/screen-menu.png";
import Todo from "../../../img/todo-print.png";

const listProjects = [
  {
    title: "Buscador de canciones",
    image: BuscadorImg,
    description: "Busca las letras de tus canciones favoritas",
    descriptionModal:
      "Buscador de canciones hecho con React y Material UI. Consulta 2 APIs en simultáneo con Axios. Tiene una navegación en donde se puede visualizar las 3 áreas de la app. Formulario de consulta, Card de la letra y artista y tabla de favoritos. Los favoritos quedan guardados en localStorage",
    tags: [
      "react",
      "css",
      "javascript",
      "html",
      "react router",
      "axios",
      "material ui",
      "localstorage",
    ],
    linkGit: "https://github.com/palaciosla/app-music",
    linkDemo: "https://buscador-de-musica-react.netlify.app/",
  },
  {
    title: "Menú Restaurant",
    image: MenuImg,
    description: "App para hacer pedidos.",
    descriptionModal:
      "Challenge presentado en Alkemy.org. App que simula un menú de restaurant, busca los platos a travez de una API y puedes agregarlos al menú. Al agregar al menú, muestra una barra donde indica el total, health score y tiempo promedio de demora. El login se hace con una petición a alkemy [email: 'challenge@alkemy.org', password: 'react'] ",
    tags: [
      "react",
      "css",
      "material ui",
      "react router dom",
      "localStorage",
      "axios",
    ],
    linkGit: "https://github.com/palaciosla/react-alkemy",
    linkDemo: "https://menu-lean.netlify.app",
  },
  {
    title: "UI E-commerce Fashion",
    image: Ecommerce,
    description: "Simulación de UI de e-commerce",
    descriptionModal:
      "Simulación de una UI de un e-commerce de Moda. Se basa en la reutilización de componentes, maquetación y estilos con Styled Components y paginación para ver las distintas UI con React Router",
    tags: [
      "react",
      "css",
      "javascript",
      "html",
      "styled components",
      "react router",
      "UI",
      "Material UI Icons",
    ],
    linkGit: "https://github.com/palaciosla/e-commerce-fashion",
    linkDemo: "https://tutuca-ecommerce.netlify.app/",
  },
  // {
  //   title: "To do List",
  //   image: Todo,
  //   description: "App de tareas por hacer.",
  //   descriptionModal:
  //     "To do List hecho en React. Prácticas en el manejo de estado y paso de props. Las tareas se guardan en localStorage",
  //   tags: ["react", "css", "bootstrap", "html", "localStorage"],
  //   linkGit: "https://github.com/palaciosla/todo-list-react",
  //   linkDemo: "https://lean-todo-list.netlify.app/",
  // },

  // {
  //   title: "Portfolio Personal333",
  //   image: { Imagen },
  //   description: "Simple portfolio hecho para mi búsqueda.",
  //   tags: ["react", "css", "javascript", "html"],
  // },
  // {
  //   title: "Portfolio Personal2312",
  //   image: { Imagen },
  //   description: "Simple portfolio hecho para mi búsqueda.",
  //   tags: ["react", "css", "javascript", "html"],
  // },
  // {
  //   title: "Portfolio Personal2313131",
  //   image: { Imagen },
  //   description: "Simple portfolio hecho para mi búsqueda.",
  //   tags: ["react", "css", "javascript", "html"],
  // },
];

export default listProjects;

/** */
