import './Pixel.css';
import { useState } from 'react';

function Pixel(props) {
    const { color } = props;
    const [pixelColor, setPixelColor] = useState('');
    const [oldPixelColor, setOldPixelColor] = useState('');
    const [canChangeColor, setCanChangeColor] = useState(true);

    function onClick() {
        setPixelColor(color);
        setCanChangeColor(false);
    }

    function onMouseOver() {
        setOldPixelColor(pixelColor)
        setPixelColor(color);
    }

    function onMouseLeave() {
        if (canChangeColor) {
            setPixelColor(oldPixelColor);
        }

        setCanChangeColor(true);
    }

    return (
        <article
            className='pixel'
            onClick={ onClick }
            onMouseOver={ onMouseOver }
            onMouseLeave={ onMouseLeave }
            style={{ backgroundColor: pixelColor.hex }}
        >
        </article>
    )
}

export default Pixel;
