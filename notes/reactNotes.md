> React should use event listeners using camelCase

# React Hooks

Hook - variable - React tracks

> normal variabloe doesn't trackk

1. Hooks - useState
2. useContext
3. useEffect
4. etc

> every Hooks has different syntax because each states are functions

<!-- formula -->

> const[like,setLike] = useState(initial value)

> setState is an Update state.

> react track state variable

> component is an function of state => c=F(s)

- if state will changes componenet will cheange or rerender

> state refers to current value or current DATA

# React form elements

refer mdn

# react fragment

- we can return function in a react return only one parent. otherwise use react fragment.

# conditional rendering

- while using ternary operator using interpolutaion inside in react is called conditional
- less performance
- must use conditional rendering

# condiional styling

- while using conditional styling only in the dom when will you use
- more performance

# react typing events

[javascript events mdn](https://developer.mozilla.org/en-US/docs/Web/API/Element/lostpointercapture_event)

# onChange()

# study and refer

1. what is event deligation ?
2. what is event bubbling ?
3. what is event propagation ?

# React Router

# Routing

> why Routing?

different different componenets difffernt pages move

# Advantages of routing (when we have routing)

- easy to access
- loading is high
- organised
- sharing url
- secure route

# disadvantages

[React router website](https://reactrouter.com/start/declarative/installation)

- npm i react-router
- import { BrowserRouter } from "react-router";
- <BrowserRouter></BrowserRouter> insise main.jsx file

# graph history check using vscode

- git checkout main

# types of router

# hash router

# browser router

> hash router supports all browser including old browser like IE

> browser router not support IE router lie old browser only support new browser

# useNavigate

+1 => one page forward
-1 => one page bacward

# home

> / represents the home page

# 404 page error

> \*\* matches any string

- not found in the last one of the route

# redirect

refer mdn

> path=":id /"
> ":" will be assigned as a variable

# useParams

- always params returns a object

# useEffect

new hook

- study useEffects learn what is it? why to use? how to apply these hooks?

> excersise

> delete movie using movie list using mockapi

# Types of components

1. class components => using BCS Company so just learn basics with your own understanding not manadatory
2. function components

> we are using only function componenet because class components using before 9 years ago

# Life cycle of component

1. initialization -> Birth of the component
2. Mounting -> it is sitting on the DOM(jsx file convert to js and mount in the DOM)
3. Updating -> if either states and props changes the updation will be activated
4. Unmounting -> Remove from DOM is called "Unmounting"

# which time mounting happens?

> conditional rendering time the mounting and unmounting will be on the screen
> Routing has happend the mounting and unmounting happens

# life cycle methods - Class Componenets

1. ComonenetWillMount - Before Mounting => example : console.log()
2. ComponenetDidMount = After mounting => eg: API
3. ComponenetWillUnMount - Before UnMounting => eg: cleanup - clearInterval()

# Below methods will wor when the state Updates

4. ComponentWillUpdate - Before re-rendering => eg: console.log(old,new)
5. ComponentDidUpdate - After re-rendering => eg: Box - Calculate new height & new width
6. ComponenetRecivedProps - 

> ComponentDidMount - setInterval - when destroy? when componenet get s destroyed - conditional rendering / Routing
> ComponentUnMount - clearInterval()


# Function componenets 6 in 1

these above six lifecycle componenets into 1 hook that is is useEffect() Hook


# useNavigate()

1. navigate("/about")
2. navigate(-1) -> bac button
3. navigate(1) => next 

