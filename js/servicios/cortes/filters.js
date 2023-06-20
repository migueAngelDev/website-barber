document.addEventListener("DOMContentLoaded", function () {

    let selector = document.querySelector("#hairstyles-ages");
    const kidsContainer = document.querySelector("#age-kids");
    const teensContainer = document.querySelector("#age-teenagers");
    const adultsContainer = document.querySelector("#age-adults");
    const galleryBarba = document.querySelector("#gallery-barba");
    const galeria = document.querySelector(".gallery-hairstyles");

    galeria.style.display = "none";

    selector.addEventListener("change", function () {
        const selectorValue = selector.value;

        if (selectorValue !== "") {
            kidsContainer.classList.add("hidden");
            teensContainer.classList.add("hidden");
            adultsContainer.classList.add("hidden");

            galeria.style.display = "flex";

        } else {
            kidsContainer.classList.remove("hidden");
            teensContainer.classList.remove("hidden");
            adultsContainer.classList.remove("hidden");
            galeria.style.display = "none";
        }

        if(selectorValue === "joven" || selectorValue === "adulto"){
            galleryBarba.classList.remove("hidden");
        } else{
            galleryBarba.classList.add("hidden");
        }
    });

});
