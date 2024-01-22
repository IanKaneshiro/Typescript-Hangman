export function HangmanWord() {
  const word = "test";
  const guessesLetters = ["t"];
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontWeight: "bold",
        fontSize: "6rem",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {word.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }}>
          <span
            style={{
              visibility: guessesLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
