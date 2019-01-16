const getTip = (total, tipPercent = .2) => {
   return `A ${tipPercent * 100}% tip on £${total} would be £${total * tipPercent}`;
}

console.log(getTip(40, .5));