export const NumActionTypes = {
	ADD_NUM: 'ADD_NUM',
	MINUS_NUM: 'MINUS_NUM',
	REPLACE_NUM: 'REPLACE_NUM'
};

export const NumActionCreators = {
	AddActionCreator(payload) {
		return {
			type: NumActionTypes.ADD_NUM,
			payload
		};
	},
	MinusActionCreator(payload) {
		return {
			type: NumActionTypes.MINUS_NUM,
			payload
		};
	},
	ReplaceActionCreator(payload) {
		return {
			type: NumActionTypes.REPLACE_NUM,
			payload
		};
	}
};
