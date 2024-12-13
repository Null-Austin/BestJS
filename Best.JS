const Best = { //You can also use, b, B, best, BestJS. A lot of the code, i did not make myself, that i edited.
    version: 1.2,
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
    ce: function(type,html,stylecode) {
        ele = document.createElement(type);
        ele.innerHTML = html
        ele.style = stylecode
        return ele
    },
    clog: function(message){
        console.log(message)
    },
    testbestjs: function(){
        alert('Well, if your wondering, well its working. (' + Best.version + ')')
    },
    iframeC: function(url){ //will anyone notice, my childhood?
        ifunny = document.createElement('iframe')
        ifunny.src = url
        return ifunny
    },
    randomstr: function(length){ //credits to this guy: https://stackoverflow.com/a/1349426/25018387
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    },
    randomint: function(min,max,rounded){ //credits to the hard working souls here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
        rounded = rounded || false
        rst = Math.random() * (max - min) + min;
        if (rounded == false){
            return rst
        }
        return(Math.round(rst))
    },
    getdate: function(){ //https://stackoverflow.com/a/4929629/25018387
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '-' + dd + '-' + yyyy;
        return today;
    }
}

//i just realized something, you cant set b/B/best/BestJS to anything, cause, i already made it a const, imagine...

const b = Best //not what you should code like, but its easy, thats what BestJS is for...
let B = b
let best = b
let BestJS = b // best way to run code.

console.log('Howdy from BestJS, ' + Best.version)
