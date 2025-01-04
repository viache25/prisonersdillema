import { battle, tournament } from './battle.js';
import { algorithms } from "./algorithms.js";

//console.log(battle("longMemoryGuy","tester",4));
const res = tournament(algorithms, 200);
const sortedRes = Object.fromEntries(Object.entries(res).sort((a, b) => b[1] - a[1]));
console.log(sortedRes);