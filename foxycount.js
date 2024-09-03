const chars = [
    //Diamantes
    { name: "Bartolomew Kuma", image: "Img/Medals/Kuma.png", class: ["Especialista", "Tanque", "Fruta del Diablo", "Pelo Negro", "Shichibukai", "Realeza"] },
    { name: "Boa Hancock", image: "Img/Medals/Hancock.png", class: ["Luchador", "DPS", "Fruta del Diablo", "Pelo Negro", "Shichibukai", "Mujer", "Realeza"] },
    //{ name: "Borsalino Kizaru", image: "Img/Medals/Kizaru.png", class: ["Tirador", "Especialista", "DPS", "Fruta del Diablo", "Marine", "Pelo Negro"] },
    { name: "Doflamingo", image: "Img/Medals/Doflamingo.png", class: ["Tirador", "Especialista", "DPS", "Pelo Rubio", "Fruta del Diablo", "Shichibukai", "Realeza"] },
    { name: "Mihawk", image: "Img/Medals/Mihawk.png", class: ["Espadachin", "DPS", "Pelo Negro", "Shichibukai"] },
    //{ name: "Emporio Ivankov", image: "Img/Medals/Ivankov.png", class: ["Luchador", "Soporte", "Fruta del Diablo"] },
    //{ name: "Enel", image: "Img/Medals/Enel.png", class: ["Tirador", "Especialista", "DPS", "Fruta del Diablo", "Pelo Rubio", "Fruta del Diablo"] },
    { name: "Jinbe", image: "Img/Medals/Jinbe.png", class: ["Luchador", "Tanque", "Mugiwara", "Pelo Negro", "Shichibukai", "Gyojin"] },
    { name: "Marshall D. Teach", image: "Img/Medals/Barbanegra.png", class: ["Especialista", "Bruiser", "Fruta del Diablo", "Pelo Negro"] },
    { name: "Marco", image: "Img/Medals/Marco.png", class: ["Luchador", "Especialista", "Soporte", "Pelo Rubio", "Fruta del Diablo"] },
    { name: "Portgas D. Ace", image: "Img/Medals/Ace.png", class: ["Tirador", "Especialista", "DPS", "Fruta del Diablo", "Pelo Negro"] },
    //{ name: "Sabo", image: "Img/Medals/Sabo.png", class: ["Luchador", "Especialista", "DPS", "Fruta del Diablo", "Pelo Rubio"] },
    { name: "Shanks", image: "Img/Medals/Shanks.png", class: ["Espadachin", "Bruiser", "Pelo Rojo"] },

    //Oros
    //{ name: "Baby 5", image: "Img/Medals/Baby5.png", class: ["DPS", "Tirador", "Espadachin", "Fruta del Diablo", "Mujer", "Pelo Negro"] },
    { name: "Bartolomeo", image: "Img/Medals/Bartolomeo.png", class: ["Especialista", "DPS", "Fruta del Diablo", "Pelo Verde"] },
    { name: "Basil Hawkins", image: "Img/Medals/Hawkins.png", class: ["Especialista", "Bruiser", "Fruta del Diablo", "Supernova", "Pelo Rubio"] },
    { name: "Bastille", image: "Img/Medals/Bastille.png", class: ["Espadachin", "Tanque", "Marine", "Pelo Rojo"] },
    //{ name: "Bellamy", image: "Img/Medals/Bellamy.png", class: ["Luchador", "DPS", "Fruta del Diablo"] },
    { name: "Jewelry Bonney", image: "Img/Medals/Bonney.png", class: ["Luchador", "Soporte", "Fruta del Diablo", "Supernova", "Mujer", "Realeza"] },
    { name: "Brook", image: "Img/Medals/Brook.png", class: ["Espadachin", "Soporte", "Fruta del Diablo", "Mugiwara", "Pelo Negro"] },
    { name: "Capone Gang Bege", image: "Img/Medals/Capone.png", class: ["Tirador", "DPS", "Supernova", "Fruta del Diablo", "Pelo Negro"] },
    //{ name: "Carrot", image: "Img/Medals/Carrot.png", class: ["Espadachin", "Especialista", "DPS", "Mujer"] },
    { name: "Tony Tony Chopper", image: "Img/Medals/Chopper.png", class: ["Luchador", "Soporte", "Fruta del Diablo", "Mugiwara"] },
    //{ name: "Crocodile", image: "Img/Medals/Crocodile.png", class: ["Especialista", "Tanque", "Fruta del Diablo", "Shichibukai", "Pelo Negro"] },
    { name: "Dalmatian", image: "Img/Medals/Dalmatian.png", class: ["Espadachin", "Bruiser", "Marine", "Fruta del Diablo"] },
    { name: "Franky", image: "Img/Medals/Franky.png", class: ["Tirador", "Bruiser", "Mugiwara"] },
    //{ name: "Gecko Moria", image: "Img/Medals/Moria.png", class: ["Espadachin", "Soporte", "Fruta del Diablo", "Shichibukai"] },
    { name: "Hina", image: "Img/Medals/Hina.png", class: ["Luchador", "Bruiser", "Fruta del Diablo", "Marine", "Mujer"] },
    //{ name: "Jesus Burgess", image: "Img/Medals/Jesus.png", class: ["Luchador", "Tanque"] },
    { name: "Eustass Kid", image: "Img/Medals/Kid.png", class: ["Tirador", "Tanque", "Fruta del Diablo", "Supernova", "Pelo Rojo"] },
    { name: "Killer", image: "Img/Medals/Killer.png", class: ["Espadachin", "DPS", "Supernova", "Pelo Rubio"] },
    { name: "Koala", image: "Img/Medals/Koala.png", class: ["Luchador", "DPS", "Mujer", "Pelo Naranja"] },
    { name: "Leo e Mansherry", image: "Img/Medals/Leo.png", class: ["Especialista", "Soporte", "Realeza", "Fruta del Diablo", "Mujer", "Pelo Rubio"] },
    { name: "Monkey D. Luffy", image: "Img/Medals/Luffy.png", class: ["Bruiser", "Luchador", "Fruta del Diablo", "Mugiwara", "Pelo Negro", "Supernova"] },
    { name: "Nami", image: "Img/Medals/Nami.png", class: ["Especialista", "DPS", "Mugiwara", "Mujer", "Pelo Naranja"] },
    //{ name: "Perona", image: "Img/Medals/Perona.png", class: ["Especialista", "Soporte", "Fruta del Diablo", "Mujer"] },
    { name: "Rebecca", image: "Img/Medals/Rebecca.png", class: ["Espadachin", "Tanque", "Realeza", "Mujer"] },
    { name: "Nico Robin", image: "Img/Medals/Robin.png", class: ["Especialista", "DPS", "Fruta del Diablo", "Mugiwara", "Mujer", "Pelo Negro"] },
    { name: "Roronoa Zoro", image: "Img/Medals/Zoro.png", class: ["Espadachin", "Bruiser", "Mugiwara", "Pelo Verde", "Supernova"] },
    //{ name: "Ryuma", image: "Img/Medals/Ryuma.png", class: ["Espadachin", "DPS"] },
    { name: "Scratchmen Apoo", image: "Img/Medals/Apoo.png", class: ["Tirador", "Soporte", "Supernova", "Fruta del Diablo", "Pelo Naranja"] },
    { name: "Smoker", image: "Img/Medals/Smoker.png", class: ["Luchador", "Tanque", "Fruta del Diablo", "Marine", "Pelo Blanco"] },
    { name: "Trafalgar Law", image: "Img/Medals/Law.png", class: ["Especialista", "Espadachin", "DPS", "Fruta del Diablo", "Supernova", "Pelo Negro"] },
    { name: "Urouge", image: "Img/Medals/Urouge.png", class: ["Luchador", "Tanque", "Fruta del Diablo", "Supernova", "Pelo Negro"] },
    { name: "Usopp", image: "Img/Medals/Usopp.png", class: ["Tirador", "DPS", "Mugiwara", "Pelo Negro"] },
    //{ name: "Van Augur", image: "Img/Medals/Van_augur.png", class: ["Tirador", "DPS"] },
    { name: "Vinsmoke Ichiji", image: "Img/Medals/Ichiji.png", class: ["Bruiser", "Luchador", "Realeza", "Pelo Rojo"] },
    { name: "Vinsmoke Niji", image: "Img/Medals/Niji.png", class: ["Tirador", "DPS", "Realeza"] },
    { name: "Vinsmoke Reiju", image: "Img/Medals/Reiju.png", class: ["Soporte", "Especialista", "Realeza", "Mujer"] },
    { name: "Vinsmoke Sanji", image: "Img/Medals/Sanji.png", class: ["Luchador", "DPS", "Mugiwara", "Realeza", "Pelo Rubio"] },
    { name: "Vinsmoke Yonji", image: "Img/Medals/Yonji.png", class: ["Luchador", "Tanque", "Realeza", "Pelo Verde"] },
    { name: "X Drake", image: "Img/Medals/Drake.png", class: ["Luchador", "Bruiser", "Fruta del Diablo", "Supernova", "Marine", "Pelo Naranja"] },

    //Platas
    { name: "Arlong", image: "Img/Medals/Arlong.png", class: ["Luchador", "Bruiser", "Gyojin", "Pelo Negro"] },
    //{ name: "Bepo", image: "Img/Medals/Bepo.png", class: ["Luchador", "DPS", "Pelo Blanco"] },
    //{ name: "Bon Clay", image: "Img/Medals/Mr2.png", class: ["Luchador", "DPS", "Fruta del Diablo", "Pelo Negro"] },
    { name: "Buggy", image: "Img/Medals/Buggy.png", class: ["Tirador", "DPS", "Fruta del Diablo", "Buggy"] },
    //{ name: "Daddy Masterson", image: "Img/Medals/Daddy.png", class: ["Tirador", "DPS", "Marine", "Pelo Negro"] },
    //{ name: "Daz Bonez", image: "Img/Medals/Mr1.png", class: ["Espadachin", "Tanque", "Fruta del Diablo"] },
    //{ name: "Zala", image: "Img/Medals/Doublefinger.png", class: ["Espadachin", "Bruiser", "Fruta del Diablo", "Mujer"] },
    { name: "Don Krieg", image: "Img/Medals/Krieg.png", class: ["Tirador", "DPS", "Armada"] },
    { name: "Kuro", image: "Img/Medals/Kuro.png", class: ["Espadachin", "DPS", "Black Cats", "Pelo Negro"] },
    //{ name: "Galdino", image: "Img/Medals/Mr3.png", class: ["Especialista", "Soporte", "Fruta del Diablo", "Pelo Negro"] },
    { name: "Tashigi", image: "Img/Medals/Tashigi.png", class: ["Espadachin", "DPS", "Marine"] },
    { name: "Nefertari Vivi", image: "Img/Medals/Vivi.png", class: ["Espadachin", "Soporte", "Realeza"] },
    //{ name: "Wapol", image: "Img/Medals/Wapol.png", class: ["Tirador", "Tanque", "Fruta del Diablo"] },

    //Bronzes
    { name: "Alvida", image: "Img/Medals/Alvida.png", class: ["Luchador", "Soporte", "Fruta del Diablo", "Buggy", "Pelo Negro"] },
    { name: "Buchi y Sham", image: "Img/Medals/Buchi.png", class: ["Espadachin", "Bruiser", "Black Cats", "Pelo Verde"] },
    { name: "Cabaji", image: "Img/Medals/Cabaji.png", class: ["Espadachin", "DPS", "Buggy", "Pelo Negro"] },
    { name: "Chew", image: "Img/Medals/Chew.png", class: ["Tirador", "DPS", "Gyojin", "Pelo Rubio"] },
    { name: "Eric", image: "Img/Medals/Eric.png", class: ["Espadachin", "Tirador", "DPS", "Fruta del Diablo"] },
    { name: "Gin", image: "Img/Medals/Gin.png", class: ["Luchador", "Tirador", "DPS", "Armada", "Pelo Negro"] },
    //{ name: "Marianne", image: "Img/Medals/GoldenWeek.png", class: ["Especialista", "Soporte", "Mujer"] },
    { name: "Hatchan", image: "Img/Medals/Hatchan.png", class: ["Espadachin", "Soporte", "Gyojin", "Pelo Blanco"] },
    { name: "Jango", image: "Img/Medals/Jango.png", class: ["Tirador", "Soporte", "Black Cats"] },
    { name: "Kuroobi", image: "Img/Medals/Kuroobi.png", class: ["Luchador", "Tanque", "Gyojin", "Pelo Negro"] },
    { name: "Mohji", image: "Img/Medals/Mohji.png", class: ["Especialista", "Bruiser", "Buggy", "Pelo Blanco"] },
    { name: "Morgan", image: "Img/Medals/Morgan.png", class: ["Espadachin", "Bruiser", "Marine", "Pelo Rubio"] },
    //{ name: "Babe & Drophy", image: "Img/Medals/Mr4.png", class: ["Tirador", "Bruiser"] },
    //{ name: "Gem & Mikita", image: "Img/Medals/Mr5.png", class: ["Tirador", "DPS", "Fruta del Diablo", "Pelo Negro"] },
    { name: "Pearl", image: "Img/Medals/Pearl.png", class: ["Luchador", "Especialista", "Tanque", "Armada", "Pelo Negro"] },
    /*{ name: "Satori", image: "Img/Medals/Satori.png", class: ["Enel"] },
    { name: "Gedatsu", image: "Img/Medals/Gedatsu.png", class: ["Enel"] },
    { name: "Ohm", image: "Img/Medals/Ohm.png", class: ["Enel"] },
    { name: "Shura", image: "Img/Medals/Shura.png", class: ["Enel"] },*/
]
const espadachinB = document.getElementById("espadachin");
const luchadorB = document.getElementById("luchador");
const tiradorB = document.getElementById("tirador");
const especialistaB = document.getElementById("especialista");
const soporteB = document.getElementById("soporte");
const bruiserB = document.getElementById("bruiser");
const dpsB = document.getElementById("dps");
const tanqueB = document.getElementById("tanque");
const marineB = document.getElementById("marine");
const realezaB = document.getElementById("realeza");
const mugiwaraB = document.getElementById("mugiwara");
const supernovaB = document.getElementById("supernova");
const pelonegroB = document.getElementById("pelonegro");
const pelorubioB = document.getElementById("pelorubio");
const peloblancoB = document.getElementById("peloblanco");
const pelonaranjaB = document.getElementById("pelonaranja");
const peloverdeB = document.getElementById("peloverde");
const pelorojoB = document.getElementById("pelorojo");
const blackcatsB = document.getElementById("blackcats");
const buggyB = document.getElementById("buggy");
const armadaB = document.getElementById("armada");
const gyojinB = document.getElementById("gyojin");

function addCharToList() {
    var charListDiv = document.querySelector(".chars");

    chars.forEach(function (character) {
        var charDiv = document.createElement("div");
        charDiv.classList.add("char");
        charDiv.style.backgroundImage = `url('${character.image}')`;

        var textElement = document.createElement("p");
        textElement.innerText = character.name;
        textElement.classList.add("title");

        charDiv.appendChild(textElement);

        charListDiv.appendChild(charDiv);
    });
}

let activeFilter = null;

function toggleFilter(filter) {
    if (activeFilter === filter) {
        activeFilter = null;
    } else {
        activeFilter = filter;
    }
}

function filterChars() {
    var allChars = document.querySelectorAll('.char');
    allChars.forEach(function (char) {
        char.style.display = 'none';
    });

    var filteredChars = document.querySelectorAll('.char');
    filteredChars.forEach(function (char) {
        var charData = chars.find(function (character) {
            return character.name === char.querySelector('p').innerHTML;
        });

        var showChar = true;
        if (activeFilter && !charData.class.includes(activeFilter)) {
            showChar = false;
        }

        if (showChar) {
            char.style.display = 'flex';
        }
    });
}

function handleFilterButtonClick(filter, button) {
    toggleFilter(filter);
    filterChars();

    // Reset styles for all buttons
    var allButtons = document.querySelectorAll('.cont');
    allButtons.forEach(function (btn) {
        btn.classList.remove('bordeCont'); // Remover la clase 'bordeCont' de todos los botones
    });

    // Apply styles to the active button
    if (activeFilter === filter) {
        button.classList.add('bordeCont');
    }else{
        button.classList.remove('bordeCont');
    }
}

espadachinB.addEventListener("click", function () {
    handleFilterButtonClick("Espadachin", espadachinB);
});

luchadorB.addEventListener("click", function () {
    handleFilterButtonClick("Luchador", luchadorB);
});

tiradorB.addEventListener("click", function () {
    handleFilterButtonClick("Tirador", tiradorB);
});

especialistaB.addEventListener("click", function () {
    handleFilterButtonClick("Especialista", especialistaB);
});

soporteB.addEventListener("click", function () {
    handleFilterButtonClick("Soporte", soporteB);
});

bruiserB.addEventListener("click", function () {
    handleFilterButtonClick("Bruiser", bruiserB);
});

dpsB.addEventListener("click", function () {
    handleFilterButtonClick("DPS", dpsB);
});

tanqueB.addEventListener("click", function () {
    handleFilterButtonClick("Tanque", tanqueB);
});

marineB.addEventListener("click", function () {
    handleFilterButtonClick("Marine", marineB);
});

realezaB.addEventListener("click", function () {
    handleFilterButtonClick("Realeza", realezaB);
});

mugiwaraB.addEventListener("click", function () {
    handleFilterButtonClick("Mugiwara", mugiwaraB);
});

supernovaB.addEventListener("click", function () {
    handleFilterButtonClick("Supernova", supernovaB);
});

pelonegroB.addEventListener("click", function () {
    handleFilterButtonClick("Pelo Negro", pelonegroB);
});

pelorubioB.addEventListener("click", function () {
    handleFilterButtonClick("Pelo Rubio", pelorubioB);
});

peloblancoB.addEventListener("click", function () {
    handleFilterButtonClick("Pelo Blanco", peloblancoB);
});

pelonaranjaB.addEventListener("click", function () {
    handleFilterButtonClick("Pelo Naranja", pelonaranjaB);
});
peloverdeB.addEventListener("click", function () {
    handleFilterButtonClick("Pelo Verde", peloverdeB);
});
pelorojoB.addEventListener("click", function () {
    handleFilterButtonClick("Pelo Rojo", pelorojoB);
});
blackcatsB.addEventListener("click", function () {
    handleFilterButtonClick("Black Cats", blackcatsB);
});

buggyB.addEventListener("click", function () {
    handleFilterButtonClick("Buggy", buggyB);
});

armadaB.addEventListener("click", function () {
    handleFilterButtonClick("Armada", armadaB);
});

gyojinB.addEventListener("click", function () {
    handleFilterButtonClick("Gyojin", gyojinB);
});

window.addEventListener("load", addCharToList);

document.querySelector('.rot-bt').addEventListener('click', () => {
    window.location.replace('index.html')
})