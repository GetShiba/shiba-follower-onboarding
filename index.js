// tier checkboxes
$(".tier-checkbox-box").click(async (e) => {
  let value = e.target.getAttribute("value");
  let selected = e.target.getAttribute("selected");

  $(".tier-checkbox-box").each((i) => {
    let itemValue = $(".tier-checkbox")[i].getAttribute("value");
    if (itemValue === value) {
      if (selected === "false") {
        $(`img[value=${value}]`).remove();
        $(`div[value=${value}]`).append(
          `<img class="tier-checkbox" src="public/Checkbox_Selected.svg" alt="checkbox" value="${value}" selected="true"/>`
        );
      } else {
        $(`img[value=${value}]`).remove();
        $(`div[value=${value}]`).append(
          `<img class="tier-checkbox" src="public/Checkbox_Unselected.svg" alt="checkbox" value="${value}" selected="false"/>`
        );
      }
    } else {
      $(`img[value=${itemValue}]`).remove();
      $(`div[value=${itemValue}]`).append(
        `<img class="tier-checkbox" src="public/Checkbox_Unselected.svg" alt="checkbox" value="${itemValue}" selected="false"/>`
      );
    }
  });
});

// show & hide tier perks
$(".tier-card-view-perks").click((e) => {
  let parentElement = e.target.parentNode.parentNode.parentNode;
  let perksRow =
    '<div class="tier-card-perks-row">' +
    '<div class="tier-card-perk">' +
    '<img class="perk" src="public/Content Sneak Peeks.svg" alt="sneak peak" />' +
    "</div>" +
    '<div class="tier-card-perk">' +
    '<img class="perk" src="public/Fan Polls.svg" alt="fan polls" />' +
    "</div>" +
    '<div class="tier-card-perk">' +
    '<img class="perk" src="public/Private DMs.svg" alt="private dms" />' +
    "</div>" +
    "</div>";
  if (parentElement.getAttribute("perks") === "false") {
    $(parentElement).append(perksRow);
    $(parentElement).attr("perks", "true");
  } else {
    $(parentElement).children(".tier-card-perks-row").remove();
    $(parentElement).attr("perks", "false");
  }
});


var modal = document.getElementById("video-modal");
var span = document.getElementsByClassName("close")[0];

$(".influencer-video").click((e) => {
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