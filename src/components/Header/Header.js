import React, { PureComponent } from 'react'

class Header extends PureComponent {
    render() {
        return (
            <header
              style={{backgroundColor: 'red'}}
              className="Header">This is the Header Biatchez</header>
        );
    }
}

Header.propTypes = {}

Header.defaultProps = {}

export default Header
