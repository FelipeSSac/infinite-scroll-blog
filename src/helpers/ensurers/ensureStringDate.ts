export default function ensureStringDate(value: string) {
  const date = new Date(value);
  const dateString = `${date}`;

  const [, month, day, year] = dateString.split(' ');
  const formattedDate = `${month} ${day}, ${year}`;

  return formattedDate;
}
