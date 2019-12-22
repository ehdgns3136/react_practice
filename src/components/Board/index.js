import React from 'react';
import Square from '../Square'
import '../../global/styles/index.css'
import PropTypes from "prop-types";

class Board extends React.Component {
    handleClick(i) {
        if (this.calculateWinner() || this.props.squares[i]) {
            return;
        }
        this.props.onClickSquare(i);
    }

    renderSquare(i) {
        return <Square
            value={this.props.squares[i]}
            onClick={() => this.handleClick(i)}
        />;
    }

    calculateWinner() {
        const squares = this.props.squares;
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    render() {
        const winner = this.calculateWinner();
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

Board.propTypes = {
    onClickSquare: PropTypes.func.isRequired,
    squares: PropTypes.arrayOf(PropTypes.string).isRequired,
    xIsNext: PropTypes.bool.isRequired,
};

export default Board
