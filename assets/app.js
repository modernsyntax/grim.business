function toggleFb() {
    document.getElementById("fb-drawer").classList.toggle("nonactive")
    document.getElementById("twtr-drawer").classList.contains("nonactive")
    if ( !document.getElementById("twtr-drawer").classList.contains("nonactive")) {
        document.getElementById("twtr-drawer").classList.toggle("nonactive")
    }
    else {
        document.getElementById("twtr-drawer").classList.toggle("transdelay")
    }
}
function toggleTw() {
    document.getElementById("twtr-drawer").classList.toggle("nonactive")
    document.getElementById("fb-drawer").classList.contains("nonactive")
    if ( !document.getElementById("fb-drawer").classList.contains("nonactive")) {
        document.getElementById("fb-drawer").classList.toggle("nonactive")
    }
    else {
        document.getElementById("fb-drawer").classList.toggle("transdelay")
    }
}
