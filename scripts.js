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
  document.getElementById("msgId").value = btn.id;
  
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

function print_message(btn) {
   var msgId = document.getElementById("msgId").value + "_msg";
    if (document.getElementById(msgId)) {
        const msg = document.getElementById(msgId);
        msg.innerText = document.getElementById(btn.id).value;
    } else {
        const msg = document.createElement("p");
        msg.id = document.getElementById("msgId").value + "_msg";
        msg.innerText = document.getElementById(btn.id).value;
        const btn_aux = document.getElementById("msgId").value;
        const btn_elem = document.getElementById(btn_aux);
        //document.body.appendChild(msg);
        btn_elem.parentNode.insertBefore(msg, btn_elem.nextSibling);
    }
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