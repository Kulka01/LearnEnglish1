const video = document.querySelector("video");
const feed = document.getElementById("feed");
const rabbitButton = document.getElementById("feedTheRabbit");


function resetButtons(button){
  const container = button.closest(".container");
  const buttons = container.querySelectorAll("button");
  buttons.forEach(btn => {btn.style.backgroundColor = "";
})
return container;
}



function bad1(button) {
  const container1 = resetButtons(button);
 // const container = button.closest(".container");
  container1.dataset.completed = "false";
  button.style.backgroundColor= "red";
}
function good(button) {
  const container1 = resetButtons(button);
//  const container = button.closest(".container");
    container1.dataset.completed = "true";
  button.style.backgroundColor= "green";
}


function checkAll() {
  const containers = document.querySelectorAll(".container");
  const allGood = [...containers].every(
      container => container.dataset.completed == "true"
  );

  if (allGood) {
    feed.textContent = "Congrats! All good! Press the button below."
    rabbitButton.style.display = "table";
    rabbitButton.style.margin = "0 auto";
  }
  else {
    feed.textContent="Correct your answers"
    rabbitButton.style.display = "none"
  }
}
function hungryRabbit() {
  video.currentTime = 0;
  video.play();
}








