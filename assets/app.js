function toggleFb() {
    document.getElementById("twtr-drawer").style.transitionDelay = "0ms";
    document.getElementById("fb-drawer").style.transitionDelay = "0ms";
    document.getElementById("fb-drawer").classList.toggle("active");
    if (document.getElementById("twtr-drawer").classList.contains("active")) {
        document.getElementById("twtr-drawer").classList.remove("active");
        document.getElementById("fb-drawer").style.transitionDelay = "500ms";
    }
}

function colorFb() {
    document.getElementById("facebookicon").setAttribute("src" , "assets/images/fbcolor.png")
}

function decolorFb() {
    document.getElementById("facebookicon").setAttribute("src" , "assets/images/facebook.png")
}


function toggleTw() {
    document.getElementById("fb-drawer").style.transitionDelay = "0ms";
    document.getElementById("twtr-drawer").style.transitionDelay = "0ms";
    document.getElementById("twtr-drawer").classList.toggle("active");
    if (document.getElementById("fb-drawer").classList.contains("active")) {
        document.getElementById("fb-drawer").classList.remove("active");
        document.getElementById("twtr-drawer").style.transitionDelay = "500ms";
    }
}
function colorTw() {
    document.getElementById("twittericon").setAttribute("src" , "assets/images/twcolor.png")
}

function decolorTw() {
    document.getElementById("twittericon").setAttribute("src" , "assets/images/twitter.png")
}