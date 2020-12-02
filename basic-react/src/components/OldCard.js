import Counter from "./Counter";

const Card = ({ name, institution }) => {
    return (
        <div className="card-container">
            <p>{name}</p>
            <p>{institution}</p>
            <Counter title="Counter Component" />
        </div>
    );
};

export default Card;