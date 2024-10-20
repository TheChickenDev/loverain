function rain() {
  let cloud = document.querySelector(".cloud");
  let e = document.createElement("div");

  e.classList.add("drop");
  cloud.appendChild(e);

  let left = Math.floor(Math.random() * 350);
  let size = Math.round() * 1.5;
  let duration = Math.random() * 1;

  e.innerText = "🩷";
  e.style.left = left + "px";
  e.style.fontSize = 0.5 + size + "em";
  e.style.animationDirection = 1 + duration + "s";

  setTimeout(function () {
    cloud.removeChild(e);
  }, 2000);
}

setInterval(function () {
  rain();
}, 20);

var i = 0,
  a = 0,
  isBackspacing = false,
  isParagraph = false;

var textArray = [
  "Hey love ❤️",
  "I just want to say that",
  "Every day, you amaze me.",
  "Your kindness and smile brighten my day",
  "and make everything better.",
  "Knowing that",
  "you’re by my side",
  "gives me strength",
  "and makes me so happy.",
  "I love you more than words can say.",
];

var speedForward = 100,
  speedWait = 1000,
  speedBetweenLines = 1000,
  speedBackspace = 25;

function typeWriter(id, ar) {
  var element = document.getElementById(id),
    aString = ar[a],
    eHeader = element.querySelector("h1"),
    eParagraph = element.querySelector("p");

  if (!isBackspacing) {
    if (i < aString.length) {
      if (aString.charAt(i) == "|") {
        isParagraph = true;
        eHeader.classList.remove("cursor");
        eParagraph.classList.add("cursor");
        i++;
        setTimeout(function () {
          typeWriter(id, ar);
        }, speedBetweenLines);
      } else {
        if (!isParagraph) {
          eHeader.textContent += aString.charAt(i);
        } else {
          eParagraph.textContent += aString.charAt(i);
        }
        i++;
        setTimeout(function () {
          typeWriter(id, ar);
        }, speedForward);
      }
    } else if (i == aString.length) {
      isBackspacing = true;
      setTimeout(function () {
        typeWriter(id, ar);
      }, speedWait);
    }
  } else {
    if (eHeader.textContent.length > 0 || eParagraph.textContent.length > 0) {
      if (eParagraph.textContent.length > 0) {
        eParagraph.textContent = eParagraph.textContent.substring(
          0,
          eParagraph.textContent.length - 1
        );
      } else if (eHeader.textContent.length > 0) {
        eParagraph.classList.remove("cursor");
        eHeader.classList.add("cursor");
        eHeader.textContent = eHeader.textContent.substring(
          0,
          eHeader.textContent.length - 1
        );
      }
      setTimeout(function () {
        typeWriter(id, ar);
      }, speedBackspace);
    } else {
      isBackspacing = false;
      i = 0;
      isParagraph = false;
      a = (a + 1) % ar.length;
      setTimeout(function () {
        typeWriter(id, ar);
      }, 50);
    }
  }
}

typeWriter("output", textArray);
