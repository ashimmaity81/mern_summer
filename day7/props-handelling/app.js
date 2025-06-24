const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

const arr = [
  { name: "Pranjot", score: 29 },
  { name: "Rakesh", score: 21 },
  { name: "Mohan", score: 16 },
  { name: "Anurag", score: 39 },
  { name: "priyansh", score: 24 },
];

const styleObj = {
  color: "purple",
  fontSize: "1.5rem",
  fontWeight: "600",
};

const Card = (props) => {
  const { name, score } = props;
  return (
    <div className="card">
      <h3 style={styleObj}>{name}</h3>
      <p style={styleObj}>{score}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="parent">
      {/* <h1>Hello</h1> */}
      {/* <Card name={arr[0].name} score={arr[0].score}></Card>
      <Card name={arr[1].name} score={arr[1].score}></Card>
      <Card name={arr[2].name} score={arr[2].score}></Card>
      <Card name={arr[3].name} score={arr[3].score}></Card> */}
      {arr.map((elem) => {
        return <Card name={elem.name} score={elem.score} />;
      })}
    </div>
  );
};
// reactRoot.render(App());
reactRoot.render(<App />);
