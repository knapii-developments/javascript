# Holding Shift to select multiple Check Checkboxes

For today's challenge when a user clicks a checkbox, holds Shift, and then clicks another checkbox a few rows down, all the checkboxes in between those two checkboxes should be checked. Check out the final product in my [codePen](https://codepen.io/knapii-developer/pen/pYgzeY)

First things first let's grab all the checkboxes and save them to a variable and add an event listener to each checkbox for when we check the boxes. We'll also need a way to save the last check box we checked. So I'll store that in a variable :

``` JavaScript
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

checkboxes.forEach(checkBox => checkBox.addEventListener('click',handleClick));
```
###### **Sidenote- A Learning moment**

I learned today about square brackets when using the query selector. Square brackets are used to target attributes/properties and require a string.


Next, in the handleClick function I put the logic for how the checkboxes should behave when then shift key is down. I check to see if the current check box is clicked and if the shift key is being held down. If it is and variable lastChecked has been set, I iterate thru each of the check boxes. I know the current check box is between the start and and last checked box because of the variable isInBetween. I set variable isInBetween to true when the current checked box is equal to either variable lastChecked or this. If isInBetween is true I check the current check box. If lastChecked hasn't been set I know it's the first check box that has been clicked.

``` JavaScript
function handleClick(e){
  let isInBetween = false;
  //Check to see if shiftKey is pressed and if checkBox is checked
  if(e.shiftKey && this.checked){
    //check to see if we've selected at least one checkBox
    if(lastChecked){
      //iterate through checkBoxes array and check checkboxes
      //between two check checkBoxes
      checkboxes.forEach(checkBox =>{
        if (checkBox === this || checkBox === lastChecked){
          isInBetween = !isInBetween;
        }
        if (isInBetween){
          checkBox.checked =isInBetween;
        }
      }
      )
    }
  }
  lastChecked = this;

}
```
