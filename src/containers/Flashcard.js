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
      <h1 className="title">My Flashcard</h1>
      {vocabularies.map((word, index) => (
        <div className="card" key={index}>
          <Button className={"icon-button"}>
            <Icon icon="fa-star" className="fa-star" id={"star-${id}"} />
          </Button>
          <h2 className="word">
            {word.word}
            <span>{word.part_of_speech}</span>
          </h2>
          <h3 className="definition">{word.definition}</h3>
          <Button className={"example-button"} text={"Example"}></Button>
          <span className="example">{word["example"]}</span>
        </div>
      ))}
    </div>
  );
}

export default Flashcard;
