const ps = document.querySelectorAll("p")

ps.forEach(function(ps) {
    console.log(ps.textContent.indexOf("the"))
    if (ps.textContent.indexOf("the") > -1){
        ps.remove()
    }
})