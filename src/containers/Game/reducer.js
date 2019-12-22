import { ON_CLICK_SQUARE } from "./action";

const initialState = {
    squares: Array(9).fill(null),
    xIsNext: true,
};

function gameReducer(state = initialState, action) {
    switch(action.type) {
        case ON_CLICK_SQUARE: {
            return {
                squares: state.squares.map((item, index) => {
                    if (index !== action.index) return item;
                    return state.xIsNext ? 'X' : 'O';
                }),
                xIsNext: !state.xIsNext,
            };
        }
        default:
            return state;
    }
}

export default gameReducer;
