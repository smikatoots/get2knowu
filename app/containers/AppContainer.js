import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { nextText, changeCategory, backToZero } from '../actions/index';
import App from '../components/App';
// import Header from '../components/Header';
import { _ } from 'underscore';
import content from '../content';
// const sampled = _.sample(content, content.length);

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

    render() {
        // let filtered = [];
        // let bgcolor = '';
        // const cat = this.props.categoryChange;
        // if (cat === 'BOTH') {
        //     filtered = _.shuffle([...sampled]);
        //     bgcolor = 'grey';
        // } else {
        //     filtered = _.filter(sampled, (item) => {
        //         return item.category === cat;
        //     });
        //     filtered = _.shuffle(filtered);
        //     if (cat === 'MILD') {
        //         bgcolor = '#39CCCC';
        //     } else if (cat === 'WILD') {
        //         bgcolor = 'pink';
        //     }
        // }
        return (
            <div>
                {/* <Header /> */}
                <App
                    handleKeyPress={(event) => this.handleKeyPress(event)}
                    handleOnClick={() => this.handleOnClick()}
                    changeAndReset={(category) => this.changeCatAndResetZero(category)}
                    // textChange={this.props.textChange}
                    categoryChange={this.props.categoryChange}
                />
            </div>

        );
    }
}

AppContainer.propTypes = {
    nextTextProp: PropTypes.func,
    changeCategoryProp: PropTypes.func,
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
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
