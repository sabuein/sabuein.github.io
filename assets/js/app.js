let today = new Date(),
    dateElement = document.getElementById("date");

try {
    dateElement.innerHTML = today.toDateString();
} catch(error) {
    dateElement.innerHTML = error.message;
}