let root = document.getElementById("root");
for(let bowlI = 0; bowlI < 30; bowlI ++){
  let bowl = document.createElement("div");
  bowl.style.height = "25px";
  bowl.style.width = "250px";
  bowl.style.display = "flex"
  root.appendChild(bowl)
  for(let pixI = 0;pixI <10;pixI ++){
    let pix = document.createElement("div");
    pix.style.height = "25px";
    pix.style.width = "25px";
    bowl.appendChild(pix)
  }
}