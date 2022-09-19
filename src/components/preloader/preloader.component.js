import React, {Component} from 'react';
import './preloader.component.scss';

export default class PreloaderComponent extends Component {

    render() {

        let className = 'preloader --lines';

        if(this.props.loaded)
            className += " --hide";

        return (
            <div className={className}>
                <div className="preloader__item">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}

