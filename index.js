/** @format */

document.getElementById("theme-icon").addEventListener("click", function () {
  const red = parseInt(Math.random() * 256);
  const green = parseInt(Math.random() * 256);
  const blue = parseInt(Math.random() * 256);

  if (red <= 255 && green <= 255 && blue <= 255) {
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
});

document.getElementById("clear-history").addEventListener("click", function () {
  const historyContainer = document.getElementById("history");
  historyContainer.innerHTML = "";
});

document.getElementById("date").innerText = new Date().toLocaleDateString(
  "en-GB",
  {
    day: "numeric",
    month: "long",
    year: "numeric",
  }
);

let assignedTaskElement = document.getElementById("task-assigned");
let assignedTask = parseInt(assignedTaskElement.innerText);
let completedTaskElement = document.getElementById("completedTask");
let completedTask = parseInt(completedTaskElement.innerText);

const cardContainer = document.getElementById("card-container");
cardContainer.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("btn")) {
    const card = e.target.closest(".task-box");

    if (card) {
      const title = card.querySelector("h2").innerText;
      const p = document.createElement("p");
      p.classList.add(
        "p-2",
        "bg-[#f4f7ff]",
        "rounded-lg",
        "text-start",
        "mb-2"
      );
      p.innerText = `You have Completed the task ${title} at ${new Date().toLocaleDateString(
        [],
        { hour: "2-digit", minute: "2-digit" }
      )}`;
      const historyTagParent = document.getElementById("history");
      historyTagParent.appendChild(p);

      assignedTask -= 1;
      assignedTaskElement.innerText = assignedTask;
      completedTask += 1;
      completedTaskElement.innerText = completedTask;

      if (assignedTask === 0) {
        alert(`You have successfully completed the task: ${title}`);
        alert("🎉 Congratulations!! You Have Completed All Tasks! 🎉");
      } else {
        alert("Board Updated Successfully");
      }
    }
    e.target.setAttribute("disabled", "true");
  }
});
