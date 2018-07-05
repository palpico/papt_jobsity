import React from 'react';

class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                <img src={require('../../images/logo.svg')} alt=""/>
                <img src={require('../../images/type.svg')} alt=""/>
            </div>
        );
    }
}

export default Logo;