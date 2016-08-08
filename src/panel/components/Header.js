import React, {PropTypes} from 'react';
import {FormattedMessage, injectIntl} from 'react-intl';
import DockMenuContainer from './DockMenuContainer';



/**
 *
 */
function Header({onOptionsClick, onImportClick}) {
	return (
		<header className="Header">
			<h1 className="Header-title">
				<FormattedMessage id="Header.title" />
			</h1>

			<div className="Header-actions">
				<DockMenuContainer />

				<button
					type="button"
					onClick={onImportClick}
					className="Link"
				>
					<FormattedMessage id="Header.import" />
				</button>

				<button
					type="button"
					onClick={onOptionsClick}
					className="Link"
				>
					<FormattedMessage id="Header.options" />
				</button>
			</div>
		</header>
	);
}

Header.propTypes = {
	onOptionsClick: PropTypes.func.isRequired,
	onImportClick: PropTypes.func.isRequired
};

export default injectIntl(Header);
