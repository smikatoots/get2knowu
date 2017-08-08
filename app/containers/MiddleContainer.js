import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { backToZero } from '../actions/index';
import Middle from '../components/Middle';

class MiddleContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Middle
                    textChange={this.props.textChange}
                    categoryChange={this.props.categoryChange}
                    backToZeroProp={this.props.backToZeroProp}
                />
            </div>

        );
    }
}

MiddleContainer.propTypes = {
    textChange: PropTypes.num,
    categoryChange: PropTypes.object,
    backToZeroProp: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        textChange: state.textChange,
        categoryChange: state.categoryChange
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        backToZeroProp: () => dispatch(backToZero()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MiddleContainer);
