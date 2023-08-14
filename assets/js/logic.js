const yallah = () => {
    try {
        let address = [4, 44.4];
        const location = tt.map({
            key: "bNImqGuYGADbG6YV0CeG4k2PRkAgbkTz",
            container: "map",
            center: "address",
            zoom: 10
        });

        location.on("load", () => {
            new tt.Popup().setLagLat(address).setText("Hello there!").addTo(location);
            // new tt.Marker().setLngLat(address).addTo(location);
        });


        // tt.setProductInfo("<your-product-name>", "<your-product-version>");



        // map.addControl(new tt.FullscreenControl());
        // map.addControl(new tt.NavigationControl());

    } catch (error) {
        console.error(error.message);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const dataModified = document.getElementById("lastModified");
    dataModified.innerHTML = String(document.lastModified);

    // To-Do, Maybe?
    // Apply the light or dark theme based on the time of day
    let today = new Date(), hour = today.getHours();
    if (hour >= 8 && hour < 17) {
        console.log("It's light!");
    } else {
        console.log("It's dark!");
    }

    // yallah();
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