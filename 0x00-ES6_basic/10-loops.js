export default function appendToEachArrayValue(array, appendString) {
  for (const item of array) {
    item += appendString;
  }

  return array;
}
