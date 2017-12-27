
// not application state ... here state is local
export default function (state = null , action) {
	switch (action.type){
		case'BOOK_SELECTED':
		return action.payload;
	}
	return state;
}