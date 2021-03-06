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
                <FacebookShareButton
                    url={this.props.Url.replace(/ /g, "%20")}
                    quote={`${this.props.Title} - ${this.props.Resumen}`}
                    hashtag="#"
                >
                    <FacebookIcon round size={32} />
                </FacebookShareButton>

                <TwitterShareButton url={this.props.Url.replace(/ /g, "%20")} title={this.props.Title}>
                    <TwitterIcon round size={32} style={{margin:'0 0.5rem'}}/>
                </TwitterShareButton>

                <WhatsappShareButton url={this.props.Url.replace(/ /g, "%20")} title={this.props.title}>
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