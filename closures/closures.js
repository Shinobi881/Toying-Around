// Story writer

function newClosure(val) {
  var newVal = val;
  return function(val2) {
    return newVal += val2;
  }
}

var test = newClosure('Get loose becuase ');

var test2 = test;

test2('I\'m coming for ya!');


// Stopwatch 

function stopWatch() {
  var time = 0;
  var intervalID = null;

  return {
    time: function() {
      console.log(time);
    },
    start: function() {
      intervalID = setInterval(function(){
        time++;
      }, 1000);   
    }, 
    stop: function() {
      clearInterval(intervalID);
    },
    reset: function() {
      time = 0;
    }
  }
}


