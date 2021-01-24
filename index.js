// tier checkboxes
$(".tier-checkbox-box").click((e) => {
  let value = e.target.getAttribute("value");
  let selected = e.target.getAttribute("selected");
  if (selected === "false") {
    $(e.target).replaceWith(
      '<img class="tier-checkbox" src="public/Checkbox_Selected.svg" alt="checkbox" value="basic" selected="true"/>'
    );
  } else {
    $(e.target).replaceWith(
      '<img class="tier-checkbox" src="public/Checkbox_Unselected.svg" alt="checkbox" value="basic" selected="false"/>'
    );
  }
});

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
