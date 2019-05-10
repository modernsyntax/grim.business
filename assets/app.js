function toggleFb() {
    document.getElementById("twtr-drawer").style.transitionDelay = "0ms";
    document.getElementById("fb-drawer").style.transitionDelay = "0ms";
    document.getElementById("fb-drawer").classList.toggle("active")
    if ( document.getElementById("twtr-drawer").classList.contains("active")) {
        document.getElementById("twtr-drawer").classList.remove("active")
        document.getElementById("fb-drawer").style.transitionDelay = "500ms";
    }
}

function toggleTw() {
    document.getElementById("fb-drawer").style.transitionDelay = "0ms";
    document.getElementById("twtr-drawer").style.transitionDelay = "0ms";
    document.getElementById("twtr-drawer").classList.toggle("active")
    if ( document.getElementById("fb-drawer").classList.contains("active")) {
        document.getElementById("fb-drawer").classList.remove("active")
        document.getElementById("twtr-drawer").style.transitionDelay = "500ms";
    }
}