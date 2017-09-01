import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    never: {
        fontSize: '30px',
        marginTop: '100px',
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
        let never = '';
        if (this.props.textChange === this.props.categoryChange.contents.length - 1) {
            this.resetZero();
        }

        if (this.props.categoryChange.game === 'NEVER_HAVE_I_EVER') {
            never = 'Never have I ever';
        } else {
            if (this.props.categoryChange.contents[this.props.textChange].category === 'TRUTH') {
                never = 'Tell me the truth about';
            } else {
                never = 'I dare you to';
            }
        }

        return (

            <div>
                {
                    this.props.categoryChange.game === '' ?
                    <div id="middle" style={styles.middle}>
                        <p id="never" style={styles.never}>Hover above to choose your game.</p>
                    </div> :
                    <div id="middle" style={styles.middle}>
                        <p id="never" style={styles.never}>{never}</p>
                        <p id="prompt" style={styles.prompt}>{this.props.categoryChange.contents[this.props.textChange].text}.</p>
                    </div>
                }
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
