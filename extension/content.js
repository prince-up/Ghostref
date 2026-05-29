console.log("GhostRef Loaded");

if (!window.location.pathname.startsWith("/in/")) {
    console.log("Not a profile page");
    return;
}

setTimeout(() => {
    const profileName = document.querySelector("h1");

    if (profileName) {
        console.log("Profile Name:", profileName.innerText);
    }
}, 3000);