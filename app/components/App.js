import React from 'react';
import PropTypes from 'prop-types';
import ButtonHolder from './ButtonHolder';
import BackButton from './BackButton';
import Header from './Header';
import MiddleContainer from '../containers/MiddleContainer';
import GameContainer from '../containers/GameContainer';
import GameButtonHolder from '../components/GameButtonHolder';

import { Route, Switch } from 'react-router-dom';

const styles = {
    main: {
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        outline: '0px !important',
        border: '0px !important',
        userSelect: 'none'
    },
    p: {
        lineHeight: '60px',
    },
    middle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }

};

class App extends React.Component {
    render() {
        return (
            <div id="main"
                style={Object.assign({}, styles.main, { backgroundColor: this.props.categoryChange.color, outline: 'none' })}
                tabIndex="1"
                onKeyDown={(event) => this.props.handleKeyPress(event)}>
                <Header />
                <GameButtonHolder />
                {
                    this.props.categoryChange.game === '' ?
                    <div style={styles.middle}>Hover above to choose your game.</div> :
                    <div style={styles.middle}>
                        <MiddleContainer />
                        <ButtonHolder categoryChange={this.props.categoryChange} changeAndReset={(cat) => this.props.changeAndReset(cat)} />
                    </div>
                }
            </div>
        );
    }
}

App.propTypes = {
    textChange: PropTypes.string,
    categoryChange: PropTypes.object,
    backToZeroProp: PropTypes.func,
    changeAndReset: PropTypes.func,
    handleKeyPress: PropTypes.func,
    handleOnClick: PropTypes.func,
    handleHover: PropTypes.func,
    filteredArray: PropTypes.array,
    bgColor: PropTypes.string,
    changeGame: PropTypes.func
};

export default App;
