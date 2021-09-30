export default function ensureStringDate(value: string) {
  const date = new Date(value);
  const dateString = `${date}`;

  const [, month, day, year] = dateString.split(' ');
  const formatedDate = `${month} ${day}, ${year}`;

  return formatedDate;
}
