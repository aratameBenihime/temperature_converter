const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function getCurrentDate(): string {
  const currentDate = new Date();

  const formattedDate = `${currentDate.getDate()}, ${
    months[currentDate.getMonth()]
  } ${currentDate.getFullYear()}`;

  return formattedDate;
}
