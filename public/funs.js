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
        console.log(common);
        const maxs = common.reduce((acc, item, i) => {
          acc[i] = item.indexOf(Math.max.apply(Math, item));
          return acc;
        }, []);
        console.log(maxs);
        const gamma = parseInt(maxs.join(''), 2);
        const mins = common.reduce((acc, item, i) => {
          acc[i] = item.indexOf(Math.min.apply(Math, item));
          return acc;
        }, []);
        console.log(mins);
        const epsilon = parseInt(mins.join(''), 2);
        const val = gamma * epsilon;
        return val;
      },
      part2: () => {}
    },
    day4: {
      part1: () => {},
      part2: () => {}
    },
    day5: {
      part1: () => {},
      part2: () => {}
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
