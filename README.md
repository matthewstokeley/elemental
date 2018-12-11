## Javascript Elements

`jsElements` contains a couple of methods for handling `DOM` elements.  This library was meant as a very lightweight replacement for `jQuery`, hat tip to `zepto` and other `jQuery` replacement libraries.

The scope of this library covers two different concerns.

1. Classes - programatically changing state with classes. 

2. Elements - `create`, `remove`


## Build

Building the script requires `grunt` and `npm`

```
git clone ...

cd [dir]

npm install && grunt

```

Individual modules can be added or removed from the `Gruntfile.js` `concat` configuration object: `concat.dist.src`.   


## Example

```

var el = jsElements.createElement({
	id: 'id',
	name: 'name'
})

//div.append(el) ...

```

## API Documentation

##### addClassToElements

Accepts an `array` of elements, and a `string` class name, and adds the name with either the `classList` method or the deprecating `className` property of the elements in the array. 

```
// add a `section` class to all `sections` for performative selectors
 jsElements.addClassToElements(Array.prototype.splice.call(document.getElementsTag('section')), 'section');

``` 

##### addClass

Accepts an element and a class name.

```
jsElements.addClass(document.getElementById('id'), 'className');
```

##### createElement

Create an element using the `createElement` method.  Any valid element property is a valid option, for instance `name`, `id`, `value`, etc. 

A full list of element properties is available [here](https://developer.mozilla.org/en-US/docs/Web/API/Element)

```
jsElements.createElement({
    id: 'elementId',
    name: 'elementName'
});
```

##### doesElementHaveClass

Accepts an element and a class name, and returns a boolean.

```
jsElements.hasClass(el, 'mouseIsCurrentlyHovering');
```

##### eachClassElement

Accepts `string` class name and a `function`, and `calls` the function for each element - basically a `map` for elements. 

```
jsElements.eachClassElement('section', (el) => { console.log(el); })
```



##### removeClass

Accepts an element and a class name, and removes the class from the element.

```
jsElements.removeClass(el, 'name');
```


##### removeElement

A backwards-compatible `remove` method.  Accepts an `element` property. 

```
jsElements.removeElement(el);
```

##### stringToElement

Convert an html string to an `element`. 

```
var el = jsElements.stringToElement('<span>a string containing html</span>');
```
