# HTML5 canvas

Today the challenge involves working with Canvas. Overall we just want to be able to draw on the canvas. Check out the final product in my [codePen](https://codepen.io/knapii-developer/pen/rPqVGd)

First things first, we're going to grab the canvas element using querySelector. When working with canvas, you actually draw on a context. You can draw in 2D or 3D. I use the getContext() function to get a drawing context object for the canvas. I also set the canvas height and width along with other context properties.

```javaScript
const canvas= document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = '100';
ctx.globalCompositeOperation = 'multiply';
```

I've created a flag variable 'isDrawing' that will indicate wether the mouse is being pressed down (drawing mode if you will) or up (false, or not drawing). I also have variables lastX and lastY which will let us know what coordinates we're drawing on.  Then I have variables hue and direction.

```javaScript
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
```

We create a function draw() to handle drawing functionality. In the event that variable inDrawing is true we call canvas methods .beginPath. .moveTO() and .stroke().
I pass variables lastX and lastY into the .moveTo() method. I pass e.offsetX and e.offsetY into the .lineTo() method. Afterwords I update lastX and lastY to equal e.offsetX and e.offsetY respectively. I also set the strokeStyle and increment the hue variables. When the hue variable reaches 360, I reset it. Then if the lineWidth is greater than 100 or less I switch the value of the direction variable than 1 I flip the way I increment the lineWidth property.

```javaScript
function draw(e){
  if(!isDrawing){
    return;
  }
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.lineWidth = hue;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if(hue >= 360){
    hue = 0
  }
  if(ctx.lineWidth >= 100 ||  ctx.lineWidth <=1){
    direction = !direction
  }
  if(direction){
    ctx.lineWidth++;
  }else{
    ctx.lineWidth--;
  }
}
```

During the mouseDown event we need to update variables lastX and lastY to the current position on the mouse.

```javaScript
canvas.addEventListener('mousedown',(e) => {
  isDrawing=true
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
```

For other mouse events we need to set variable isDrawing or call the draw method by adding an  event listener.

```javaScript
canvas.addEventListener('mouseup',() => isDrawing=false);
canvas.addEventListener('mouseout',() => isDrawing=false);
canvas.addEventListener('mousemove', draw);
```
