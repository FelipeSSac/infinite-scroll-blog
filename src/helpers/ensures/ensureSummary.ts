export default function ensureSummary(value: string) {
  return value
    .replace('<p>', '')
    .split('</p>')[0]
    .split('.')
    .slice(0, 2)
    .join('.')
    .concat('.');
}
