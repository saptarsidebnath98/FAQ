import Card from "./Card";
import data from "../Qna.json";

export default function Main() {
    return (
        <main>
            {data.map((item, index) => {
                return (
                    <Card item={item} key={index}/>
                )
            })}
        </main>
    )
}
