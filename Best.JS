
bjsversion = 1.1

console.log('Howdy from BestJS, ' + bjsversion)
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
    },
    clog: function(message){
        console.log(message)
    },
    testbestjs: function(){
        alert('Well, if your wondering, well its working. (' + bjsversion + ')')
    },
    iframeC: function(url){ //will anyone notice, my childhood?
        ifunny = createElement('iframe')
        ifunny.src = url
        return ifunny
    }
}

//i just realized something, you cant set b/B/best/BestJS to anything, cause, i already made it a const, imagine...

const b = Best //not what you should code like, but its easy, thats what BestJS is for...
const B = b 
const best = b
const BestJS = b // best way to run code.