console.log('This is running BestJS')
const Best = { //You can also use, b, B, best, BestJS.
    query: function(selector) {
        return document.querySelector(selector)
    },
    appChild: function(eletoappendto,eletoappend) {
        eletoappendto.appendChild(eletoappend)
    },
    addclass: function(element,classname) {
        element.classList.add(classname)
    },
    removeclass: function(element,classname) {
        element.classList.remove(classname)
    },
    createEle: function(type,html,style) {
        ele = document.createElement(type);
        ele.innerHtml = html
        ele.style = style
        return ele
    }
}

const b = Best //not what you should code like, but its easy, thats what BestJS is for...
const B = b
const best = b
const BestJS = b // best way to run code.