import React from 'react';
import PropTypes from 'prop-types';
import ButtonHolder from './ButtonHolder';
import Header from './Header';
import MiddleContainer from '../containers/MiddleContainer';
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

};

class App extends React.Component {
    render() {
        return (
            <div id="main"
                style={Object.assign({}, styles.main, { backgroundColor: this.props.categoryChange.color, outline: 'none' })}
                tabIndex="1"
                // onClick={() => this.props.handleOnClick()}
                onKeyDown={(event) => this.props.handleKeyPress(event)}>
                <Header />
                <button
                    type="text"
                    onClick={() => this.props.changeGame('NEVER_HAVE_I_EVER')}>NEVER_HAVE_I_EVER
                </button>
                <button
                    type="text"
                    onClick={() => this.props.changeGame('TRUTH_OR_DARE')}>TRUTH_OR_DARE
                </button>
                <MiddleContainer />
                <ButtonHolder
                    changeAndReset={(cat) => this.props.changeAndReset(cat)}
                />
                {/* <div
                    style={styles.rad}
                    onMouseEnter={() => this.handleHover()}
                    onMouseLeave={() => this.handleHover()}>
                    <Buttons isHovered={this.state.isHovered} changeAndReset={(cat) => this.props.changeAndReset(cat)}/>
                </div> */}
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
