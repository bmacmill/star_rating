import React from "react"
import { FaStar } from "react-icons/fa";
import "./star.css"


export default function Star({ numberOfStars }) {

    const [rating, setRating] = React.useState(0)
    const [hover, setHover] = React.useState(0)

    function handleClick(currentIndex) {
        setRating(currentIndex)
    }
    function handleMouseOver(index) {
        setHover(index)
    }

    function handleMouseLeave() {
        setHover(rating)
    }

    const starArray = [...Array(numberOfStars)]

    return (
        <div>

            {starArray.map((_, index) => {
                index = index += 1
                return (
                    <FaStar
                        key={index}
                        size={36}
                        onClick={() => handleClick(index)}
                        className={index <= (hover || rating) ? "active" : "inactive"}
                        onMouseMove={() => handleMouseOver(index)}
                        onMouseLeave={handleMouseLeave}
                    />
                )
            })

            }
        </div>
    )
}

