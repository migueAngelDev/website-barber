document.addEventListener('DOMContentLoaded', function () {
    const containerStars = document.querySelector(".stars__container");
    const valorationStarOne = document.querySelector("#star__1");
    const valorationStarTwo = document.querySelector("#star__2");
    const valorationStarThree = document.querySelector("#star__3");
    const valorationStarFour = document.querySelector("#star__4");
    const valorationStarFive = document.querySelector("#star__5");
    const valorationOutput = document.querySelector("#valoration__output");
    const valorationReset = document.querySelector(".valoration__reset");
    let clicked1 = false;
    let clicked2 = false;
    let clicked3 = false;
    let clicked4 = false;
    let clicked5 = false;

    //VALORACIÓN = 1

    valorationStarOne.addEventListener('mouseenter', function () {
        if (!clicked1) {
            valorationStarOne.classList.add('valoration__star--active');
        }
    });
    valorationStarOne.addEventListener('mouseleave', function () {
        if (!clicked1) {
            valorationStarOne.classList.remove('valoration__star--active');
        }
    });
    valorationStarOne.addEventListener('click', function () {
        clicked1 = true;
        clicked2 = false;
        clicked3 = false;
        clicked4 = false;
        clicked5 = false;
        valorationStarOne.classList.add('valoration__star--active');
        valorationStarTwo.classList.remove('valoration__star--active');
        valorationStarThree.classList.remove('valoration__star--active');
        valorationStarFour.classList.remove('valoration__star--active');
        valorationStarFive.classList.remove('valoration__star--active');
        valorationOutput.value = 1;
    });

    //VALORACIÓN = 2

    valorationStarTwo.addEventListener('mouseenter', function () {
        if (!clicked2) {
            valorationStarOne.classList.add('valoration__star--active');
            valorationStarTwo.classList.add('valoration__star--active');
        }
    });
    valorationStarTwo.addEventListener('mouseleave', function () {
        if (!clicked1 && !clicked2) {
            valorationStarOne.classList.remove('valoration__star--active');
            valorationStarTwo.classList.remove('valoration__star--active');
        }
        if (!clicked2) {
            valorationStarTwo.classList.remove('valoration__star--active');
        }
    });
    valorationStarTwo.addEventListener('click', function () {
        clicked1 = true;
        clicked2 = true;
        clicked3 = false;
        clicked4 = false;
        clicked5 = false;
        valorationStarOne.classList.add('valoration__star--active');
        valorationStarTwo.classList.add('valoration__star--active');
        valorationStarThree.classList.remove('valoration__star--active');
        valorationStarFour.classList.remove('valoration__star--active');
        valorationStarFive.classList.remove('valoration__star--active');
        valorationOutput.value = 2;
    });

    //VALORACIÓN = 3

    valorationStarThree.addEventListener('mouseenter', function () {
        if (!clicked3) {
            valorationStarOne.classList.add('valoration__star--active');
            valorationStarTwo.classList.add('valoration__star--active');
            valorationStarThree.classList.add('valoration__star--active');
        }
    });
    valorationStarThree.addEventListener('mouseleave', function () {
        if (!clicked1 && !clicked2 && !clicked3) {
            valorationStarOne.classList.remove('valoration__star--active');
            valorationStarTwo.classList.remove('valoration__star--active');
            valorationStarThree.classList.remove('valoration__star--active');
        }
        if (!clicked3) {
            valorationStarThree.classList.remove('valoration__star--active');
        }
    });
    valorationStarThree.addEventListener('click', function () {
        clicked1 = true;
        clicked2 = true;
        clicked3 = true;
        clicked4 = false;
        clicked5 = false;
        valorationStarOne.classList.add('valoration__star--active');
        valorationStarTwo.classList.add('valoration__star--active');
        valorationStarThree.classList.add('valoration__star--active');
        valorationStarFour.classList.remove('valoration__star--active');
        valorationStarFive.classList.remove('valoration__star--active');
        valorationOutput.value = 3;
    });

    //VALORACIÓN = 4

    valorationStarFour.addEventListener('mouseenter', function () {
        if (!clicked4) {
            valorationStarOne.classList.add('valoration__star--active');
            valorationStarTwo.classList.add('valoration__star--active');
            valorationStarThree.classList.add('valoration__star--active');
            valorationStarFour.classList.add('valoration__star--active');
        }
    });
    valorationStarFour.addEventListener('mouseleave', function () {
        if (!clicked1 && !clicked2 && !clicked3 && !clicked4) {
            valorationStarOne.classList.remove('valoration__star--active');
            valorationStarTwo.classList.remove('valoration__star--active');
            valorationStarThree.classList.remove('valoration__star--active');
            valorationStarFour.classList.remove('valoration__star--active');
        }
        if (!clicked4) {
            valorationStarFour.classList.remove('valoration__star--active');
        }
    });
    valorationStarFour.addEventListener('click', function () {
        clicked1 = true;
        clicked2 = true;
        clicked3 = true;
        clicked4 = true;
        clicked5 = false;
        valorationStarOne.classList.add('valoration__star--active');
        valorationStarTwo.classList.add('valoration__star--active');
        valorationStarThree.classList.add('valoration__star--active');
        valorationStarFour.classList.add('valoration__star--active');
        valorationStarFive.classList.remove('valoration__star--active');
        valorationOutput.value = 4;
    });

    //VALORACIÓN = 5

    valorationStarFive.addEventListener('mouseenter', function () {
        if (!clicked5) {
            valorationStarOne.classList.add('valoration__star--active');
            valorationStarTwo.classList.add('valoration__star--active');
            valorationStarThree.classList.add('valoration__star--active');
            valorationStarFour.classList.add('valoration__star--active');
            valorationStarFive.classList.add('valoration__star--active');
        }
    });
    valorationStarFive.addEventListener('mouseleave', function () {
        if (!clicked1 && !clicked2 && !clicked3 && !clicked4 && !clicked5) {
            valorationStarOne.classList.remove('valoration__star--active');
            valorationStarTwo.classList.remove('valoration__star--active');
            valorationStarThree.classList.remove('valoration__star--active');
            valorationStarFour.classList.remove('valoration__star--active');
            valorationStarFive.classList.remove('valoration__star--active');

        }
        if (!clicked5) {
            valorationStarFive.classList.remove('valoration__star--active');
        }
    });
    valorationStarFive.addEventListener('click', function () {
        clicked1 = true;
        clicked2 = true;
        clicked3 = true;
        clicked4 = true;
        clicked5 = true;
        valorationStarOne.classList.add('valoration__star--active');
        valorationStarTwo.classList.add('valoration__star--active');
        valorationStarThree.classList.add('valoration__star--active');
        valorationStarFour.classList.add('valoration__star--active');
        valorationStarFive.classList.add('valoration__star--active');
        valorationOutput.value = 5;
    });

    //RESETEAR VALORACIÓN

    valorationReset.addEventListener('click', function () {
        valorationStarOne.classList.remove('valoration__star--active');
        valorationStarTwo.classList.remove('valoration__star--active');
        valorationStarThree.classList.remove('valoration__star--active');
        valorationStarFour.classList.remove('valoration__star--active');
        valorationStarFive.classList.remove('valoration__star--active');
        clicked1 = false;
        clicked2 = false;
        clicked3 = false;
        clicked4 = false;
        clicked5 = false;
        valorationOutput.value = "";
    });

    //EVITAR BUG

    document.addEventListener('mouseout', function (event) {
        if (event.target !== containerStars && !containerStars.contains(event.target)) {
            if (!clicked1) {
                valorationStarOne.classList.remove('valoration__star--active');
            }
            if (!clicked2) {
                valorationStarTwo.classList.remove('valoration__star--active');
            }
            if (!clicked3) {
                valorationStarThree.classList.remove('valoration__star--active');
            }
            if (!clicked4) {
                valorationStarFour.classList.remove('valoration__star--active');
            }
            if (!clicked5) {
                valorationStarFive.classList.remove('valoration__star--active');
            }
        }
    });
});