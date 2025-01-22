
//hämtar meny knappen
const menuButton = document.getElementById("menu-button");

//hämtar värdena i forms och kontrollerar att de e text i och ger bekräftande alerter
function submitFunction() {

    let name = document.forms["form"]["name"].value;
    let msg = document.forms["form"]["msg"].value;

    //kontroll
    if (name != "" && msg != "") {
        alert("Ditt meddelande har skickats!");
    }
    else {
        alert("Du måste fylla i med text");
    }

}
//sätter igång hamburgarmeny knappen för mobiler
function menuHandler() {

    document.getElementById("nav-links").classList.toggle('active');

}
menuButton.addEventListener('click', menuHandler)

//gömmer artiklar som ej är med i filtreringen
function filterHandler() {

    let filterBGrafic = document.getElementById("grafik");
    let filterBProg = document.getElementById("programmering");
    let filterBDesign = document.getElementById("design");
    let articles = document.getElementById("articles");

    //loopar igenom alla articles samt dess komponenter och gömmer dem
    for (const child of articles.children) {
        child.style.visibility = "hidden";
        child.style.position = "absolute";
    }

    //if satser som gör de valda artiklarna synliga
    if (filterBGrafic.checked) {
        for (const child of articles.children) {

            if (child.classList.contains("filter-grafik")) {
                child.style.visibility = "visible";
                child.style.position = "relative";
            }

        }
    }

    if (filterBProg.checked) {
        for (const child of articles.children) {

            if (child.classList.contains("filter-programmering")) {
                child.style.visibility = "visible";
                child.style.position = "relative";
            }

        }
    }

    if (filterBDesign.checked) {
        for (const child of articles.children) {

            if (child.classList.contains("filter-design")) {
                child.style.visibility = "visible";
                child.style.position = "relative";
            }

        }
    }

}