# Frontend Mentor - Space tourism multi-page website

This is a solution to the [Space tourism multi-page website](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3).

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

### Links

- Solution URL: [https://github.com/DBryja/Space-Tourism.git]
- Live Site URL: [https://dbryja.github.io/Space-Tourism/]

## My process

### Built with

- Mobile-first workflow
- Semantic HTML5 markup
- SASS/SCSS
- JavaScript

### What I learned

I learnt fetching data from json files and I got better with building responsive designs

```javascript
function changeContent() {
  fetch("../data.json")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".crew-image").src = data.crew[crewID].images.webp;
    });
}
```

### Continued development

Would like to animate changing content especially on the destination page.

## Author

- Frontend Mentor - [@DBryja](https://www.frontendmentor.io/profile/DBryja)
- Twitter - [@D_Bryja](https://www.twitter.com/D_Bryja)
