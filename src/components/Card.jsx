/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Card({item}) {
    const [showAnswer, setShowAnswer ] = useState(false);

    function handleClick(){
        setShowAnswer(prevState => !prevState);
    }
    return (
        <div className="flex flex-col text-sm shadow-sm select-none">
            <div className="py-4 flex justify-between gap-4">
                <div>
                    <h2 className="font-bold hover:text-GrayishPurple select-none cursor-pointer">
                        {item.question}
                    </h2>
                </div>
                <div>
                    <button
                    className="h-6 w-6 flex items-center justify-center"
                    onClick={handleClick}>
                        <img src={`images/icon-${showAnswer ? 'minus': 'plus'}.svg`}
                        className="h-full w-full" />
                    </button>
                </div>
            </div>
            {showAnswer ? <p className="text-GrayishPurple">{item.answer}</p> : ""}
        </div>
    )
}
