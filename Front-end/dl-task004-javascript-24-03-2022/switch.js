var a = parseInt(prompt("Enter number betweeb 0 to 3")); 
  switch (true) {
    case a==0:alert(0);
      break;
    case a==1:alert(1);
      break;
    case a==2 || a==3:alert("2,3");
      break;
    default: alert("Number out of range");
     break;
  }