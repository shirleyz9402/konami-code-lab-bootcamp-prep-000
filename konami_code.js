const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function

function onKeyDownHandler(e) {
  var arr = []
  const key = parseInt(e.which);
  for (let i = 0; i < code.length - 1; i++) {
  if (key === code[i]) {
    arr.push(key)
    i++
    }
  else {
    i = 0
    }  
  }
  if (arr === code) {
    window.alert("Hurray!")
    
  }
}
}