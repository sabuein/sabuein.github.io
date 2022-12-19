const yallah = () => {
    let today = new Date(),
        hour = today.getHours(),
        dateElement = document.getElementById("date");

    try {
        dateElement.innerHTML = today.toDateString();
        // To-Do, Maybe?
        // Apply the light or dark theme based on the time of day
        if (hour >= 8 && hour < 17) {
            console.log("It's light!");
        } else {
            console.log("It's dark!")
        }
    } catch (error) {
        dateElement.innerHTML = error.message;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    yallah();
});