export function date(time) {
  const date = new Date(time);
  return date.toLocaleDateString();
}
