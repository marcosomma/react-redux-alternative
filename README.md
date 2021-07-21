# React Context VS Redux

Over the las 5 or 6 years, I often had the need of prototyping ideas in simples MVP in order to validate them an than, some times keep iterering on them until the point of moving the "prototyped" MVP in to a "real" product.

I always tryied to do not fall in the routine of building always the same infrastucture/stack, mainly for two reasons.

1. Repetitive work will not bring to any kind of innovation.
2. It was the only "effective" way to keep myself up to date with latest technologies.

I still thinking this is a goos approach but I lately realise, expecially in web-app, you will always end with some "pillar" or combination of "pillars" that need to be in place.

I have to admit that on the React side, the `react-create-app` make a big difference, I always end up installing also some other pack that I feel needed.

In my case for example I always add from the begin:

- `Redux` (thunk or saga)
- `Material-ui`

At least this was until I do not start to use more and more the `React Context`.
I personally like the context idea, somewhat for me make more sense the way context operate, how different parts of the app can sync on different context etc etc.

First time that I notice the advantage of using a context whas when I was actually deeging in to the `<ThemeProvider/>` of material-ui. The way the `custom-theme` of material-ui was actually available to all material-ui components, make me realise that this approach was actually not much different, on the end result, from the way `Redux` was exposing the `globalState` to all connected component in a normal `react-redux` webapp.

So a sort of fun idea po-up in to my mind. What if I replace the entire `Redux` state wuth the `reacr contect` I tryed and seems to work :). I had to admit that the first attempt with:

- 1 Context
- 1 Actions set
- 1 Reducer set

Was quite easy and straight forward.

But what if I want to keep 1 context, but have actions and reducers separeted by "domains" for example?

So there it gose the solution I found and that I waould like to sahere to get some feedback :)

[Source code (GitHub)](https://github.com/marcosomma/react-redux-alternative)

As you can see it is a basic `react` repo except for the `context` folder:

## Context

As I told before I would like to keep havin a single context, but I would like (for keep the code clean) to split all the `actions` and `reducers` in speareted files, but keep having all of them accessibles from any component.

![desired file structure](./readme-images/fileStructure.png 'desired file structure')

### Actions

This was quite easy, As you can see I have the `index.js` collecting all `actions` and expose them in a centalysed way.

```js
import actions01 from './actions01'
import actions02 from './actions02'

const rootActions = (dispatch) => {
  return {
    actions01: actions01(dispatch),
    actions02: actions02(dispatch),
  }
}

export default rootActions
```

### Reducers

Those was a bit "creative" solution. What I'm basically doing is combining all reducers in that way the state will always pass trought all of them and just apply the needed trasformation based on the dispached action.

```js
import reducer01 from './reducer01'
import reducer02 from './reducer02'

const combineReducers =
  (...reducers) =>
  (state, action) =>
    reducers.reduce((acc, nextReducer) => nextReducer(acc, action), state)

const reducers = combineReducers(reducer01, reducer02)
export default reducers
```

### GlobalContext provider

```js
import React, { createContext, useReducer } from 'react'
import reducers from './reducers'
import actions from './actions'

const initialState = {
  isLoading: false,
  title: 'React BoilerPlate',
  text: 'reducer example',
}

export const GlobalContext = createContext(initialState)

export const GlobalState = (props) => {
  const [state, dispatch] = useReducer(reducers, initialState)
  const actionsRooter = actions(dispatch)

  return (
    <GlobalContext.Provider
      value={{
        actionsRooter,
        state,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}
```

Lately I'm importing and serving `actions` and `state` to all childrens of the `<GlobalContext>`.

I'm actually using this approach in several MVP projects and seems to work pretty fine and without needs of using and dealing also with `Redux`.

[Here](https://github.com/marcosomma/react-material-boilerplate) you have a similar boilerplate that also include `material-ui`,

That's it! Feedback are more than welcome!
