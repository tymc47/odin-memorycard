import { useEffect, useState } from "react";
import Score from "./components/Score";
import CardContainer from "./components/CardContainer";
import cardsData from "./cards";

function App() {
  const [score, setScore] = useState({
    score: 0,
    bestScore: 0
  })
  const [cards, setCards] = useState([])

  useEffect(() => {
    const cardsArray = cardsData.map(card => ({...card, isClicked: false}))
    setCards(shuffle(cardsArray))
  }, [])

  //Fisher-Yates Shuffle
  const shuffle = (cards) => {
    const arrayCopy = [...cards]
    let randomIndex, index = arrayCopy.length;

    while (index !== 0){
      randomIndex = Math.floor(Math.random() * index);
      index -= 1;

      [arrayCopy[index], arrayCopy[randomIndex]] = [arrayCopy[randomIndex], arrayCopy[index]];
    }

    return arrayCopy;
  }

  const cardClick = (name) => {
    const target = cards.find(card => card.name === name)
    if (!target.isClicked){
      //update cards clicked status
      setCards(cards.map(card => card.name !== name ? card : ({...card, isClicked: true})))
      //update score
      setScore({
        score: score.score + 1,
        bestScore: score.score >= score.bestScore ? score.score + 1 : score.bestScore
      })
    } else {
      //reset cards isClicked
      setCards(cards.map(card => ({...card, isClicked: false})))
      //reset score only
      setScore({...score, score: 0})
    }

    //shuffle cards arra
    setCards(prevState => shuffle(prevState));
  }

  return (
    <div className="App">
      <div className="banner">
        <h1>Memory Game</h1>
        <span>Try to click on as many different countries as possible!</span>
      </div>
      <Score scoreObj={score}/>
      <CardContainer cardsObj={cards} cardClick={cardClick}/>
    </div>
  );
}

export default App;
