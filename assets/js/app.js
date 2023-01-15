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

// // To-DO: Toggle the automatic dark mode
// const query = window.matchMedia("(prefers-color-scheme: dark)");
// function toggleScheme(e) {
//     (e.matches) ? console.log("The dark scheme is activated") : console.log("The light scheme is activated");
// }
// query.addEventListener("change", toggleScheme);

// // Toggle button
// let button = document.getElementById("toggle"),
//     changeMe = new Event("change");
// button.addEventListener("click", () => {
//     query.dispatchEvent(changeMe);
// });