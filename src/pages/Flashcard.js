import "../styles.css";
import Button from "../components/Button.js";
import Icon from "../components/Icon.js";
import Card from "../components/Card"

const vocabularies = [
  {
    word: "knotty",
    part_of_speech: "Adjective",
    definition:
      "(of a problem or difficulty) complicated and difficult to solve.",
    example: "It was a very knotty problem.",
  },
  {
    word: "cantrip",
    part_of_speech: "Noun",
    definition: "a magic spell; trick by sorcery.",
    example:
      "And that old witch, Eliza—I little guessed she’d play this cantrip on me: But what a jest—Jerusalem, what a jest!",
  },
  {
    word: "traverse",
    part_of_speech: "Verb",
    definition: "to pass or move over, along, or through.",
    example: "Stanley traversed the continent from west to east.",
  },
  {
    word: "peculiar",
    part_of_speech: "Adjective",
    definition: "different to what is normal or expected; strange.",
    example: "He gave her some very peculiar looks.",
  },
];

function Flashcard() {
  return (
    <div>
      {vocabularies.map((word, index) => (
        <div className="card" key={index}>
          
          <h2 className="word">
            {word.word}
            <span style={{fontSize: '10px'}}>{word.part_of_speech}</span>
          </h2>
          <h4 className="definition">{word.definition}</h4>
          <Button className={"example-button"} text={"Example"}></Button>
          <span style={{fontSize: '15px', display:'flex' }}>{word["example"]}</span>
        </div>
      ))}
    </div>
  );
}

export default Flashcard;