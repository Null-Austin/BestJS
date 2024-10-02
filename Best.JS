const Best = { //You can also use, b, B, best, BestJS.
    query: function(selector) {
        return document.querySelector(selector)
    },
    appChild: function(eletoappendto,eletoappend) {
        eletoappendto.appendChild(eletoappend)
    },
    createP: function(text){
        let p = document.createElement('p')
        p.innerText = text
        return p
    }
}

const b = Best //not what you should code like, but its easy, thats what BestJS is for...
const B = b
const best = b
const BestJS = b