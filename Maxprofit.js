// Maximum Profit in Job Scheduling

function JobSchedule(List) {
  let arr = List.sort((a, b) => a[0] - b[0]);
  let maxProftit = 0;

  for (let i = 0; i < arr.length; i++) {
    let FirststartTime = arr[i];
    let FirstendTime = arr[i + 1];
    for (let j = i + 1; j < arr.length; j++) {
      let SecondstartTime = arr[j];
      let SecondendTime = arr[j + 1];
      if (
        FirststartTime < SecondstartTime &&
        FirstendTime < SecondendTime &&
        arr[i][2] + arr[j][2] > maxProftit
      ) {
        maxProftit = arr[i][2] + arr[j][2];
      }
    }
  }

  return maxProftit;
}

// let array = [
//   [1, 2, 50],
//   [3, 5, 20],
//   [6, 19, 100],
//   [2, 100, 200],
// ];

// It worked for above nestedlist sir but for below nestedlist not working
let array = [
  [1, 3, 20],
  [2, 5, 50],
  [3, 10, 100],
  [6, 9, 200],
  [8, 11, 150],
];
console.log(JobSchedule(array));
