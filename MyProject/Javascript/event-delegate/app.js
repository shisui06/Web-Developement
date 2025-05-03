const button = document.getElementById("add-item");

const list = document.getElementById("remove-list");

list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.remove(); // 💥 Remove the clicked item
  }
});
