let className = document.getElementsByClassName("cells");
let xarray = new Array();
let oarray = new Array();
let switchp = 0;
let count = 0;
let flag1 = new Array();
let flag2 = new Array();
for (var i = 0; i < 9; i++) {
  flag1.push(true);
  flag2.push(true);
}

for(let a = 0; a < className.length; a++){
  className[a].addEventListener('click', () =>{
    if(flag2[a] != false){
      if(flag1[a]){
        if(switchp == 0){
          switchp += 1;
          className[a].innerHTML = 'X';
          xarray.push(a);
          flag1[a] = false;
          checkWinner();
        }
      }
    }
    if(flag1[a] != false){
      if(flag2[a]){
        if(switchp == 1){
          switchp -= 1;
          className[a].innerHTML = 'O';
          oarray.push(a);
          flag2[a] = false;
          checkWinner();
        }
      }
    }
  })
}

function checkWinner() {
  let checkCondition = true;
  count++;
  if(xarray.includes(0) && xarray.includes(1) && xarray.includes(2) ||
     xarray.includes(3) && xarray.includes(4) && xarray.includes(5) ||
     xarray.includes(6) && xarray.includes(7) && xarray.includes(8) ||
     xarray.includes(0) && xarray.includes(3) && xarray.includes(6) ||
     xarray.includes(1) && xarray.includes(4) && xarray.includes(7) ||
     xarray.includes(2) && xarray.includes(5) && xarray.includes(8) ||
     xarray.includes(0) && xarray.includes(4) && xarray.includes(8) ||
     xarray.includes(2) && xarray.includes(4) && xarray.includes(6) ){
    document.getElementById("winner").style.display = "block";
    document.getElementById("winnerTitle").innerHTML = " x winner";
    checkCondition = false;
  }
  if(oarray.includes(0) && oarray.includes(1) && oarray.includes(2) ||
     oarray.includes(3) && oarray.includes(4) && oarray.includes(5) ||
     oarray.includes(6) && oarray.includes(7) && oarray.includes(8) ||
     oarray.includes(0) && oarray.includes(3) && oarray.includes(6) ||
     oarray.includes(1) && oarray.includes(4) && oarray.includes(7) ||
     oarray.includes(2) && oarray.includes(5) && oarray.includes(8) ||
     oarray.includes(0) && oarray.includes(4) && oarray.includes(8) ||
     oarray.includes(2) && oarray.includes(4) && oarray.includes(6) ){
    document.getElementById("winner").style.display = "block";
    document.getElementById("winnerTitle").innerHTML = " o winner";
    checkCondition = false;
  }
  if(checkCondition){
    if(count == 9){
      document.getElementById("winner").style.display = "block";
      document.getElementById("winnerTitle").innerHTML = " draw";
    }
  }
}
