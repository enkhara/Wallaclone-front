import React from 'react';
import T from 'prop-types';

import Header from './Header.js';

function Layout({ children, title, ...props }) {
	return (
		<div className="layout">
			<Header className="layout-header " {...props} />
			<main className="layout-main">
				<h2 className="layout-title ">{title}</h2>
				<section className="layout-content">{children}</section>
			</main>
			<footer className="layout-footer ">© 202</footer>
		</div>
	);
}

Layout.propTypes = {
	children: T.node,
	title: T.string,
};

Layout.defaultProps = {
	children: null,
};

export default Layout;
