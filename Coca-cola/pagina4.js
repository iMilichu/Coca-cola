var images = document.getElementsByTagName("img");

for (var i = 0; i < images.length; i++) {
  images[i].onmouseover = function() {
    this.style.cursor = "hand";
    this.style.borderColor = "#7759FF";
  };
  images[i].onmouseout = function() {
    this.style.cursor = "pointer";
    this.style.borderColor = "#D94F32";
  };
}

function changeImageOnClick(event) {
  var targetElement = event.srcElement;
  if (targetElement.tagName === "IMG") {
    mainImage.src = targetElement.getAttribute("src");
}
}
var image = document.getElementsByTagName("img");
for (var o = 0; o < image.length; o++) {
    image[o].onmouseover1 = function() {
      this.style.cursor = "hand";
      this.style.borderColor = "#7759FF";
    };
    image[o].onmouseout1 = function() {
      this.style.cursor = "pointer";
      this.style.borderColor = "#D94F32";
    };
  }
function changeImageOnClick1(event) {
    var targetElement = event.srcElement;
    if (targetElement.tagName === "IMG") {
      mainImages.src = targetElement.getAttribute("src");
  }
  }