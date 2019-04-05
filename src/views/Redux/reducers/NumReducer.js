import { NumActionTypes } from '../actions/NumAction';
// import { from } from "rxjs";

export default function NumReducer(preState = 0, action) {
	switch (action.type) {
		case NumActionTypes.ADD_NUM:
			return preState + action.payload;
		case NumActionTypes.MINUS_NUM:
			return preState - action.payload;
		case NumActionTypes.REPLACE_NUM:
			return action.payload;
		default:
			return preState;
	}
}
