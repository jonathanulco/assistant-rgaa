import React, {PropTypes} from 'react';
import {map, includes} from 'lodash';
import {FormattedMessage} from 'react-intl';
import ThemesListItem from './ThemesListItem';



const icons = {
	1: 'image.png',
	2: 'application-sidebar.png',
	3: 'color.png',
	4: 'film.png',
	5: 'table.png',
	6: 'link.png',
	7: 'script-text.png',
	8: 'navigation-090.png',
	9: 'newspaper.png',
	10: 'wand.png',
	11: 'ui-toolbar.png',
	12: 'arrow-split.png',
	13: 'book-brown.png'
};

/**
 *
 */
export default function ThemesList({themes, activeTheme, inactiveThemes}) {
	return (
		<nav className="ThemesList">
			<h2 className="ThemesList-title Title">
				<FormattedMessage id="ThemesList.title" />
			</h2>
			<ul className="ThemesList-list">
				{map(themes, (theme) =>
					<ThemesListItem
						{...theme}
						icon={icons[theme.id]}
						isActive={activeTheme === theme.id}
						isDisabled={includes(inactiveThemes, theme.id)}
						key={theme.id}
					/>
				)}
			</ul>
		</nav>
	);
}

ThemesList.propTypes = {
	themes: PropTypes.object.isRequired,
	activeTheme: PropTypes.string,
	inactiveThemes: PropTypes.array
};

ThemesList.defaultProps = {
	activeTheme: {
		id: null
	},
	inactiveThemes: []
};
