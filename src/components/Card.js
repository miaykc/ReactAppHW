export default function Card({
  id,
  handleStarClick,
  word,
  part_of_speech,
  definition,
  handleExampleClick,
}) {
  return (
    <>
      <div className="vocabulary">
        {/* star button here */}
        <h2 className="word">{word}</h2>
        <h4>{part_of_speech}</h4>
      </div>
      <h3 className="definition">{definition}</h3>
      {/* example button here */}
    </>
  );
}
