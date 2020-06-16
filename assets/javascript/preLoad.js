var load;

function preLoad() {
    load = setTimeout(show, 1000);
}

function show() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("mainSite").style.display = "block";
}