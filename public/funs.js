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
          let action = commands[i][0];
          let value = parseInt(commands[i][1], 10);
          switch (action) {
            case "forward":
              horiz += value;
              break;
            case "up":
              depth -= value;
              break;
            case "down":
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
          let action = commands[i][0];
          let value = parseInt(commands[i][1], 10);
          switch (action) {
            case "forward":
              horiz += value;
              depth += aim * value;
              break;
            case "up":
              //depth -= value;
              aim -= value;
              break;
            case "down":
              //depth += value;
              aim += value;
              break;
          }
        }
        
        return horiz * depth;
      }
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
