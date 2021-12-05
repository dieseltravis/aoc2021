(function () {
  'use strict';

  const all = {
    day1: {
      part1: (data) => {
        const list = data.trim().split('\n').map(Number);
        const length = list.length;
        let increased = 0;
        for (let i = 1; i < length; i++) {
          if (list[i] > list[i - 1]) {
            increased++;
          }
        }
        return increased;
      },
      part2: (data) => {
        const list = data.trim().split('\n').map(Number);
        const length = list.length;
        const windows = [];
        for (let i = 2; i < length; i++) {
          windows.push(list[i] + list[i - 1] + list[i - 2]);
        }
        const windowLength = windows.length;
        let increased = 0;
        for (let i = 1; i < windowLength; i++) {
          if (windows[i] > windows[i - 1]) {
            increased++;
          }
        }
        return increased;
      }
    },
    day2: {
      part1: (data) => {
        const commands = data.trim().split('\n').map(command => command.split(' '));
        let horiz = 0;
        let depth = 0;

        for (let i = 0, l = commands.length; i < l; i++) {
          const action = commands[i][0];
          const value = parseInt(commands[i][1], 10);
          switch (action) {
            case 'forward':
              horiz += value;
              break;
            case 'up':
              depth -= value;
              break;
            case 'down':
              depth += value;
              break;
          }
        }

        return horiz * depth;
      },
      part2: (data) => {
        const commands = data.trim().split('\n').map(command => command.split(' '));
        let horiz = 0;
        let depth = 0;
        let aim = 0;

        for (let i = 0, l = commands.length; i < l; i++) {
          const action = commands[i][0];
          const value = parseInt(commands[i][1], 10);
          switch (action) {
            case 'forward':
              horiz += value;
              depth += aim * value;
              break;
            case 'up':
              aim -= value;
              break;
            case 'down':
              aim += value;
              break;
          }
        }

        return horiz * depth;
      }
    },
    day3: {
      part1: (data) => {
        const bits = data.trim().split('\n').map(word => word.split('').map(Number));
        let common = null;
        const bitLength = bits.length;
        for (let i = 0; i < bitLength; i++) {
          const word = bits[i];
          const wordLength = word.length;
          if (i === 0) {
            common = Array.from({ length: wordLength }, () => [0, 0]);
          }
          for (let j = 0; j < wordLength; j++) {
            common[j][word[j]] += 1;
          }
        }

        const maxs = common.reduce((acc, item, i) => {
          acc[i] = item.indexOf(Math.max.apply(Math, item));
          return acc;
        }, []);
        const gamma = parseInt(maxs.join(''), 2);

        const mins = common.reduce((acc, item, i) => {
          acc[i] = item.indexOf(Math.min.apply(Math, item));
          return acc;
        }, []);
        const epsilon = parseInt(mins.join(''), 2);

        const val = gamma * epsilon;
        return val;
      },
      part2: (data) => {
        const bits = data.trim().split('\n').map(word => word.split('').map(Number));
        const bitLength = bits.length;
        const wordLength = bits[0].length;
        const getCommon = function (bitArr) {
          const bitArrLength = bitArr.length;
          const common = Array.from({ length: wordLength }, () => [0, 0]);
          for (let i = 0; i < bitArrLength; i++) {
            const word = bitArr[i];
            for (let j = 0; j < wordLength; j++) {
              common[j][word[j]] += 1;
            }
          }
          return common;
        };

        let o2 = Array.from({ length: bitLength }, (v, i) => i);
        for (let b = 0; b < wordLength && o2.length > 1; b++) {
          const common = getCommon(bits.filter((v, i) => o2.includes(i)));
          const counts = common[b];
          if (counts[0] > counts[1]) {
            // find all that match in bit b
            o2 = o2.filter(val => bits[val][b] === 0);
          } else if (counts[0] < counts[1]) {
            o2 = o2.filter(val => bits[val][b] === 1);
          } else if (counts[0] === counts[1]) {
            o2 = o2.filter(val => bits[val][b] === 1);
          }
        }

        let co2 = Array.from({ length: bitLength }, (v, i) => i);
        for (let b = 0; b < wordLength && co2.length > 1; b++) {
          const common = getCommon(bits.filter((v, i) => co2.includes(i)));
          const counts = common[b];
          if (counts[0] > counts[1]) {
            co2 = co2.filter(val => bits[val][b] === 1);
          } else if (counts[0] < counts[1]) {
            co2 = co2.filter(val => bits[val][b] === 0);
          } else if (counts[0] === counts[1]) {
            co2 = co2.filter(val => bits[val][b] === 0);
          }
        }

        const o2bits = bits[o2[0]];
        const co2bits = bits[co2[0]];

        const o2value = parseInt(o2bits.join(''), 2);
        const co2value = parseInt(co2bits.join(''), 2);

        return o2value * co2value;
      }
    },
    day4: {
      part1: (data) => {
        const input = data.trim().split('\n\n');
        const numbers = input.shift().split(',').map(Number);
        const boards = input.map(board => board.split('\n').map(row => row.trim().split(/\s+/).map(Number)));
        const boardCount = boards.length;
        console.log(numbers, boards);
        const marked = Array.from({ length: boardCount }, () => {
          return {
            dots: {},
            // col counts
            c0: 0,
            c1: 0,
            c2: 0,
            c3: 0,
            c4: 0,
            // row counts
            r0: 0,
            r1: 0,
            r2: 0,
            r3: 0,
            r4: 0
          };
        });
        console.log(marked);

        const numberLength = numbers.length;
        for (let d = 0; d < numberLength; d++) {
          const draw = numbers[d];
          for (let b = 0; b < boardCount; b++) {
            const board = boards[b];
            for (let c = 0; c < 5; c++) {
              for (let r = 0; r < 5; r++) {
                if (draw === board[c][r]) {
                  marked[b].dots['c' + c + 'r' + r] = 1;
                  marked[b]['c' + c]++;
                  marked[b]['r' + r]++;
                }
              }
            }
          }
          if (d >= 4) {
            // check for bingo
            for (let m = boardCount; m--;) {
              const mark = marked[m];
              for (let x = 5; x--;) {
                if (mark['c' + x] === 5 || mark['r' + x] === 5) {
                  // bingo in col or row x, sum unmarked numbers
                  const winner = boards[m];
                  console.log('bingo!', draw, winner, mark);
                  let unmarked = 0;
                  for (let c = 0; c < 5; c++) {
                    for (let r = 0; r < 5; r++) {
                      if (!mark.dots['c' + c + 'r' + r]) {
                        unmarked += winner[c][r];
                      }
                    }
                  }
                  console.log(unmarked);
                  return unmarked * draw;
                }
              }
            }
          }
        }
        return 'error';
      },
      part2: (data) => {
        const input = data.trim().split('\n\n');
        const numbers = input.shift().split(',').map(Number);
        const numberLength = numbers.length;
        const boards = input.map(board => board.split('\n').map(row => row.trim().split(/\s+/).map(Number)));
        const boardCount = boards.length;
        const marked = Array.from({ length: boardCount }, () => {
          return {
            dots: {},
            winner: 0,
            draw: 0,
            unmarked: [],
            sum: 0,
            result: 0,
            // col counts
            c0: 0,
            c1: 0,
            c2: 0,
            c3: 0,
            c4: 0,
            // row counts
            r0: 0,
            r1: 0,
            r2: 0,
            r3: 0,
            r4: 0
          };
        });
        let winCount = 0;
        let lastWinner = null;
        for (let d = 0; d < numberLength; d++) {
          const draw = numbers[d];
          for (let b = 0; b < boardCount; b++) {
            const mark = marked[b];
            if (mark.winner !== 1) {
              for (let c = 0; c < 5; c++) {
                for (let r = 0; r < 5; r++) {
                  const board = boards[b];
                  if (draw === board[c][r]) {
                    marked[b].dots['c' + c + 'r' + r] = 1;
                    marked[b]['c' + c] += 1;
                    marked[b]['r' + r] += 1;
                  }
                }
              }
            }
          }
          if (d >= 4) {
            // check for bingo
            for (let m = 0; m < boardCount; m++) {
              const mark = marked[m];
              if (mark.winner !== 1) {
                for (let x = 0; x < 5; x++) {
                  if (mark['c' + x] === 5 || mark['r' + x] === 5) {
                    console.log('bingo ' + m + ' count ' + winCount);
                    // bingo in col or row x, sum unmarked numbers
                    mark.winner = 1;
                    winCount += 1;
                    if (winCount === boardCount) {
                      const winner = boards[m];
                      mark.draw = draw;
                      let unmarked = 0;
                      for (let c = 0; c < 5; c++) {
                        for (let r = 0; r < 5; r++) {
                          if (mark.dots['c' + c + 'r' + r] !== 1) {
                            mark.unmarked.push(winner[c][r]);
                            unmarked += winner[c][r];
                          }
                        }
                      }
                      mark.sum = unmarked;
                      mark.result = unmarked * draw;
                      lastWinner = mark;
                      console.log('last bingo!', draw, winner, mark);
                    }
                    break;
                  }
                }
              }
            }
          }
        }
        // 13826 too low
        // 21068 too high
        return (lastWinner) ? lastWinner.result : 'error';
      }
    },
    day5: {
      part1: (data) => {
        let max = {
          x: 0,
          y: 0
        };
        const input = data.trim().split('\n').map(row => {
          let pairs = row.split(' -> ').map(pair => pair.split(',').map(Number));
          const pair = {
            x1: pairs[0][0],
            y1: pairs[0][1],
            x2: pairs[1][0],
            y2: pairs[1][1]
          };
          max.x = Math.max(max.x, pair.x1, pair.x2);
          max.y = Math.max(max.y, pair.y1, pair.y2);
          return pair;
        }).filter(pair => pair.x1 === pair.x2 || pair.y1 === pair.y2).map(pair => {
          return {
            x1: Math.min(pair.x1, pair.x2),
            y1: Math.min(pair.y1, pair.y2),
            x2: Math.max(pair.x1, pair.x2),
            y2: Math.max(pair.y1, pair.y2)
          };
        });
        let grid = Array.from({ length: max.y + 1 }, () => Array.from({ length: max.x + 1 }, () => 0));
        input.forEach(pair => {
          for (let y = pair.y1; y <= pair.y2; y++) {
            for (let x = pair.x1; x <= pair.x2; x++) {
              grid[y][x]++;
            }
          }
        });

        const result = grid.flatMap((row, yindex) => row.map((val, xindex) => {
          return {
            y: yindex,
            x: xindex,
            val: val
          };
        })).filter(point => point.val > 1);

        return result.length;
      },
      part2: (data) => {
        let max = {
          x: 0,
          y: 0
        };
        const input = data.trim().split('\n').map(row => {
          let pairs = row.split(' -> ').map(pair => pair.split(',').map(Number));
          const pair = {
            x1: pairs[0][0],
            y1: pairs[0][1],
            x2: pairs[1][0],
            y2: pairs[1][1]
          };
          max.x = Math.max(max.x, pair.x1, pair.x2);
          max.y = Math.max(max.y, pair.y1, pair.y2);
          return pair;
        });
        let grid = Array.from({ length: max.y + 1 }, () => Array.from({ length: max.x + 1 }, () => 0));
        input.forEach(pair => {
          let x = pair.x1;
          let y = pair.y1;
          let dx = 0;
          if (x < pair.x2) {
            dx = 1;
          } else if (x > pair.x2) {
            dx = -1;
          }
          let dy = 0;
          if (y < pair.y2) {
            dy = 1;
          } else if (y > pair.y2) {
            dy = -1;
          }
          // prevent infinite loops (it's late)
          let safety = 1000;
          do {
            grid[y][x]++;
            x += dx;
            y += dy;
          } while ((x !== pair.x2 + dx || y !== pair.y2 + dy) && safety-- > 0);
        });

        const result = grid.flatMap((row, yindex) => row.map((val, xindex) => {
          return {
            y: yindex,
            x: xindex,
            val: val
          };
        })).filter(point => point.val > 1);

        return result.length;
      }
    },
    day6: {
      part1: () => {},
      part2: () => {}
    },
    day7: {
      part1: () => {},
      part2: () => {}
    },
    day8: {
      part1: () => {},
      part2: () => {}
    },
    day9: {
      part1: () => {},
      part2: () => {}
    },
    day10: {
      part1: () => {},
      part2: () => {}
    },
    day11: {
      part1: () => {},
      part2: () => {}
    },
    day12: {
      part1: () => {},
      part2: () => {}
    },
    day13: {
      part1: () => {},
      part2: () => {}
    },
    day14: {
      part1: () => {},
      part2: () => {}
    },
    day15: {
      part1: () => {},
      part2: () => {}
    },
    day16: {
      part1: () => {},
      part2: () => {}
    },
    day17: {
      part1: () => {},
      part2: () => {}
    },
    day18: {
      part1: () => {},
      part2: () => {}
    },
    day19: {
      part1: () => {},
      part2: () => {}
    },
    day20: {
      part1: () => {},
      part2: () => {}
    },
    day21: {
      part1: () => {},
      part2: () => {}
    },
    day22: {
      part1: () => {},
      part2: () => {}
    },
    day23: {
      part1: () => {},
      part2: () => {}
    },
    day24: {
      part1: () => {},
      part2: () => {}
    },
    day25: {
      part1: () => {},
      part2: () => {}
    }
  };

  this.funs = (day, part) => all['day' + day]['part' + part];
}.call(this));
