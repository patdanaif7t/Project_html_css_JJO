// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function imprimir() {
  var divToPrint = document.getElementById("printTable");
  newWin = window.open("","","width=900,height=700");
  newWin.document.write(divToPrint.outerHTML);
  newWin.print();
  newWin.close();
}

// fixed Modal - JO
var detailModal = document.getElementById("detailModal");
var fixBtn = document.getElementsByClassName("fixBtn");

for (const btn of fixBtn) {
  btn.onclick = function() {
    detailModal.style.display = "block";
  }
}

window.onclick = function(event) {
  if (event.target == detailModal) {
    detailModal.style.display = "none";
  }
}

/*  ฟังชั่นต่อไปและย้อนกลับของตูน */
var content1 = document.getElementById("content-1");
var content2 = document.getElementById("content-2");
var next = document.getElementById("nextBtn");
var back = document.getElementById("backBtn");

next.onclick = function() {
  content1.style.display = "none";
  content2.style.display = "block";
}
back.onclick = function() {
  content1.style.display = "block";
  content2.style.display = "none";
}