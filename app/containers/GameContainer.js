import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { changeGame } from '../actions/index';
import AppGContainer from '../containers/AppContainer';
import Game from '../components/Game';
import { _ } from 'underscore';
import content from '../content';

class GameContainer extends React.Component {
    constructor(props) {
        super(props);
    }


    changeGame = (game) => {
        this.props.changeGameProp(game);
    }

    render() {
        return (
            <div>
                <Game
                    changeGame={(game) => this.changeGame(game)}
                    isHovered={this.props.isHovered}
                />
            </div>

        );
    }
}

GameContainer.propTypes = {
    changeGameProp: PropTypes.func,
    isHovered: PropTypes.boolean,
};

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeGameProp: (game) => dispatch(changeGame(game)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
