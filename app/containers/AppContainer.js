import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { nextText, changeCategory, backToZero, changeGame } from '../actions/index';
import App from '../components/App';
import { _ } from 'underscore';
import content from '../content';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.props.nextTextProp();
        }
    }

    handleOnClick = () => {
        this.props.nextTextProp();
    }

    resetZero = () => {
        this.props.backToZeroProp();
    }

    changeCatAndResetZero = (category) => {
        this.resetZero();
        this.props.changeCategoryProp(category);
    }

    changeGame = (game) => {
        this.props.changeGameProp(game);
    }

    render() {
        return (
            <div>
                <App
                    handleKeyPress={(event) => this.handleKeyPress(event)}
                    handleOnClick={() => this.handleOnClick()}
                    changeAndReset={(category) => this.changeCatAndResetZero(category)}
                    // textChange={this.props.textChange}
                    categoryChange={this.props.categoryChange}
                    changeGame={(game) => this.changeGame(game)}
                />
            </div>

        );
    }
}

AppContainer.propTypes = {
    nextTextProp: PropTypes.func,
    changeCategoryProp: PropTypes.func,
    changeGameProp: PropTypes.func,
    textChange: PropTypes.num,
    categoryChange: PropTypes.object,
    backToZeroProp: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        // textChange: state.textChange,
        categoryChange: state.categoryChange
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        nextTextProp: () => dispatch(nextText()),
        changeCategoryProp: (category) => dispatch(changeCategory(category)),
        backToZeroProp: () => dispatch(backToZero()),
        changeGameProp: (game) => dispatch(changeGame(game)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
