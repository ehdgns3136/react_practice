export const ON_CLICK_SQUARE = "ON_CLICK_SQUARE";

export function onClickSquareRequest(index) {
    return {
        type: ON_CLICK_SQUARE,
        index: index,
    };
}

