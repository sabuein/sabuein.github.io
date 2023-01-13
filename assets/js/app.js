const yallah = () => {
    let today = new Date(),
        hour = today.getHours(),
        dataModified = document.getElementById("lastModified");

    try {
        dataModified.innerHTML = document.lastModified;
        // To-Do, Maybe?
        // Apply the light or dark theme based on the time of day
        if (hour >= 8 && hour < 17) {
            console.log("It's light!");
        } else {
            console.log("It's dark!")
        }
    } catch (error) {
        dataModified.innerHTML = error.message;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    yallah();
});