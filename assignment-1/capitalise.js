export default function (string) {
  const firstCharCapitalised = string.split("")[0].toUpperCase();

  return firstCharCapitalised + string.slice(1, string.length);
}
