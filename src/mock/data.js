import nikeLogo from "../assets/nike-logo.png";
import stylesguideLogo from "../assets/stylesguide-logo.png";
import pokeball from "../assets/pokeball.png";

const projectsData = [
  {
    img: nikeLogo,
    hostLink: "https://nikestore-ng.netlify.app",
    githubLink: "https://github.com/NahuelGenchi/nikestore.git",
    title: "Nike Store",
    description: "In this e-commerce app you can explore Nike products, create your own account, add items to cart & proceed to payment."
  },
  {
    img: pokeball,
    hostLink: "https://pokedex-ng.netlify.app",
    githubLink: "https://github.com/NahuelGenchi",
    title: "Pokédex",
    description: "All the Pokémon data you'll ever need in one place, easily accessible through a modern RESTful API."
  },
  {
    img: "https://raw.githubusercontent.com/NahuelGenchi/zooanimal/main/src/assets/macaw.png",
    hostLink: "https://zooanimals-ng.herokuapp.com",
    githubLink: "https://github.com/NahuelGenchi/zooanimal.git",
    title: "Zoo Animals",
    description: "This app returns 10 random zoo animals with information like habitat, geography, diet, etc."
  },
  {
    img: stylesguideLogo,
    hostLink: "https://stylesguide.netlify.app",
    githubLink: "https://github.com/NahuelGenchi/styleguide.git",
    title: "Styles Guide",
    description: "Find the best colors and fonts for your project."
  },
  {
    iconName: "document-text",
    iconColor: "#FFE278",
    hostLink: "https://nahuelgenchi.github.io/notes",
    githubLink: "https://github.com/NahuelGenchi/notes.git",
    title: "Notes App",
    description: "In this note app, users can easily add, edit or delete their notes. The notes added to this app will be stored in the browser's local storage, so they won't be removed on page refresh or tab close."
  },
  {
    iconName: "checkbox",
    iconColor: "#89E289",
    hostLink: "https://nahuelgenchi.github.io/tdlistb",
    githubLink: "https://github.com/NahuelGenchi/tdlistb.git",
    title: "To-Do List",
    description: "In this To-Do List you can add, delete and mark tasks as done. The tasks are stored in the browser's local storage in order to not be lost after refreshing the page"
  },
  {
    iconName: "swap-horizontal",
    iconColor: "#fff",
    hostLink: "https://nahuelgenchi.github.io/unitconverter",
    githubLink: "https://github.com/NahuelGenchi/unitconverter.git",
    title: "Unit Conversion",
    description: "In this app you can convert meters, feet, liters, gallons, kilos and pounds into their respective opposite metric/imperial unit."
  },
  {
    iconName: "cafe",
    iconColor: "#FAEBD7",
    hostLink: "https://nahuelgenchi.github.io/coffee_regions",
    githubLink: "https://github.com/NahuelGenchi/coffee_regions.git",
    title: "Coffee Regions",
    description: "Let's take a look at the countries with the highest quality of coffee beans."
  }
];

export default projectsData;