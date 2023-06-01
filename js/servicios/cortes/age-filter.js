let selector = document.querySelector("#hairstyles-ages");
const kidsContainer = document.querySelector("#age-kids");
const teensContainer = document.querySelector("#age-teenagers");
const adultsContainer = document.querySelector("#age-adults");

selector.addEventListener("change", function(){
    const selectorValue = selector.value;
    
    if(selectorValue == "ninos"){
        kidsContainer.classList.remove("hidden");
        teensContainer.classList.add("hidden");
        adultsContainer.classList.add("hidden");
    }

    else if(selectorValue == "jovenes"){
        kidsContainer.classList.add("hidden");
        teensContainer.classList.remove("hidden");
        adultsContainer.classList.add("hidden");
    }

    else if(selectorValue == "adultos"){
        kidsContainer.classList.add("hidden");
        teensContainer.classList.add("hidden");
        adultsContainer.classList.remove("hidden");
    }


    else{
        kidsContainer.classList.remove("hidden");
        teensContainer.classList.remove("hidden");
        adultsContainer.classList.remove("hidden");
    }
});