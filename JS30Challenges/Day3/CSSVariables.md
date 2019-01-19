# CSS Variables

Day 3 challenge has to deal with using CSS custom properties (Variables).
Just like in JS, styles sheets can contain values that will be reused throughout the document.
Instead of re-writting that value, we can just store it as a value.

Check out the final results in my [codePen](https://codepen.io/knapii-developer/pen/YdmeOJ). Also, the [source code](https://github.com/knapii-developments/javascript/blob/master/JS30Challenges/Day3/CSSVariablesCode.html)

### Solution

For this challenge we need to use CSS properties to update the space, blur, and base color
as the user interacts with the page. The "JS" at the top of the page should change color and match the Base Color.

To get started we declare a variable for base, spacing and blur like this:

```
:root{
  --base:#ffc600;
  --spacing: 10px;
  --blur: 10px;
}
```

###### **Sidenote- A Learning moment**

###### Being new, I didn't know what the filter property was so I took the time to check it out. Overall, it's a visual effect that allows us to use CSS functions such as blur and color shifting on elements before they render. They're commonly used on images, background, or borders.

We now need to write JavaScipt that will update the CSS variables as they change. First things first,
lets grab the inputs and CSS variables:

```javascript
let root = document.documentElement;
var controlInputs = document.querySelectorAll('.controls input');
```

######  **Sidenote- A Learning moment**

###### Please note that querySelector returns a NodeList and not an Array. During my coding I thought the return value was of type array.

Now we need think about what event we need to update the CSS variables. The Change and mousemove
events will be appropriate for the challenge. We want to add this event and a function that handles the event to each of the elements in the
controlInputs NodeList. We use the forEach function to iterate through each element in the NodeList.

```javascript
controlInputs.forEach( (input) => {
    input.addEventListener("change", setCSSVariableHandler);
     input.addEventListener('mousemove', setCSSVariableHandler);
     })
```

###### **Sidenote- A Learning moment**
###### It's worth noting for <input> types with a 'color' value, there are 2 events that can detect a change: input and change. The difference here is that the input event doesn't support the color well and is looking for a string value from the RGB slider. On the other hand the color event is invoked when the user is selecting a color from the color well.

 Function setCSSVariableHandler takes in an event and sets our CSS variables. Here we named our inputs
 after the variable and we just need to prefix the name with "--" to call the variable and add any suffixes.
 Luckily the suffix has been provided in a data attribute "data-sizing" and can be accessed by .data.sizing.

```javascript
 function setCSSVariableHandler(e){
    const suffix = this.dataset.sizing || '';
     root.style.setProperty(`--${this.name}`, this.value+suffix);

   }
```

### Resources
- https://developer.mozilla.org/en-US/docs/Web/CSS/filter
- https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color
