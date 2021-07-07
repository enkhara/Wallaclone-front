import T from 'prop-types';
import { Button } from '@material-ui/core';

import { Link } from 'react-router-dom';

const Header = ({ className, ...props }) => {
	return (
		<header className="header" {...props}>
			<Link to="/adverts">
				<div className="header-title">Wallaclone</div>
			</Link>
			<nav className="header-nav">
				<Button className="header-button" />

				<Button
					as={Link}
					to="/advert/new"
					variant="primary"
					className="header-button"
				>
					New advert
				</Button>
			</nav>
		</header>
	);
};

Header.propTypes = {
	className: T.string,
};

export default Header;
