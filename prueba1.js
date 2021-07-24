var x = [1, 2, 3, 4, 5, 6, 7, 3, 4, 4, 5, 5, 6];
var indices = new Array(8); // colocar en vez de 8 el max del array "x"
indices.fill(0);

for (var i = 0; i < indices.length; i++) {

  for (var j = 0; j < x.length; j++) {
    if (i == x[j]) {
      indices[i] = indices[i] + 1;
    }
  }
}
console.log(indices);