document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.navegacion-principal');
  const header = document.querySelector('header');
  const body = document.body;

  const adjustBodyPadding = () => {
    const headerHeight = header.offsetHeight;
    if (nav.classList.contains('active')) {
      const expandedHeaderHeight = headerHeight + nav.offsetHeight;
      body.style.paddingTop = `${expandedHeaderHeight}px`;
    } else {

      body.style.paddingTop = `${headerHeight}px`;
    }
  };

  menuToggle.addEventListener('click', function () {
    nav.classList.toggle('active');
    this.classList.toggle('active');
    adjustBodyPadding();
  });


  document.querySelectorAll('.nav-enlace').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
      adjustBodyPadding();
    });
  });

  const darkModeToggle = document.getElementById('interruptor-modo');

  const savedMode = localStorage.getItem('theme');
  if (savedMode === 'light') {
    darkModeToggle.checked = false;
    body.classList.add('light-mode');
  } else {
    darkModeToggle.checked = true;
    body.classList.remove('light-mode');
  }


  darkModeToggle.addEventListener('change', function () {
    if (this.checked) {
      body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    }
  });

  adjustBodyPadding();

  window.addEventListener('resize', adjustBodyPadding);
});


const animales = [
  {
    nombre: "Rinoceronte",
    gif: "../img/gifs/rino_sinfondo.gif",
    datos: [
      "A rhinoceros can weigh up to 2 tons.",
      "Bacteria are unicellular prokaryotic organisms.",
      "Organisms in the Monera kingdom do not have a defined nucleus.",
      "Protists are simple eukaryotes.",
      "Some protists are unicellular, and others are simple multicellular organisms.",
      "Rhinoceros horns are made of keratin, just like your nails.",
      "Fungi do not perform photosynthesis.",
      "Plants are photosynthetic eukaryotic organisms.",
      "Plant cell walls contain cellulose.",
      "Some fungi can reproduce both sexually and asexually."
    ]
  },
  {
    nombre: "Cocodrilo",
    gif: "../img/gifs/cocod_sinfondo.gif",
    datos: [
      "Crocodiles can live for over 70 years.",
      "Cyanobacteria can perform photosynthesis.",
      "Algae are autotrophic protists.",
      "Plants produce their food through photosynthesis.",
      "Leaves carry out photosynthesis.",
      "Protozoa are heterotrophic protists.",
      "Some fungi are used in bread fermentation.",
      "Yeasts ferment sugars, producing alcohol.",
      "Bacterial DNA is found freely in the cytoplasm.",
      "Crocodiles can swim at 30 km/h over short distances."
    ]
  },
  {
    nombre: "Panda",
    gif: "../img/gifs/panda_sinfondo.gif",
    datos: [
      "Pandas spend 12 hours a day eating bamboo.",
      "Bacteria reproduce by binary fission.",
      "Amoebas move using pseudopods.",
      "Paramecia move using cilia.",
      "Roots absorb water and minerals.",
      "Plants produce oxygen during photosynthesis.",
      "Hyphae are filamentous structures of fungi.",
      "Mycelium is a network of hyphae.",
      "Some bacteria live in extreme conditions.",
      "Pandas are born weighing only 100 grams."
    ]
  },
  {
    nombre: "Zebra",
    gif: "../img/gifs/zebra_sinfondo.gif",
    datos: [
      "Each zebra has a unique stripe pattern.",
      "Protists live in aquatic or moist environments.",
      "Some protists cause human diseases.",
      "The bacterial cell wall contains peptidoglycan.",
      "Some bacteria fix nitrogen in the soil.",
      "Xylem transports water and minerals.",
      "Phloem transports processed nutrients.",
      "Some fungi cause diseases in humans.",
      "Mycorrhizae help plants absorb nutrients.",
      "Zebras are excellent swimmers."
    ]
  },
  {
    nombre: "Hormiguero",
    gif: "../img/gifs/hormiguero_sinfondo.gif",
    datos: [
      "It can eat up to 30,000 ants a day.",
      "Many bacteria decompose organic matter.",
      "Bacteria can have cocci, bacilli, or spirilla shapes.",
      "The Protista kingdom includes highly diverse organisms.",
      "Some protists form simple colonies.",
      "Plants reproduce by spores or seeds.",
      "Ferns are vascular plants without seeds.",
      "Fungi can form mycorrhizae with plants.",
      "The fungus *Penicillium* produces penicillin.",
      "Its tongue can measure up to 60 cm."
    ]
  },
  {
    nombre: "Nutria",
    gif: "../img/gifs/nutria_sinfondo.gif",
    datos: [
      "Otters use stones as tools to break shells.",
      "Some bacteria are pathogenic and cause diseases.",
      "Bacteria do not have mitochondria.",
      "Angiosperms have flowers and fruits.",
      "Gymnosperms produce naked seeds.",
      "Lichens are associations between fungi and algae.",
      "Some fungi decompose organic matter.",
      "Some protists photosynthesize and release oxygen.",
      "Protists have contractile vacuoles.",
      "Otters hold hands while sleeping to avoid drifting apart."
    ]
  },
  {
    nombre: "Ardilla",
    gif: "../img/gifs/ardilla_sinfondo.gif",
    datos: [
      "Squirrels can jump up to 10 times their body length.",
      "Some bacteria form resistant spores.",
      "Some red algae live in deep waters.",
      "Fungi reproduce through spores.",
      "Molds are filamentous fungi.",
      "Mosses lack vascular tissues.",
      "Plants have chlorophyll in their chloroplasts.",
      "Green algae can be unicellular or multicellular.",
      "Cyanobacteria produce oxygen during photosynthesis.",
      "Squirrels have spatial memory to remember their hiding spots."
    ]
  },
  {
    nombre: "Zorrillo",
    gif: "../img/gifs/zorrillo_sinfondo.gif",
    datos: [
      "Skunk smell can be detected over 3 km away.",
      "Phytoplankton is made up of photosynthetic protists.",
      "Some protists have flagella for movement.",
      "Mushrooms are the fruiting bodies of some fungi.",
      "Yeasts are unicellular fungi.",
      "Plants form the base of terrestrial ecosystems.",
      "Flowers allow for the sexual reproduction of plants.",
      "Bacteria can move using flagella.",
      "Bacteria can exchange genes through conjugation.",
      "Skunks almost always warn before spraying their spray."
    ]
  },
  {
    nombre: "Perezoso",
    gif: "../img/gifs/peresoso_sinfondo.gif",
    datos: [
      "Sloths move so slowly that algae grow on their fur.",
      "The Monera kingdom was one of the first to inhabit Earth.",
      "Some bacteria live in hot springs.",
      "Some protists can reproduce both sexually and asexually.",
      "Fungi absorb nutrients from their external environment.",
      "Fungi can be unicellular or multicellular.",
      "Green algae are ancestors of land plants.",
      "Autotrophic plants transform solar energy into food.",
      "The alga *Chlamydomonas* is a unicellular green protist.",
      "Sloths only come down from trees once a week."
    ]
  },
  {
    nombre: "Castor",
    gif: "../img/gifs/castor_sinfondo.gif",
    datos: [
      "Beavers build dams that can be seen from satellites.",
      "Bacteria can ferment food.",
      "The Monera kingdom contains the oldest organisms on the planet.",
      "Beavers' teeth never stop growing.",
      "Fungi are heterotrophic eukaryotes.",
      "Fungal cell walls contain chitin.",
      "Protists are essential in aquatic food chains.",
      "The Protista kingdom was proposed by Ernst Haeckel.",
      "Fruits protect and disperse seeds.",
      "Plants maintain the balance of ecosystems."
    ]
  }
];

const boton = document.getElementById("btn-dato");
const contenedor = document.getElementById("animal-container");
const imagen = document.getElementById("animal-img");
const dato = document.getElementById("dato-curioso");

boton.addEventListener("click", () => {
  const animalRandom = animales[Math.floor(Math.random() * animales.length)];
  const datoRandom = animalRandom.datos[Math.floor(Math.random() * animalRandom.datos.length)];

  imagen.src = animalRandom.gif;
  imagen.alt = animalRandom.nombre;
  dato.textContent = datoRandom;

  contenedor.classList.remove("hidden");

  // Ocultar después de 7 segundos
  setTimeout(() => {
    contenedor.classList.add("hidden");
  }, 5000);
});




const selectedButton = document.getElementById('selected-language');
const optionsMenu = document.querySelector('.oportunidades');
const options = document.querySelectorAll('.oportunidad');

// Mostrar/ocultar menú al hacer clic en el botón
selectedButton.addEventListener('click', (e) => {
  e.stopPropagation();
  optionsMenu.style.display = optionsMenu.style.display === 'block' ? 'none' : 'block';
});

// Al seleccionar idioma, redirigir
options.forEach(option => {
  option.addEventListener('click', () => {
    optionsMenu.style.display = 'none';
    const selectedLang = option.dataset.value;

    // Redirige según idioma seleccionado
    switch (selectedLang) {
      case 'es':
        window.location.href = '../index.html';
        break;
      default:
        window.location.href = 'index.html';
    }
  });
});

// Cerrar menú al hacer clic fuera
window.addEventListener('click', function (e) {
  if (!selectedButton.contains(e.target) && !optionsMenu.contains(e.target)) {
    optionsMenu.style.display = 'none';
  }
});
