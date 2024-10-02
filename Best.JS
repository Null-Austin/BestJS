const best = {
    query: function(selector) {
        return document.querySelector(selector)
    },
    appchild: function(eletoappendto,eletoappend) {
        eletoappendto.appendChild(eletoappend)
    }
}