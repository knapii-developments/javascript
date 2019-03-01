# Type Ahead

For Today's challenge we created a type ahead feature. When a user types, we show cities that match along with the population. Check out the final version in my [codePen](https://codepen.io/knapii-developer/pen/WPavdR)

 We're provided with an end point that's saved as the variable const.

``` javascript
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

```

First things first we need to fetch the data. The data that's returned is an array. So I created variable 'cities',  that will stores the data we get from the endpoint. Then I used fetch API.

###### **Sidenote- A Learning moment on fetch Api**

###### fetch returns a promise. Call .then() for our callback to do some processing. The raw data we get back needs to be converted to JSON by calling .json() on the data. The .json() function returns a promise so just like before we call the .then() function.


``` javascript
fetch(endpoint)
.then(data => data.json())
.then(data => cities.push(...data));

```

Take notice how I used the spread operator to push the data into the cities array.

Next lets create a function that finds locations that matches the user input. We create a RegExp object and use the .match() function and filter through the cities array to return matches.

```javascript

function findMatches(){
  const regex = new RegEx(placeToMatch, 'gi')
  return cities.filter(place => {

    return place.city.match(regex) || place.state.match(regex);
  })
}
```

Variables searchInput holds input from the search input tag and suggestions holds dom elements that we'll display suggestions.

```javascript
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions')
```

'displayMatches' is a function to display our suggestions. First I call the function findMatches(). I then map over the returned values. While mapping I create a regEx object from the user input (this.value). I replace the city and state key values with a span tag with class of 'hl' so match is highlighted. I return both span tags in a <li>. Since the map function returns an array, I use .join() to return a string. I insert the newly created html into to the suggestions using innerHTML.

```javascript
function displayMatches(){
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegEx(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl"> ${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl"> ${this.value}</span>`);
    return `
    <li>
    <span class ='name'> ${cityName}, ${stateName}</span>
    <span class ='population'> ${place.population}</span>
    </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}
```

Now I add an event listener is listen for the change and and keyup event  on the search input.

###### **Sidenote- A Learning moment on change Event**

###### The Change event is fired when the user has submitted whatever information, or in this case clicks outside of the input. That's why we added the keyup Event

```javascript
searchInput.addEventListener('change',displayMatches);
searchInput.addEventListener('keyup',displayMatches);
```


## Resources
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
