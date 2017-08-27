import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    button: {
        fontSize: '20px',
        fontFamily: 'Avenir',
        color: 'white',
        fontWeight: '200',
        padding: '10px',
        border: '5px solid white',
        borderRadius: '10px',
        margin: '10px',
        cursor: 'pointer',
    }
};

class BackButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="buttons"
                style={styles.buttons}>
                <button
                    className="normal-button"
                    style={styles.button}
                    type="text">
                </button>
            </div>
        );
    }
}

BackButton.propTypes = {
    // changeAndReset: PropTypes.func,
    // handleHover: PropTypes.func,
    // isHovered: PropTypes.boolean,
    // categoryChange: PropTypes.object
};

export default BackButton;
