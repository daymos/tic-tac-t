import $ from 'jquery'
import _ from 'ramda'
import Task from 'data.task'

const trace = el => {console.log(el); return el}

// renderGridCells :: void -> Array String Dom
const renderGridCells = () => (
  new Array(9).fill(0).map((el,i) =>(
    `<div class='cell' id=${i}></div>`
  ))
)

const renderStarterChoice = () => (
  `<h2> who starts ?  </h2>
  <button id='player'> Player </button> 
  <button id='computer'> Computer </button>`
)

const renderPlayerChoice = () => (
  `<h2> chose game type </h2>
  <button id='pp'> P vs P </button> 
  <button id='pc'> P vs Computer </button>
  <button id='cc'> Computer vs Computer </button>`
)

// renderGrid :: Array string -> String Dom
const renderGrid = arr => (
  `<div class='gridContainer'>${arr.join('')}</div>`  
)

// updateDom :: String Dom -> void
const updateDom = el => {
  $('.gridContainer').empty()
  $('.gridContainer').append(el)
}

const waitForStarterChoice = (gameChoice) => (
  new Task((rej, res) => {
    $('#player,#computer').click(e => { 
      _.compose(updateDom, renderGrid, renderGridCells)();
      res({})
    })
  })
)

const waitForGameChoice = () => (
  new Task(function(rej, resolve) {
    $('#pp').click((e) => {
      _.compose(updateDom, renderStarterChoice)();
      resolve('hay ho')
    }) 
  })
)

const initTask = () => new Task((rej, res) => res({}))

const init = () => _.compose(
  initTask,
  updateDom,
  renderPlayerChoice
)()

export const run = () => {
  init() 
    .chain(waitForGameChoice)
    .chain(waitForStarterChoice)
    //.chain(waitForMove)
    //.chain(results)
    .fork(err => console.log(err), res => console.log(res))
}

