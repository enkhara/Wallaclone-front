import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon
} from 'react-share';

class shareAdvert extends Component {
    render() {
        return (
            <div>
                <FacebookShareButton url={this.props.Url} quote={`${this.props.Title} - ${this.props.Resumen}`}>
                    <FacebookIcon round size={32} />
                </FacebookShareButton>

                <TwitterShareButton url={this.props.Url} title={this.props.Title}>
                    <TwitterIcon round size={32} />
                </TwitterShareButton>

                <WhatsappShareButton url={this.props.Url} title={this.props.title}>
                    <WhatsappIcon round size={32} />
                </WhatsappShareButton>

        </div>
    );
    }
};

shareAdvert.propTypes = {
    Url: PropTypes.string,
    Title: PropTypes.string,
    Resumen: PropTypes.string
};

export default shareAdvert;