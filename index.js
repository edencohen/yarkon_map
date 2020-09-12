
// Register for mouse click events on the buttons
buttons = document.getElementsByClassName("siteyarkon")
for (i = 0; i < buttons.length; i++) {
    btn = buttons[i];
    btn.addEventListener("click", siteClicked);
}

// Register for mouse click events on the modal close spans
spans = document.getElementsByClassName("modal_close")
for (i = 0; i < spans.length; i++) {
    span = spans[i];
    span.addEventListener("click", spanClicked);
}

function spanClicked() {
    modal = this.parentElement.parentElement;
    modal.style.display = "none";
}

function siteClicked() {
    id = this.id;
    console.log(id);

    site_name = id.substring(5); // remove the prefix "site_"
    console.log(id, site_name);

    modal = document.getElementById("modal_" + site_name);
    modal.style.display = "block";

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            modal.style.display = "none";
        }
    })    
}

function toggleSvgBackground() {
    var checkBox = document.getElementById("toggle_background_map");
    var svg = document.getElementsByTagName("svg")[0];
  
    if (checkBox.checked == true){
        svg.style.backgroundImage = "url('images/map.png')";
    } else {
        svg.style.backgroundImage = "";
    }
  }