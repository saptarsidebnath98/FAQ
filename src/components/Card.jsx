import { useState } from "react";

export default function Card({item}) {
    const [showAnswer, setShowAnswer ] = useState(false);

    function handleClick(){
        setShowAnswer(prevState => !prevState);
    }
    return (
        <div className="text-sm py-4">
            <h2 className="flex justify-between gap-4 font-bold">
                {item.question}
                <button
                    className="h-6 w-6 flex items-center justify-center"
                    onClick={handleClick}>
                    <img src={`images/icon-${showAnswer ? 'minus': 'plus'}.svg`}
                    className="h-full w-full" />
                </button>
            </h2>
            {showAnswer ? <p>{item.answer}</p> : ""}
        </div>
    )
}
