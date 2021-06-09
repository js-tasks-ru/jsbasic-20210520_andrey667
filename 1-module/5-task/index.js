function truncate(str, maxlength) {
  if(str.length > maxlength) {
    let excess = str.length - (maxlength - 1);
    let truncateStr = str.length - excess;
    return str.slice(0, truncateStr) + "…";
  } else {
    return str;
  }
}
