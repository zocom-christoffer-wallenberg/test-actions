import './DrawingPanel.css';

import PixelRow from '../PixelRow/PixelRow';

function DrawingPanel(props) {
    const { width, height, color } = props;
    // const pixelRows = [];

    // for (let i = 0; i < height; i++) {
    //     pixelRows.push(<PixelRow key={ i } width={ width } color={ color } />);
    // }

    const pixelRows = [...Array(height).keys()];
    const pixelRowComponents = pixelRows.map((rowId) => {
        return <PixelRow key={ rowId } width={ width } color={ color } />
    });

    return (
        <section className='drawing-panel'>
            { pixelRowComponents }
        </section>
    )
}

export default DrawingPanel;
