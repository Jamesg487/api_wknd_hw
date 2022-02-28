import { useState } from "react"

const ColourSlider = () => {

    const [backgroundColour, setBackgroundColour] = useState("hsl(292, 27%, 27%)")

    const background = document.querySelector("body")

    const handleSlider = (event) => {
        setBackgroundColour(`hsl(${event.target.value}, 27%, 27%)`)
        background.style.background = backgroundColour;
    }

    return (
        <div class="slider">
            <label>Background Colour
                <input onChange={handleSlider} type="range" min="0" max="345"></input>
            </label>
        </div>
    )

}

export default ColourSlider;