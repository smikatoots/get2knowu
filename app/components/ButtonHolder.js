import React from 'react';
import PropTypes from 'prop-types';
import Buttons from './Buttons';

const styles = {
    rad: {
        height: 'auto',
        width: 'auto',
        position: 'absolute',
        bottom: '5%'
    },
};

class ButtonHolder extends React.Component {
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
                style={styles.rad}
                onMouseEnter={() => this.handleHover()}
                onMouseLeave={() => this.handleHover()}>
                <Buttons isHovered={this.state.isHovered} changeAndReset={(cat) => this.props.changeAndReset(cat)}/>
            </div>
        );
    }
}

ButtonHolder.propTypes = {
    changeAndReset: PropTypes.func,
};


export default ButtonHolder;
