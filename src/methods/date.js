//unix to form
export function getFormDate(time) {
  const d = new Date(time * 1000);

  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  if (month <= 9) {
    month = "0" + month;
  }
  let date = d.getDate();
  if (date <= 9) {
    date = "0" + date;
  }

  return `${year}-${month}-${date}`;
}

//form to unix
export function getUnixDate(uniTime) {
  return Math.floor(new Date(uniTime) / 1000);
}
