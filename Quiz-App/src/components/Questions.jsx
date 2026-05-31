import { useState } from "react";
import questions from "../assets/questions.json";

const Questions = ({
	setIsOver,
	setScore,
	setPrevQuestionActive,
	setNextQuestionActive,
	setIsLastQuestion,
    prevQuestionActive,
    nextQuestionActive,
    isLastQuestion
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
    const [currentOption, setCurrentOption] = useState('');


	function renderNavigation(option) {
		if (currentIndex != 0)
            setPrevQuestionActive(true);
        else setPrevQuestionActive(false);
        setNextQuestionActive(true);
        setCurrentOption(option);
	}

	function nextQuestion() {
        setPrevQuestionActive(true);

        if (currentIndex + 1 == questions.length - 1) setIsLastQuestion(true);

		if (questions[currentIndex].answer === currentOption) {
			setScore((prev) => prev + 1);
		}
        
		if (currentIndex + 1 >= questions.length) {
            setIsOver(true);
			return;
		}
        
		setCurrentIndex((currentIndex) => currentIndex + 1);
        setNextQuestionActive(false);
	}
    
	function prevQuestion() {
        setCurrentIndex((currentIndex) =>  currentIndex - 1);
        
        setNextQuestionActive(true);
        setIsLastQuestion(false);
        
        if (questions[currentIndex-1].answer === currentOption) {
            setScore((prev) => prev - 1);
        }


		if (currentIndex == 1) {
			setPrevQuestionActive(false);
			return;
		}
	}

    let nextOrSubmit = isLastQuestion ? "Submit" : "Next";

	return (
		<div className="mt-4 p-2 flex flex-col w-[65vw] items-start">
			<h2>
				Q{currentIndex + 1}. {questions[currentIndex].question}
			</h2>
			<div className="flex flex-col mt-4 w-full">
				{questions[currentIndex].options.map((option, index) => {
					return (
						<div
							key={index}
                            style={currentOption == option
                                ? {
                                border: "1px solid"
                            } : {}}
							className="button flex gap-4 w-full"
							onClick={() => {
								renderNavigation(option);
							}}
						>
							<span>
								{`${String.fromCharCode("A".charCodeAt(0) + index)})`}
							</span>
							<span>{option}</span>
						</div>
					);
				})}
			</div>
			<div className="w-full flex justify-between">
                {console.log(prevQuestionActive, nextQuestionActive, isLastQuestion)}
				{!prevQuestionActive ? (
					<span></span>
				) : (
                    <button
                        style={{
                            backgroundColor: "transparent",
                            color: "white",
                            border: "1px solid",
                            borderRadius: "1rem",
                        }}
                        className="button"
                        onClick={() => {
                            prevQuestion(currentOption)
                        }}
                    >
                        {"Prev"}
                    </button>
				)}
                {
                    !nextQuestionActive ? (
                        <span></span>
                    ) : (
                        <button
                            style={{
                                backgroundColor: "transparent",
                                color: "white",
                                border: "1px solid",
                                borderRadius: "1rem",
                            }}
                            className="button"
                            onClick={() => {
                                nextQuestion(currentOption)
                            }}
                        >
                            {`Save & ${nextOrSubmit}`}
                        </button>
                    )
                }
				
			</div>
		</div>
	);
};

export default Questions
