let textArea;
let charCount = 0;
let charTarget;
let newTxt;

function setup() {
  
  if (displayWidth <= 480) cnv = createCanvas(displayWidth, displayHeight-(displayHeight*0.151));
  else cnv = createCanvas(320, displayHeight-(displayHeight*0.151));
  var x = (displayWidth - width) / 2;
  cnv.position(x);

  textArea = createInput("");
  textArea.position(0, height);
  textArea.style("color", "white");
  textArea.style("border", "white");
  textArea.style("font-size", "20px");
  textArea.style("outline", "none")
  textArea.style("pointer-events", "none");
  textArea.elt.focus();
  textArea.attribute("spellcheck", "false");
  
  charTarget = floor(random(3,10));
  
}

function keyPressed () {
  
  charCount++;
  if (charCount == charTarget) changeTxt();
  
}

function changeTxt () {

  newTxt = textArea.elt.value;
  newTxt = newTxt.split("");
  if (newTxt[newTxt.length-1] != " ") {
    newTxt[newTxt.length-1] = "*";
  }
  
  newTxt = newTxt.join("");
  textArea.elt.value = newTxt;
  charCount = 0;
  charTarget = floor(random(3,10));
  
}

function draw() {
  
  background(255);
  fill(0);
  textSize(20);
  text(textArea.elt.value, 0, 30, width, height);
  
}
