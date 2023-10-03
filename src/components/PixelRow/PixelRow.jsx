import Pixel from '../Pixel/Pixel';

function PixelRow(props) {
    const { width, color } = props;
    const pixels = [...Array(width).keys()];

    const pixelComponents = pixels.map((pixelId) => {
        return <Pixel key={ pixelId } color={ color } />
    })

    return (
        <section>
            { pixelComponents }
        </section>
    )
}

export default PixelRow;