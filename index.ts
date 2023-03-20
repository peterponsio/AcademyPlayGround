let list: string[] = [
  'aguacate',
  'disfraz',
  'huerto',
  'baden',
  'tortilla',
  'billar',
  'francés',
  'dieresis',
  'aceituna',
  'almendra',
  'hígado',
  'frente',
  'tiempo',
  'frenar',
  'diferencia',
  'hueso',
  'burro',
  'terreno',
];
let sortList = new Set();
list.forEach((element) => {
  sortList.add(
    JSON.stringify(list.filter((res) => res.charAt(0) == element.charAt(0)))
  );
});
const parsedArray = Array.from(sortList).map((parsedString) =>
  JSON.parse(parsedString as string)
);
console.log('Sorted List', parsedArray);

dasdasd;
