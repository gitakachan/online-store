//number to text
export function getWeekdayText(arr) {
  //小到大排列
  let sortedArr = arr.sort(function(value1, value2) {
    return value1 - value2;
  });

  sortedArr.forEach((num, index) => {
    if (num === 1) {
      sortedArr[index] = "一";
    } else if (num === 2) {
      sortedArr[index] = "二";
    } else if (num === 3) {
      sortedArr[index] = "三";
    } else if (num === 4) {
      sortedArr[index] = "四";
    } else if (num === 5) {
      sortedArr[index] = "五";
    } else if (num === 6) {
      sortedArr[index] = "六";
    } else if (num === 7) {
      sortedArr[index] = "日";
    }
  });
  return sortedArr;
}

//text to number
export function getWeekdayNumber(arr) {
  arr.forEach((num, index) => {
    if (num === "一") {
      arr[index] = 1;
    } else if (num === "二") {
      arr[index] = 2;
    } else if (num === "三") {
      arr[index] = 3;
    } else if (num === "四") {
      arr[index] = 4;
    } else if (num === "五") {
      arr[index] = 5;
    } else if (num === "六") {
      arr[index] = 6;
    } else if (num === "日") {
      arr[index] = 7;
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
  arr.forEach((num, index) => {
    if (num === "一") {
      arr[index] = 1;
    } else if (num === "二") {
      arr[index] = 2;
    } else if (num === "三") {
      arr[index] = 3;
    } else if (num === "四") {
      arr[index] = 4;
    } else if (num === "五") {
      arr[index] = 5;
    } else if (num === "六") {
      arr[index] = 6;
    } else if (num === "日") {
      arr[index] = 7;
    }
  });

  //小到大排列
  let sortedArr = arr.sort(function(value1, value2) {
    return value1 - value2;
  });

  sortedArr.forEach((num, index) => {
    if (num === 1) {
      sortedArr[index] = "一";
    } else if (num === 2) {
      sortedArr[index] = "二";
    } else if (num === 3) {
      sortedArr[index] = "三";
    } else if (num === 4) {
      sortedArr[index] = "四";
    } else if (num === 5) {
      sortedArr[index] = "五";
    } else if (num === 6) {
      sortedArr[index] = "六";
    } else if (num === 7) {
      sortedArr[index] = "日";
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
