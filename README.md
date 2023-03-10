# "Fortune cookie"

This is a solution to the "Fortune cookie" project of Rocket Seat's Explorer course.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
 - [Author](#author)


## Overview

### The challenge

Users should be able to:

- Preview an animation when hovering over the cookie
- Click on the cookie to open it
- View a message when opening the cookie
- Return to previous page
- View a different message when clicking the cookie again


### Screenshot

![](https://github.com/carolmedici/fortune-cookie/blob/main/assets/images/print.png)
![](https://github.com/carolmedici/fortune-cookie/blob/main/assets/images/print2.png)


### Links

- Solution URL: [https://github.com/carolmedici/fortune-cookie](https://github.com/carolmedici/fortune-cookie)
- Live Site URL: [https://carolmedici.github.io/fortune-cookie/](https://carolmedici.github.io/fortune-cookie/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Animations with CSS
- JavaScript functions
- DOM Manipulation
- Arrays
- JS Math() library

### What I learned

I learned how to use CSS animations and got more practice using arrays and the JS Math() library
To see how you can add code snippets, see below:

```html
<div class="opened-cookie hide">
     <h1>Aqui está seu trocadilho de hoje:</h1>
     <p class="lucky">Aqui vem a sorte do dia</p>
     <img class="open-cookie-img" src="assets/images/opened-cookie.png" alt="Image of an opened fortune cookie">
     <button type="submit" onclick="returnCookie()">Abrir outro biscoito</button>
</div>
```
```css
@keyframes bounce {
from {
    transform: translateY(0px);
    transform: translateX(-15px);
}
to {
    transform: translateX(-15px);
    transform: translateY(-15px);
    }
}

```
```js
function hideToggle(){
    luckyCookie.classList.toggle('hide')
    openedCookie.classList.toggle('hide')
}
```

### Continued development

Continue using arrays and functions in JS

## Author

- LinkedIn - [Carolina Médici](https://www.linkedin.com/in/carolina-medici/)
- Frontend Mentor - [@carolmedici](https://www.frontendmentor.io/profile/carolmedici)


