### TOC  
[Welcome](#welcome)  
[Docs](#docs)  




# Welcome <a id='welcome'></a>
Welcome! to my wonderful JS libary, lets stop my yappin, and start my code?...
## How to use
If your wondering how to use this awesome libary! You have a few methods but one:
#### Script tag
```html
<script src="https://cdn.jsdelivr.net/gh/Null-Austin/BestJS/Best.JS"></script>
```


# Docs <a id='docs'></a>
## Functions
### `Best.query(selector)`
* Returns the first element that matches the specified `selector`.
* Example: `Best.query('#myId')`

### `Best.appChild(eletoappendto, eletoappend)`
* Appends `eletoappend` to `eletoappendto`.
* Example: `Best.appChild(document.body, document.createElement('div'))`

### `Best.addclass(element, classname)`
* Adds the specified `classname` to the `element`.
* Example: `Best.addclass(document.body, 'my-class')`

### `Best.removeclass(element, classname)`
* Removes the specified `classname` from the `element`.
* Example: `Best.removeclass(document.body, 'my-class')`

### `Best.ce(type, html, stylecode)`
* Creates a new element of type `type` with the specified `html` content and `stylecode` styles.
* Example: `Best.ce('div', 'Hello World!', 'color: red;')`

### `Best.clog(message)`
* Logs the specified `message` to the console.
* Example: `Best.clog('Hello World!')`

### `Best.testbestjs()`
* Tests the BestJS library by displaying an alert box with the library version.
* Example: `Best.testbestjs()`

### `Best.iframeC(url)`
* Creates a new iframe element with the specified `url` as its source.
* Example: `Best.iframeC('https://example.com')`

### `Best.randomstr(length)`
* Generates a random string of the specified `length`.
* Example: `Best.randomstr(10)`

### `Best.randomint(min, max, rounded)`
* Generates a random integer between `min` and `max`.
* If `rounded` is `true`, the result is rounded to the nearest integer.
* Example: `Best.randomint(1, 10, true)`

### `Best.getdate()`
* Returns the current date in the format `mm-dd-yyyy`.
* Example: `Best.getdate()`

## Aliases
BestJS can be accessed using the following aliases:
* `b`
* `B`
* `best`
* `BestJS`
