var newArray = [1, 2, 3, 4, 5];

function multiplier(val1) {
  return function(val2) {
    return val1*val2;
  };
}

// var multArray = newArray.map(multiplier(3));
var multArray = newArray.map(function(val){
  console.log(arguments[0]);

  return val * arguments[1]
}.bind(null, 10));


console.log(multArray);