const slider = document.getElementById("windSlider");

const speedText = document.getElementById("speedText");

const principle = document.getElementById("principle");

const blades = document.getElementById("blades");

const window1 = document.getElementById("window1");

const window2 = document.getElementById("window2");

const cable = document.getElementById("cable");

const windContainer = document.getElementById("windContainer");

/* MEMBUAT GARIS ANGIN */

function createWind(amount, duration){

    windContainer.innerHTML = "";

    for(let i=0;i<amount;i++){

        const line = document.createElement("div");

        line.classList.add("wind-line");

        line.style.width =
        (Math.random()*80 + 30)+"px";

        line.style.top =
        (Math.random()*300 + 20)+"px";

        line.style.left = "-300px";

        line.style.animationDuration =
        duration+"s";

        line.style.animationDelay =
        (Math.random()*5)+"s";

        windContainer.appendChild(line);
    }
}

/* UPDATE KONDISI */

function updateCondition(value){

    /* TENANG */
    if(value == 0){

        speedText.innerHTML =
        "Tenang (0 m/s)";

        blades.style.animationDuration =
        "12s";

        principle.innerHTML =
        "<strong>Prinsip:</strong> Angin sangat lemah sehingga bilah hampir tidak berputar. Listrik yang dihasilkan sangat kecil.";

        createWind(5,12);

        window1.classList.remove("active");
        window2.classList.remove("active");

        cable.style.opacity = ".3";
    }

    /* SEPOI */
    else if(value == 1){

        speedText.innerHTML =
        "Sepoi-sepoi";

        blades.style.animationDuration =
        "6s";

        principle.innerHTML =
        "<strong>Prinsip:</strong> Angin mulai memutar bilah dan generator mulai menghasilkan listrik.";

        createWind(15,7);

        window1.classList.add("active");
        window2.classList.add("active");

        cable.style.opacity = "1";
    }
    /* SEDANG */
    else if(value == 2){

        speedText.innerHTML =
        "Sedang";

        blades.style.animationDuration =
        "3s";

        principle.innerHTML =
        "<strong>Prinsip:</strong> Turbin berputar stabil dan menghasilkan listrik lebih besar.";

        createWind(30,4);

        window1.classList.add("active");
        window2.classList.add("active");

        cable.style.opacity = "1";
    }

    /* KENCANG */
    else{

        speedText.innerHTML =
        "Kencang";

        blades.style.animationDuration =
        "1s";

        principle.innerHTML =
        "<strong>Prinsip:</strong> Angin sangat kuat sehingga turbin menghasilkan energi listrik maksimal.";

        createWind(50,2);

        window1.classList.add("active");
        window2.classList.add("active");

        cable.style.opacity = "1";
    }
}

/* EVENT SLIDER */

slider.addEventListener("input", ()=>{

    updateCondition(slider.value);

});

/* AWAL */

updateCondition(0);