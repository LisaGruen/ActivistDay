import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Content = ({image, text}) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="card p-3" onClick={() => setFlipped(!flipped)}>
            {
                flipped ? (    
                    <div className="card__text">
                        <p>{text}</p>
                    </div>
                ) : (
                    <img src={image} />
                )
            }
        </div>
	);
};

Content.propTypes = {
    image: PropTypes.string,
    text: PropTypes.string
};

export default Content;