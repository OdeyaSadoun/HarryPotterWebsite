window.onscroll = function() {
    // Check the scroll position
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // If scrolled down, reduce opacity
        document.getElementById("navbar").style.backgroundColor = "rgba(0, 42, 78, 0.8)"; // Adjust the opacity here
    } else {
        // If at the top, make it fully opaque
        document.getElementById("navbar").style.backgroundColor = "#002a4e";
    }
};