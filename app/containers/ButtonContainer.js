import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { changeCategory, backToZero, changeGame } from '../actions/index';
import Buttons from '../components/Buttons';
// import Header from '../components/Header';
import { _ } from 'underscore';

class ButtonContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    resetZero = () => {
        this.props.backToZeroProp();
    }

    changeCatAndResetZero = (category) => {
        this.resetZero();
        this.props.changeCategoryProp(category);
    }

    render() {
        return (
            <div>
                <Buttons
                    handleKeyPress={(event) => this.handleKeyPress(event)}
                    handleOnClick={() => this.handleOnClick()}
                    changeAndReset={(category) => this.changeCatAndResetZero(category)}
                    changeTheGame={(game) => this.changeTheGame(game)}
                    isHovered={this.props.isHovered}
                    categoryChange={this.props.categoryChange}
                    // gameChange={this.props.gameChange}
                    // textChange={this.props.textChange}
                />
            </div>

        );
    }
}

ButtonContainer.propTypes = {
    // nextTextProp: PropTypes.func,
    changeCategoryProp: PropTypes.func,
    gameChange: PropTypes.object,
    // textChange: PropTypes.num,
    categoryChange: PropTypes.object,
    isHovered: PropTypes.boolean,
    backToZeroProp: PropTypes.func,
    changeGameProp: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        // textChange: state.textChange,
        // categoryChange: state.categoryChange,
        // gameChange: state.gameChange
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // nextTextProp: () => dispatch(nextText()),
        changeCategoryProp: (category) => dispatch(changeCategory(category)),
        backToZeroProp: () => dispatch(backToZero()),
        changeGameProp: (game) => dispatch(changeGame(game))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonContainer);
