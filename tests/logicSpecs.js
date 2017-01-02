require("babel-register");
import test from 'ava';
import { won } from '../src/logic/game.js';

test('foo', t => {
  t.pass();
});

test('bar', async t => {
  const bar = Promise.resolve('bar');

  t.is(await bar, 'bar');
});


let games = [
  {
    game: [0, 0, 0, 0, 0, 0, 0, 0, 0], 
    winner: 0, 
    starting: 'human' 
  }, 
  {
    game: [-1, -1, -1, 0, 0, 0, 0, 0, 0], 
    winner: 0, 
    starting: 'human' 
  }, 
  {
    game: [1, 0, 0, 1, 0, 0, 1, 0, 0, ], 
    winner: 0, 
    starting: 'human' 
  }, 
  {
    game: [1, 0, 0, 0, 1, 0, 0, 0, 1], 
    winner: 0, 
    starting: 'human' 
  }, 
  {
    game: [0, 0, -1, 0, -1, 0, -1, 0, 0], 
    winner: 0, 
    starting: 'human' 
  } 
]

test('game won vertically', t => {
  t.is(won(games[2]).winner, 1, `game was won vertically by player in state`);
});

test('game won horizontally', t => {
  t.is(won(games[1]).winner, -1, `game was won horizontally by player in state`);
});

test('game won rightDiagonally', t => {
  t.is(won(games[3]).winner, 1, `game was won rightDiagonally by player in state`);
});

test('game won leftDiagonally', t => {
  t.is(won(games[4]).winner, -1, `game was won leftDiagonally by player in state`);
});


