import * as _ from 'ramda'

const trace  = state => {console.log(state); return state}

export const horizontally = state => {
  return [0,1,2].reduce((acc, i) => (
    ((state.game[i * 3]  === state.game[(i * 3) + 1] &&
      state.game[i * 3]  === state.game[(i * 3) + 2]) ? Object.assign(state, {winner:state.game[0]})
    : state ) 
  ),{})
}

export const vertically = state => {
  return [0,1,2].reduce((acc, i) => (
    ((state.game[i]  === state.game[i + 3] &&
      state.game[i]  === state.game[i + 6]) ? Object.assign(state, {winner:state.game[0]})
    : state ) 
  ),{})
}

export const leftDiagonally = state => (
  (state.game[0]  === state.game[4] &&
   state.game[0]  === state.game[8]) ? Object.assign(state, {winner:state.game[0]}) : state
)

export const rightDiagonally = state => (
  (state.game[2] === state.game[4] &&
   state.game[2] === state.game[6]) ? Object.assign(state, {winner:state.game[2]}) : state
)

export const won = state => {
  return _.compose(
    leftDiagonally,
    rightDiagonally,
    horizontally,
    vertically 
  )(state)
}


