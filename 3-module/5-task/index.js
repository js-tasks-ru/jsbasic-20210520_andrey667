function getMinMax(str) {
  const arr = str
  .split(',')
  .join(" ")
  .split(" ")
  .map(numb => Number(numb))
  .filter(filter => typeof(filter) === "number" && isFinite (filter));
  const Obj = {
    min: Math.min.apply(null, arr),
    max: Math.max.apply(null, arr),
  }
  return Obj;
}
