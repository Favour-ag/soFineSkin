const searchInput = document.getElementById("searchInput");
const searchList = document
  .getElementById("searchList")
  .getElementsByTagName("li");

searchInput.addEventListener("keyup", function (event) {
  const searchTerm = event.target.value.toLowerCase();

  Array.from(searchList).forEach(function (item) {
    const text = item.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
