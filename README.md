# PokeApp [Live](https://pokeapp-pkolka.herokuapp.com/)

## Overview
This project was created to practice and showcase my API communication and state management skills. This is also my first major TypeScript project.  
While creating this, my main challenges were overcoming some difficulties resulting from data structure provided by PokeAPI, e.g.:  

The 'pagination' provided by API only provides list of Pokemon names and URL's to their details, which required a two-step API calls before a first succesful render of the pokemon list. The same thing occured when I have started to implement sorting by pokemon type or name, so to ensure shorter loading times & reliability I have created my own pagination and 'smart' data fetching to minimalize volume & quantity of API calls (also reduces data usage on mobile devices).

## Resources:
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  

[TypeScript](https://www.typescriptlang.org/)

[React-redux](https://react-redux.js.org/)

[Redux Toolkit](https://redux-toolkit.js.org/)

[React Router](https://reactrouter.com)

[Axios](https://github.com/axios/axios)

[SCSS/SASS](https://sass-lang.com/)

[PokeAPI](https://pokeapi.co/)

[JS-cookie](https://github.com/js-cookie/js-cookie)

[StackOverflow](https://stackoverflow.com/)
