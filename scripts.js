// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var yesBtn = document.getElementById("yesBtn");

// Get the button that opens the modal
var cancelBtn = document.getElementById("cancelBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks the button, open the modal 
function openModal(btn) {
  document.getElementById("confirmation_message").innerText = btn.dataset.confirmation_message;
  document.getElementById("yesBtn").value = btn.dataset.yes_message;
  document.getElementById("cancelBtn").value = btn.dataset.cancel_message;
  
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

yesBtn.onclick = function() {
    const msg = document.createElement("p");
    msg.innerText = document.getElementById("yesBtn").value;
    document.body.appendChild(msg);
    document.getElementById("yesBtn").value = "";
    document.getElementById("cancelBtn").value = "";
    modal.style.display = "none";
}

cancelBtn.onclick = function() {
    const msg = document.createElement("p");
    msg.innerText = document.getElementById("cancelBtn").value;
    document.body.appendChild(msg);
    document.getElementById("yesBtn").value = "";
    document.getElementById("cancelBtn").value = "";
    modal.style.display = "none";
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