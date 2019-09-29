//***************
var triangleArea = function() {
  var base = parseFloat (document.getElementById('base').value);
  var height = parseFloat (document.getElementById('height').value);

  var output = document.getElementById('output');

  if (isNaN(base) || isNaN(height)) {
     output.textContent = "Nevložil jsi dvě čísla.";
  } else {
      var area = 0.5 * base * height;
      output.textContent = "Obsah = " + area;
  }


};
