import React from 'react';

const styles = {
    title: {
        margin: '20px',
        fontWeight: 600,
    },
    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px 20px 0px 20px',
        backgroundColor: 'transparent'
    },
    menu: {
        width: '300px',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px'
    }
};

const Header = () => {
    return (
        <div id="header" style={styles.header}>
            <div id="title" style={styles.title}>GET2KNOWU</div>
            <div id="menu" style={styles.menu}>
                <span>ABOUT</span>
                <span>MORE</span>
                <span>SUBMIT</span>
            </div>
        </div>
    );
};

export default Header;
