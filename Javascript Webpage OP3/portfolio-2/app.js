const mHTML = document.getElementById("message"),
  messages = ["Front-End", "Back-End", "UI / UX", "Graphics", "Branding"];
let currentMessage = 0;
function typeMessage() {
  if (!messages[currentMessage]) {
    currentMessage = 0;
  }
  const currentStr = messages[currentMessage];
  currentStr.split();
  let part = "";
  let currentLetter = 0;
  let int1 = setInterval(() => {
    if (!currentStr[currentLetter]) {
      currentMessage++;
      setTimeout(() => {
        deleteMessage(part);
      }, 500);
      clearInterval(int1);
    } else {
      part += currentStr[currentLetter++];
      mHTML.innerHTML = part;
    }
  }, 100);
}
function deleteMessage(str) {
  let int = setInterval(() => {
    if (str.length === 0) {
      setTimeout(() => {
        typeMessage();
      }, 500);
      clearInterval(int);
    } else {
      str = str.split("");
      str.pop();
      str = str.join("");
      mHTML.innerHTML = str;
    }
  }, 50);
}
typeMessage();

if (document.body.animate) {
  document.querySelector("#button").addEventListener("click", pop);
}

function pop(e) {
  // Quick check if user clicked the button using a keyboard
  if (e.clientX === 0 && e.clientY === 0) {
    const bbox = document.querySelector("#button").getBoundingClientRect();
    const x = bbox.left + bbox.width / 2;
    const y = bbox.top + bbox.height / 2;
    for (let i = 0; i < 30; i++) {
      // We call the function createParticle 30 times
      // We pass the coordinates of the button for x & y values
      createParticle(x, y);
    }
  } else {
    for (let i = 0; i < 30; i++) {
      // We call the function createParticle 30 times
      // As we need the coordinates of the mouse, we pass them as arguments
      createParticle(e.clientX, e.clientY);
    }
  }
}

function createParticle(x, y) {
  const particle = document.createElement("particle");
  document.body.appendChild(particle);

  // Calculate a random size from 5px to 25px
  const size = Math.floor(Math.random() * 20 + 5);
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  // Generate a random color in a blue/purple palette
  particle.style.background = `hsl(${Math.random() * 90 + 180}, 70%, 60%)`;

  // Generate a random x & y destination within a distance of 75px from the mouse
  const destinationX = x + (Math.random() - 0.5) * 2 * 75;
  const destinationY = y + (Math.random() - 0.5) * 2 * 75;

  // Store the animation in a variable as we will need it later
  const animation = particle.animate(
    [
      {
        // Set the origin position of the particle
        // We offset the particle with half its size to center it around the mouse
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
        opacity: 1,
      },
      {
        // We define the final coordinates as the second keyframe
        transform: `translate(${destinationX}px, ${destinationY}px)`,
        opacity: 0,
      },
    ],
    {
      // Set a random duration from 500 to 1500ms
      duration: Math.random() * 1000 + 500,
      easing: "cubic-bezier(0, .9, .57, 1)",
      // Delay every particle with a random value of 200ms
      delay: Math.random() * 200,
    }
  );

  // When the animation is complete, remove the element from the DOM
  animation.onfinish = () => {
    particle.remove();
  };
}

(function ($) {
  $(function () {
    $("nav ul li > a:not(:only-child)").click(function (e) {
      $(this).siblings(".nav-dropdown").toggle();
      $(".nav-dropdown").not($(this).siblings()).hide();
      e.stopPropagation();
    });
    $("html").click(function () {
      $(".nav-dropdown").hide();
    });
    $("#nav-toggle").on("click", function () {
      this.classList.toggle("active");
    });
    $("#nav-toggle").click(function () {
      $("nav ul").toggle();
    });
  });
})(jQuery);





function classToggle() {
  var el = document.querySelector('.icon-cards__content');
  el.classList.toggle('step-animation');
}

document.querySelector('#toggle-animation').addEventListener('click', classToggle);