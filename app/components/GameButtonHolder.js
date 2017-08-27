import React from 'react';
import PropTypes from 'prop-types';
import Buttons from './Buttons';
import GameContainer from '../containers/GameContainer';

const styles = {
};

class GameButtonHolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false
        };
    }

    handleHover = () => {
        this.setState({
            isHovered: !this.state.isHovered
        });
    }

    render() {
        return (
            <div
                onMouseEnter={() => this.handleHover()}
                onMouseLeave={() => this.handleHover()}>
                <GameContainer isHovered={this.state.isHovered}/>
            </div>
        );
    }
}

GameButtonHolder.propTypes = {
    changeAndReset: PropTypes.func,
    categoryChange: PropTypes.object
};


export default GameButtonHolder;
