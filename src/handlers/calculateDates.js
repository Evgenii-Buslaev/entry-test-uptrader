export function calculateDates(date) {
  const oneDayMs = 86400000;
  const dateObj = new Date();
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const today = `${year}-${
    month.toString().length === 2 ? month : "0" + month
  }-${day.toString().length === 2 ? day : "0" + day}`;

  if (date === today) {
    return 1;
  }
  if (date < today) {
    return Math.floor((Date.parse(today) - Date.parse(date)) / oneDayMs);
  }
  if (date > today) {
    return "todo has been done";
  }
}
