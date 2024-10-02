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

#### createP
Its a easy way to make a p, with 2 params, text, and style
##### Example:
```javascript
p = createP('Hello, World!','color:blue;background-color:00008B')
```
