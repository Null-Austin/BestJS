# BestJS
Its a javascript libary, that im working on, to make coding easier, efficent and (hopefully) more fun, and not stressful.
## Prefixes,
You can use:
 - b
 - B
 - best
 - Best
 - BestJS
## Functions
Some functions
#### query
query, is just a quick method to `document.querySelector()`
##### Example:
```javascript
const body = b.query('body')
```
param is what it should query

#### appChild
query, is also another quick method, to `elem.appendChild(elem2)`
##### Example:
```javascript
const body = b.query('body')

p = document.createElement('p')

b.appChild(body,p)
```
1st param, is what it should append to. and 2nd, is what it should append

#### addclass
fast to add a class
##### Example:
```javascript
b.addclass(element,class)
```
#### removeclass
fast to <s>add</s> remove a class
##### Example:
```javascript
b.removeclass(element,class)
```
#### clog
Want to log, without console.log?
##### Example:
```javascript
b.clog(message)
```

#### testbestjs
alerts you that its working, with version #
##### Example:
```javascript
b.testbestjs()
```

#### iframeC
make a iframe, with src.
##### Example:
```javascript
b.iframeC(url)
```