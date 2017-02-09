import {takeEvery} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import {setOption} from '../api/options';
import {getReference, flattenReference} from '../api/reference';
import {getHelpers} from '../api/helpers';
import {fetchInstructions} from '../api/instructions';
import {SET_REFERENCE_VERSION, setReference} from '../actions/reference';
import * as themesActions from '../actions/themes';
import * as criteriaActions from '../actions/criteria';
import * as testsActions from '../actions/tests';
import {setHelpers} from '../actions/helpers';
import {set as setInstructions} from '../actions/instructions';
import {reset as resetChecklist} from '../actions/checklist';



/**
 *
 */
function* setReferenceVersionWorker({payload: {version}}) {
	const [reference, helpers, instructions] = yield [
		call(getReference, version),
		call(getHelpers, version),
		call(fetchInstructions, version)
	];

	const flattened = flattenReference(reference);

	yield put(resetChecklist());
	yield put(setReference(flattened.reference));
	yield put(themesActions.setAll(flattened.themes));
	yield put(criteriaActions.setAll(flattened.criteria));
	yield put(testsActions.setAll(flattened.tests));
	yield put(setHelpers(helpers));
	yield put(setInstructions(instructions));

	yield call(setOption, 'reference', version);
}



/**
 *
 */
export function* watchSetReferenceVersion() {
	yield* takeEvery(SET_REFERENCE_VERSION, setReferenceVersionWorker);
}

