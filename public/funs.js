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
        let windows = [];
        for (let i = 2; i < length; i++) {
          windows.push(list[i] + list[i - 1] + list[i - 2])
        }
        console.log(windows);
        
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
      part1: () => {},
      part2: () => {}
    },
    day3: {
      part1: () => {},
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
