import React from 'react';
import '../../styles/styles_all.css';

class LogoWide extends React.Component {
    render() {
        return (
            <div>
                <img src={require('../../images/logowide.svg')} className="logo" alt=""/>
            </div>
        );
    }
}

class Logo extends React.Component {
    render() {
        return (
            <div>
                <img src={require('../../images/logo.svg')} className="logo" alt=""/>
            </div>
        );
    }
}

export {Logo, LogoWide};