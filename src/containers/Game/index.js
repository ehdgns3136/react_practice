import React from 'react';
import Board from '../../components/Board'
import '../../global/styles/index.css'
import { connect } from 'react-redux';
import { onClickSquareRequest } from './action'

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares = {this.props.squares}
                        xIsNext = {this.props.xIsNext}
                        onClickSquare = {this.props.onClickSquare}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        squares: state.squares,
        xIsNext: state.xIsNext,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onClickSquare: index => {
            dispatch(onClickSquareRequest(index))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
