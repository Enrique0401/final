document.addEventListener("DOMContentLoaded", function () {
    // Datos de los seres vivos por reino
    const seresVivos = {
        animal: [
            {
                nombre: "Squirrel",
                imagen: "../img/Carrucel/ardilla.jpeg",
                reino: "Animalia",
                descripcion: "The squirrel is a small rodent mammal known for its agility and ability to climb trees. It primarily feeds on nuts, seeds, and fruits.",
                habitat: "Temperate forests and tree-filled urban areas",
                curiosidad: "Squirrels have excellent spatial memory that allows them to remember where they hid their food."
            },
            {
                nombre: "Golden eagle",
                imagen: "../img/Carrucel/aguila_real.jpg",
                reino: "Animalia",
                descripcion: "The golden eagle is one of the best-known and most widely distributed birds of prey on Earth.",
                habitat: "Mountains and open areas",
                curiosidad: "They can reach speeds of up to 240 km/h (149 mph) in a dive."
            }
        ],
        plantae: [
            {
                nombre: "Lettuce",
                imagen: "../img/Carrucel/lechuga.jpg",
                reino: "Plantae",
                descripcion: "Lettuce is an edible green-leaf plant widely cultivated for its use in salads and as a fresh ingredient in cooking.",
                habitat: "Temperate areas, cultivated in gardens and agricultural fields",
                curiosidad: "It is composed of over 90% water, making it very light and refreshing."
            },
            {
                nombre: "Sunflower",
                imagen: "../img/Carrucel/girasol.jpg",
                reino: "Plantae",
                descripcion: "The sunflower is a herbaceous plant known for its large yellow flowers that turn following the sun's path—a phenomenon called heliotropism.",
                habitat: "Temperate zones with good sun exposure",
                curiosidad: "Besides being ornamental, sunflowers are cultivated for their edible seeds and vitamin E–rich oil."
            }
        ],
        fungi: [
            {
                nombre: "Panellus Stipticus",
                imagen: "../img/Carrucel/Panellus_stipticus.jpg",
                reino: "Fungi",
                descripcion: "Basidiomycete fungus well known for its red cap with white spots appearance.",
                habitat: "Coniferous forests",
                curiosidad: "It is a psychoactive and poisonous mushroom."
            }
        ],
        protista: [
            {
                nombre: "Paramecium",
                imagen: "../img/Carrucel/paramecium.webp",
                reino: "Protista",
                descripcion: "Oval-shaped ciliated unicellular organism, commonly found in stagnant freshwater.",
                habitat: "Freshwater",
                curiosidad: "It reproduces asexually through binary fission."
            }
        ],
        monera: [
            {
                nombre: "Escherichia Coli",
                imagen: "../img/Carrucel/e-coli.avif",
                reino: "Monera",
                descripcion: "Bacterium commonly found in the intestines of warm-blooded animals.",
                habitat: "Intestines",
                curiosidad: "Some strains can cause food poisoning."
            },
            {
                nombre: "Helicobacter pylori",
                imagen: "../img/Carrucel/helicobacter.jpg",
                reino: "Monera",
                descripcion: "Helicobacter pylori is a spiral-shaped bacterium that lives in the human stomach and can survive in acidic environments.",
                habitat: "Gastric mucosa of the human stomach",
                curiosidad: "It is one of the few bacteria capable of surviving stomach acid and is linked to gastric ulcers and gastritis."
            }
        ]
    };
    

    const carouselTrack = document.querySelector(".carousel-track");
    const pauseBtn = document.getElementById("pauseBtn");
    const increaseSpeedBtn = document.getElementById("increaseSpeedBtn");
    const decreaseSpeedBtn = document.getElementById("decreaseSpeedBtn");
    const speedDisplay = document.getElementById("speedDisplay");

    let currentOffset = 1;
    let carouselSpeed = 2;
    const minSpeed = 1;
    const maxSpeed = 9;
    let animationId;
    let isPaused = false;

    function updateSpeedDisplay() {
        speedDisplay.textContent = `x${carouselSpeed}`;
    }

    function createCarouselItems() {
        const allItems = [...seresVivos.animal, ...seresVivos.plantae, ...seresVivos.fungi, ...seresVivos.protista, ...seresVivos.monera];
        const duplicatedItems = [...allItems, ...allItems];

        duplicatedItems.forEach((item, index) => {
            const carouselItem = document.createElement("div");
            carouselItem.className = "carousel-item";
            carouselItem.dataset.index = index;
            carouselItem.setAttribute("role", "button");
            carouselItem.setAttribute("aria-label", `Ver información de ${item.nombre}`);
            carouselItem.setAttribute("tabindex", "0");

            const frontDiv = document.createElement("div");
            frontDiv.className = "carousel-item-front";
            const imgElement = document.createElement("img");
            imgElement.src = item.imagen;
            imgElement.alt = item.nombre;
            imgElement.style.width = "100%";
            imgElement.style.height = "100%";
            imgElement.style.objectFit = "cover";
            imgElement.onerror = function() {
                this.src = item.imagenRespaldo || "img/default-placeholder.jpg";
                console.warn(`Error cargando imagen: ${item.imagen}. Usando imagen de respaldo.`);
            };
            imgElement.onload = function() {
                this.style.opacity = "1";
            };
            imgElement.style.opacity = "0";
            imgElement.style.transition = "opacity 0.3s ease";
            frontDiv.appendChild(imgElement);

            const badgeDiv = document.createElement("div");
            badgeDiv.className = `reino-badge badge-${item.reino.toLowerCase()}`;
            badgeDiv.textContent = item.reino.charAt(0);
            frontDiv.appendChild(badgeDiv);

            const titleDiv = document.createElement("div");
            titleDiv.className = "carousel-item-title";
            titleDiv.textContent = `${item.nombre}`;
            frontDiv.appendChild(titleDiv);

            const backDiv = document.createElement("div");
            backDiv.className = "carousel-item-back";

            const backBadgeDiv = document.createElement("div");
            backBadgeDiv.className = `reino-badge badge-${item.reino.toLowerCase()}`;
            backBadgeDiv.textContent = item.reino.charAt(0);
            backDiv.appendChild(backBadgeDiv);

            const infoDiv = document.createElement("div");
            infoDiv.className = "carousel-item-info";
            infoDiv.innerHTML = `
            <h3>${item.nombre}</h3>
            <p><strong>Kingdom:</strong> <span class="reino-text ${item.reino.toLowerCase()}-text">${item.reino}</span></p>
            <p><strong>Description:</strong> ${item.descripcion}</p>
            <p><strong>Habitat:</strong> ${item.habitat}</p>
            <p><strong>Curiosity:</strong> ${item.curiosidad}</p>
        `;

            backDiv.appendChild(infoDiv);

            carouselItem.appendChild(frontDiv);
            carouselItem.appendChild(backDiv);

            carouselItem.addEventListener("click", function () {
                this.classList.toggle("flipped");
                const isFlipped = this.classList.contains("flipped");
                this.setAttribute("aria-expanded", isFlipped);
            });

            // Pause carousel on hover
            carouselItem.addEventListener("mouseenter", () => {
                isPaused = true;
                cancelAnimationFrame(animationId);
            });

            carouselItem.addEventListener("mouseleave", () => {
                isPaused = false;
                animationId = requestAnimationFrame(animateCarousel);
            });

            carouselTrack.appendChild(carouselItem);
        });
    }

    function animateCarousel() {
        if (!isPaused) {
            currentOffset -= carouselSpeed;
            const trackWidth = carouselTrack.scrollWidth;
            const halfTrackWidth = trackWidth / 2;

            if (currentOffset <= -halfTrackWidth) {
                currentOffset = 0;
            }

            carouselTrack.style.transform = `translate3d(${currentOffset}px, 0, 0)`;
        }
        animationId = requestAnimationFrame(animateCarousel);
    }

    function initCarousel() {
        createCarouselItems();
        updateSpeedDisplay();
        animateCarousel();
    }

    initCarousel();

    pauseBtn.addEventListener("click", function () {
        isPaused = !isPaused;
        this.textContent = isPaused ? "▶" : "❚❚";
        this.setAttribute("aria-pressed", isPaused);
        if (!isPaused) {
            animationId = requestAnimationFrame(animateCarousel);
        } else {
            cancelAnimationFrame(animationId);
        }
    });

    increaseSpeedBtn.addEventListener("click", () => {
        carouselSpeed = Math.min(carouselSpeed + 1, maxSpeed);
        updateSpeedDisplay();
    });

    decreaseSpeedBtn.addEventListener("click", () => {
        carouselSpeed = Math.max(carouselSpeed - 1, minSpeed);
        updateSpeedDisplay();
    });

    document.addEventListener("keydown", function(e) {
        const focusedElement = document.activeElement;
        if (focusedElement && focusedElement.classList.contains("carousel-item")) {
            switch(e.key) {
                case "Enter":
                case " ": // Spacebar
                    e.preventDefault();
                    focusedElement.click();
                    break;
                case "ArrowLeft":
                    e.preventDefault();
                    const prevItem = focusedElement.previousElementSibling;
                    if (prevItem && prevItem.classList.contains("carousel-item")) {
                        prevItem.focus();
                    }
                    break;
                case "ArrowRight":
                    e.preventDefault();
                    const nextItem = focusedElement.nextElementSibling;
                    if (nextItem && nextItem.classList.contains("carousel-item")) {
                        nextItem.focus();
                    }
                    break;
            }
        }
    });

    window.addEventListener("beforeunload", function () {
        cancelAnimationFrame(animationId);
    });
});