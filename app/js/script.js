import Glide from "@glidejs/glide";

/* Sliders */

let sliders = [
    {
        selector: "main-carousel"
    },
    {
        selector: "products-slider",
        settings: {
            perView: 3,
            gap: 40,
            breakpoints: {
                1100: {
                    perView: 2
                },
                420: {
                    perView: 1
                }
            }
        }
    },
    {
        selector: "product-carousel"
    }
]

let createSlider = slider => {
    slider = {
        selector: document.getElementById(slider.selector) || "",
        settings: slider.settings || { perView: 1 }
    };

    if (slider.selector !== "") {
        new Glide(slider.selector, slider.settings).mount();
    }
};

for (let i = 0; i < sliders.length; i++) {
    createSlider(sliders[i]);
}
