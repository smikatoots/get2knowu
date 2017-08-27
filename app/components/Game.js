import React from 'react';
import PropTypes from 'prop-types';
import ButtonHolder from './ButtonHolder';
import Header from './Header';
import GameContainer from '../containers/GameContainer';
import { Route, Switch } from 'react-router-dom';

const styles = {
    main: {
        margin: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        outline: '0px !important',
        border: '0px !important',
        userSelect: 'none'
    },
    p: {
        lineHeight: '60px',
    },
    button: {
        fontSize: '15px',
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

class Game extends React.Component {
    render() {
        const gameClass = this.props.isHovered ? 'buttons-show' : 'buttons-hidden';
        return (
            <div id="main" className={gameClass}>
                <button style={styles.button}
                    className="normal-button"
                    type="text"
                    onClick={() => this.props.changeGame('NEVER_HAVE_I_EVER')}>NEVER HAVE I EVER
                </button>
                <button style={styles.button}
                    className="normal-button"
                    type="text"
                    onClick={() => this.props.changeGame('TRUTH_OR_DARE')}>TRUTH OR DARE
                </button>
            </div>
        );
    }
}

Game.propTypes = {
    changeGame: PropTypes.func,
    isHovered: PropTypes.boolean
};

export default Game;
