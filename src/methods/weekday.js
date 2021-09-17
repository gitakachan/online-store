//number to text
export function getWeekdayText(arr) {
  //小到大排列
  let sortedArr = arr.sort(function(value1, value2) {
    return value1 - value2;
  });

  sortedArr.forEach((num) => {
    if (num === 1) {
      num = "一";
    } else if (num === 2) {
      num = "二";
    } else if (num === 3) {
      num = "三";
    } else if (num === 4) {
      num = "四";
    } else if (num === 5) {
      num = "五";
    } else if (num === 6) {
      num = "六";
    } else if (num === 7) {
      num = "日";
    }
  });
  return sortedArr;
}

//text to number
export function getWeekdayNumber(arr) {
  arr.forEach((num) => {
    if (num === "一") {
      num = 1;
    } else if (num === "二") {
      num = 2;
    } else if (num === "三") {
      num = 3;
    } else if (num === "四") {
      num = 4;
    } else if (num === "五") {
      num = 5;
    } else if (num === "六") {
      num = 6;
    } else if (num === "日") {
      num = 7;
    }
  });

  //小到大排列
  let sortedArr = arr.sort(function(value1, value2) {
    return value1 - value2;
  });

  return sortedArr;
}

//sort number
export function sortWeekdayNumber(arr) {
  let sortedArr = arr.sort(function(value1, value2) {
    return value1 - value2;
  });
}

//sort text
export function sortWeekdayText(arr) {
  arr.forEach((num) => {
    if (num === "一") {
      num = 1;
    } else if (num === "二") {
      num = 2;
    } else if (num === "三") {
      num = 3;
    } else if (num === "四") {
      num = 4;
    } else if (num === "五") {
      num = 5;
    } else if (num === "六") {
      num = 6;
    } else if (num === "日") {
      num = 7;
    }
  });

  //小到大排列
  let sortedArr = arr.sort(function(value1, value2) {
    return value1 - value2;
  });

  sortedArr.forEach((num) => {
    if (num === 1) {
      num = "一";
    } else if (num === 2) {
      num = "二";
    } else if (num === 3) {
      num = "三";
    } else if (num === 4) {
      num = "四";
    } else if (num === 5) {
      num = "五";
    } else if (num === 6) {
      num = "六";
    } else if (num === 7) {
      num = "日";
    }
  });
  return sortedArr;
}

//reverse
export function reverseWeekdayNumber(arr) {
  let results = [1, 2, 3, 4, 5, 6, 7];
  arr.forEach((el) => {
    results.forEach((weekday, index) => {
      if (weekday === el) {
        results.splice(index, 1);
      }
    });
  });
  return results;
}
