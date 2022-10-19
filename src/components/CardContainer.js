const CardContainer = ({cardsObj, cardClick}) => {

    return <div className="card-container">
        {cardsObj.map(card => {
            return <div className="card" key={card.name} onClick={() => cardClick(card.name)}>
                <img alt={card.name} src={card.url}></img>
            </div>
        })}
    </div>
}

export default CardContainer;