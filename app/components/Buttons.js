import React from 'react';
import PropTypes from 'prop-types';


const styles = {
    // buttons: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     backgroundColor: 'black'
    // },
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

class Buttons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const btnClass = this.props.isHovered ? 'buttons-show' : 'buttons-hidden';
        const mildBtnClass = this.props.isHovered ? 'mild-show mild' : 'mild-hidden mild';
        const wildBtnClass = this.props.isHovered ? 'wild-show wild' : 'wild-hidden wild';
        const bothBtnClass = this.props.isHovered ? 'both-show both' : 'both-hidden both';
        return (
            <div id="buttons"
                // className={btnClass}
                style={styles.buttons}>
                <button
                    className={mildBtnClass}
                    style={styles.button}
                    type="text"
                    onClick={() => this.props.changeAndReset('MILD')}>MILD
                </button>
                <button
                    className={wildBtnClass}
                    style={styles.button}
                    type="text"
                    onClick={() => this.props.changeAndReset('WILD')}>WILD
                </button>
                <button
                    className={bothBtnClass}
                    style={styles.button}
                    type="text"
                    onClick={() => this.props.changeAndReset('BOTH')}>BOTH
                </button>
            </div>
        );
    }
}

Buttons.propTypes = {
    changeAndReset: PropTypes.func,
    handleHover: PropTypes.func,
    isHovered: PropTypes.boolean,
};

export default Buttons;
