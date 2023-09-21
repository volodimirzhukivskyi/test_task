export function generateDynamicId() {
  const randomNumber = Math.floor(Math.random() * 100000000);
  const dynamicId = randomNumber.toString().substring(0, 8);
  return dynamicId;
}


