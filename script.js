var screen = 1;

function dagobah() {
  // Create an audio element
  if (screen == 1) {
    var audio = new Audio("sounds/ship.mp3"); // Set the path to your audio file
    audio.play();
    screen = 2;
    document.getElementById("tatooine").classList.add("translucent");
    document.getElementById("dagobah").classList.add("translucent");
    document.getElementById("deathstar").classList.add("translucent");
    document.getElementById("leftimg").classList.add("dagobah-background");
    document.getElementById("rightimg").classList.add("dagobah-background");
    document.getElementById("rightimg").classList.remove("sides-img");
    document.getElementById("leftimg").classList.remove("sides-img");
    document.getElementById("charimg").classList.remove("box-img");
    document.getElementById("info").classList.remove("box-img");
    document.getElementById("top").classList.add("dagobah-title");
    document.getElementById("charimg").classList.add("yodaimg");
    document.getElementById("info").innerHTML =
      "<p>Yoda is a wise and ancient Jedi Master, celebrated for his profound knowledge of the Force, remarkable combat abilities, and distinctive backward speech pattern. Though small and frail in appearance, Yoda is among the most powerful Jedi in the galaxy. As the Grand Master of the Jedi Order for centuries, he guided and trained numerous Jedi, including Luke Skywalker. Yoda embodies wisdom, patience, and the enduring fight against the dark side of the Force.</p>";
    document.getElementById("charimg").setAttribute("onclick", "greensaber()");
    // GIF INSERT
    document.getElementById("screengif").classList.add("coverscreen");
    // Remove the div (GIF) after 2 seconds
    setTimeout(function () {
      document.getElementById("screengif").classList.remove("coverscreen");
    }, 5000); // 2000ms = 2 seconds
  }
}
function tatooine() {
  // Create an audio element
  if (screen == 1) {
    var audio = new Audio("sounds/ship.mp3"); // Set the path to your audio file
    audio.play();
    screen = 2;
    document.getElementById("tatooine").classList.add("translucent");
    document.getElementById("dagobah").classList.add("translucent");
    document.getElementById("deathstar").classList.add("translucent");
    document.getElementById("leftimg").classList.add("tatooine-background");
    document.getElementById("rightimg").classList.add("tatooine-background");
    document.getElementById("rightimg").classList.remove("sides-img");
    document.getElementById("leftimg").classList.remove("sides-img");
    document.getElementById("charimg").classList.remove("box-img");
    document.getElementById("info").classList.remove("box-img");
    document.getElementById("top").classList.add("tatooine-title");
    document.getElementById("charimg").classList.add("obiwanimg");
    document.getElementById("info").innerHTML =
      "<p> A courageous and skilled Jedi Knight during the fall of the Republic, Obi-Wan Kenobi is the mentor to Anakin Skywalker and later his son, Luke Skywalker. Devoted to the Jedi Code and the fight against the Sith, he is renowned for defeating Darth Maul and for his fateful duel with Anakin on Mustafar, which led to the transformation of Anakin Skywalker into Darth Vader. After the rise of the Empire, Obi-Wan goes into exile on Tatooine, watching over Luke and preparing to guide him when the time is right. </p>";
    document.getElementById("charimg").setAttribute("onclick", "bluesaber()");

    // GIF INSERT
    document.getElementById("screengif").classList.add("coverscreen");
    // Remove the div (GIF) after 2 seconds
    setTimeout(function () {
      document.getElementById("screengif").classList.remove("coverscreen");
    }, 5000); // 2000ms = 2 seconds
  }
}
function deathStar() {
  if (screen == 1) {
    // Create an audio element
    var audio = new Audio("sounds/ship.mp3"); // Set the path to your audio file
    audio.play();
    screen = 2;
    document.getElementById("tatooine").classList.add("translucent");
    document.getElementById("dagobah").classList.add("translucent");
    document.getElementById("deathstar").classList.add("translucent");
    document.getElementById("leftimg").classList.add("ds-background");
    document.getElementById("rightimg").classList.add("ds-background");
    document.getElementById("rightimg").classList.remove("sides-img");
    document.getElementById("leftimg").classList.remove("sides-img");
    document.getElementById("charimg").classList.remove("box-img");
    document.getElementById("info").classList.remove("box-img");
    document.getElementById("top").classList.add("ds-title");
    document.getElementById("charimg").classList.add("vaderimg");
    document.getElementById("info").innerHTML =
      "<p> Once a heroic Jedi Knight named Anakin Skywalker, he was destined to bring balance to the Force but fell to the dark side, consumed by fear, anger, and the manipulations of Emperor Palpatine. As a Sith Lord, he became Darth Vader, the Emperors enforcer, known for his fearsome black armor, mechanical breathing, and immense power in the Force. Despite his dark deeds, a spark of goodness remains in him. Vader ultimately redeems himself by saving his son, Luke Skywalker, and destroying the Emperor, sacrificing himself to fulfill the prophecy of balance in the Force. </p>";
    document.getElementById("charimg").setAttribute("onclick", "redsaber()");
    //  GIF INSERT
    document.getElementById("screengif").classList.add("coverscreen");
    // Remove the div (GIF) after 2 seconds
    setTimeout(function () {
      document.getElementById("screengif").classList.remove("coverscreen");
    }, 5000); // 2000ms = 2 seconds\
  }
}

function greensaber() {
  if (screen == 2) {
    document.getElementById("charimg").classList.add("greensaber");
    var audio = new Audio("sounds/feeltheforce.wav"); // Set the path to your audio file
    audio.play();
    document.getElementById("info").innerHTML =
      "<p> Yoda wields a short, green-bladed lightsaber, symbolizing his mastery of the Force and his role as a Jedi Consular, focused on wisdom and knowledge. Despite its small size, Yoda uses it with exceptional agility in combat, demonstrated in his duels against Count Dooku and Darth Sidious. </p>";
  }
}
function bluesaber() {
  if (screen == 2) {
    document.getElementById("charimg").classList.add("bluesaber");
    var audio = new Audio("sounds/Ben Kenobi - Learn Force.mp3"); // Set the path to your audio file
    audio.play();
    document.getElementById("info").innerHTML =
      "<p> Obi-Wan wields a blue-bladed lightsaber, representing his role as a Jedi Guardian, focused on defense and combat. He builds several sabers throughout his life, with his final one closely resembling the design of his former master, Qui-Gon Jinn. This saber plays a key role in his iconic battles, including those with Darth Maul and Anakin Skywalker. </p>";
  }
}
function redsaber() {
  if (screen == 2) {
    document.getElementById("charimg").classList.add("redsaber");
    var audio = new Audio("sounds/Darth Vader Join me.mp3"); // Set the path to your audio file
    audio.play();
    document.getElementById("info").innerHTML =
      "<p> Darth Vader's red-bladed lightsaber was created after his fall to the dark side. Sith lightsabers are red because their kyber crystals bleed, symbolizing the corruption of their users. His saber is a weapon of fear and precision, used to enforce the Empires will. </p>";
  }
}
function resetScreen() {
  // Reset styles and content for various elements
  screen = 1;
  document.getElementById("dagobah").classList.remove("translucent");
  document.getElementById("tatooine").classList.remove("translucent");
  document.getElementById("deathstar").classList.remove("translucent");
  document
    .getElementById("leftimg")
    .classList.remove(
      "dagobah-background",
      "tatooine-background",
      "ds-background"
    );
  document
    .getElementById("rightimg")
    .classList.remove(
      "dagobah-background",
      "tatooine-background",
      "ds-background"
    );
  document.getElementById("leftimg").classList.add("sides-img");
  document.getElementById("rightimg").classList.add("sides-img");

  // Reset images and classes for character and info boxes
  document
    .getElementById("charimg")
    .classList.remove(
      "yodaimg",
      "obiwanimg",
      "vaderimg",
      "greensaber",
      "bluesaber",
      "redsaber"
    );
  document.getElementById("charimg").classList.add("box-img");
  document.getElementById("info").classList.remove("box-img");
  document.getElementById("info").innerHTML = "";
  document.getElementById("info").classList.add("box-img");
  // Reset title class (if needed)
  document
    .getElementById("top")
    .classList.remove("dagobah-title", "tatooine-title", "ds-title");
}
