import { useState } from 'react';
import './App.css'
import Timer from "./components/Timer.jsx";
import Questions from './components/Questions.jsx';
import Result from './components/Result.jsx';

function App() {

  const [isOver, setIsOver] = useState(false);
  const [score, setScore] = useState(0);
  const [prevQuestionActive, setPrevQuestionActive] = useState(false);
  const [nextQuestionActive, setNextQuestionActive] = useState(false);
  const [isLastQuestion, setIsLastQuestion] = useState(false);

  function restart() {
    setIsOver(false);
    setPrevQuestionActive(false);
    setNextQuestionActive(false);
    setIsLastQuestion(false);
    setScore(0);
  }

  return (
		<>
			<h1>Welcome to Quiz App</h1>
			{!isOver ? (
				<>
					<Timer setIsOver={setIsOver} />
					<div className="flex justify-center">
						<Questions
							setIsOver={setIsOver}
							setScore={setScore}
							setPrevQuestionActive={setPrevQuestionActive}
							setNextQuestionActive={setNextQuestionActive}
							setIsLastQuestion={setIsLastQuestion}
              prevQuestionActive={prevQuestionActive}
              nextQuestionActive={nextQuestionActive}
              isLastQuestion={isLastQuestion}
						/>
					</div>
				</>
			) : (
				<>
					<Result score={score} />
					<div
						className="text-center mt-5"
						onClick={restart}
					>
						<button className="button ">Restart</button>
					</div>
				</>
			)}
		</>
  );
}

export default App
