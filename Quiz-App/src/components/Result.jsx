import questions from "../assets/questions.json";

const Result = ({ score }) => {
    return (
        <div>
            <h2>Result: { score } out of {questions.length} </h2>
        </div>
    )
}

export default Result
