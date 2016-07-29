import * as container from './container';
import * as messages from './messages';
import * as syncedActions from './synced-actions';
import * as optionsActions from './options';



/**
 *	Exports all sagas of the application.
 */
export default function* sagas() {
	yield [
		container.watchRequestPopup(),
		messages.watchSend(),
		syncedActions.watchSyncedActions(),
		optionsActions.watchOpen()
	];
}
