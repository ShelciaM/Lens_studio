

// ==============================
// CONTADORES
// ==============================

const numbers = document.querySelectorAll(".numbers h1");

let started = false;


function counter(){

    const section = document.querySelector(".numbers");

    const position = section.getBoundingClientRect().top;


    if(position < window.innerHeight && !started){

        numbers.forEach(number => {

            let value = Number(number.innerText.replace("+",""));

            let count = 0;


            let interval = setInterval(()=>{

                count += Math.ceil(value/50);

                if(count >= value){

                    count = value;
                    clearInterval(interval);

                }

                number.innerText = count + "+";


            },40);


        });


        started = true;

    }

}


window.addEventListener("scroll", counter);




// ==============================
// ANIMAÇÃO INICIAL
// ==============================

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});


const button = document.querySelector("#theme-toggle");


button.addEventListener("click",()=>{


    document.body.classList.toggle("light-mode");


    if(document.body.classList.contains("light-mode")){

        button.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }else{

        button.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

    }


});