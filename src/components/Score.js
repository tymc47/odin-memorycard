const Score = ({scoreObj}) => {
    return <div className="score">
        <div>Score: {scoreObj.score}</div>
        <div>Best Score: {scoreObj.bestScore}</div>
     </div>
}

export default Score;