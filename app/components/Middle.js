import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    never: {
        fontSize: '30px',
        marginTop: '150px',
        fontWeight: '500',
    },
    prompt: {
        marginTop: '-20px',
        fontWeight: '500',
        textAlign: 'center',
        lineHeight: '65px',
        marginLeft: '50px',
        marginRight: '50px'
    },
    middle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }
};

class Middle extends React.Component {
    constructor(props) {
        super(props);
    }

    resetZero = () => {
        this.props.backToZeroProp();
    }

    render() {
        if (this.props.textChange === this.props.categoryChange.contents.length - 1) {
            this.resetZero();
        }
        return (
            <div id="middle" style={styles.middle}>
                <p id="never" style={styles.never}>Never have I ever</p>
                <p id="prompt" style={styles.prompt}>{this.props.categoryChange.contents[this.props.textChange].text}.</p>
            </div>
        );
    }
}

Middle.propTypes = {
    textChange: PropTypes.num,
    categoryChange: PropTypes.object,
    backToZeroProp: PropTypes.func,
};

export default Middle;
