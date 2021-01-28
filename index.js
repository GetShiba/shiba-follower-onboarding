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

$("#next-button").click((e) => {
  window.location.href = "phoneNumber.html";
});

// phone number screen
$("#checkout-button").click((e) => {
  let phoneNumber = $("#phone-number-input").val();
  if (phoneNumber.length < 1) {
    if ($(".error-container > span").length < 1) {
      $(".error-container").append(
        `<span>Please provide valid phone number</span>`
      );
    }
  } else {
    $(".error-container").empty();
  }
});

// test 2
function animateLeft($src, $tgt) {
  var $parent = $src.parent();
  var width = $parent.width();
  var srcWidth = $src.width();

  $src.css({ position: "relative" });
  $tgt.hide().appendTo($parent).css({ left: width, position: "relative" });

  $src.animate({ left: -width }, 500, function () {
    $src.hide();
    $src.css({ left: null, position: null });
  });
  $tgt.show().animate({ left: 0 }, 500, function () {
    $tgt.css({ left: null, position: null });
  });
}

function animateRight($src, $tgt) {
  var $parent = $src.parent();
  var width = $parent.width();
  var srcWidth = $src.width();

  $src.css({ position: "relative" });
  $tgt.hide().appendTo($parent).css({ left: width, position: "relative" });

  $src.animate({ right: -width }, 500, function () {
    $src.hide();
    $src.css({ left: null, position: null });
  });
  $tgt.show().animate({ left: 0 }, 500, function () {
    $tgt.css({ left: null, position: null });
  });
}

$(function () {
  var $first = $("#page-one-content");
  var $second = $("#page-two-content");
  $second.hide();

  $("#checkout-button").click(function () {
    animateLeft($first, $second);
    var tmp = $first;
    $first = $second;
    $second = tmp;
  });

  $("#dots").click(function () {
    animateRight($first, $second);
    var tmp = $first;
    $first = $second;
    $second = tmp;
  });
});
