// MODAL

var modal = document.getElementById("video-modal");
var span = document.getElementsByClassName("close")[0];

// open modal
$(".intro-video, .influencer-video").click((e) => {
  modal.style.display = "block";
})

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