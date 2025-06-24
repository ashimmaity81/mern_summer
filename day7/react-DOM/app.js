const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

// const Card1 = (
//   <div>
//     <h1>Invitation</h1>
//     <p>Description</p>
//   </div>
// );
// const Card2 = (
//   <div>
//     <h1>Invitation</h1>
//     <p>Description</p>
//   </div>
// );
// const Card3 = (
//   <div>
//     <h1>Invitation</h1>
//     <p>Description</p>
//   </div>
// );

const Card1 = (obj) => {
  return (
    <div className="card">
      <h1>{obj.title}</h1>
      <p>{obj.description}</p>
    </div>
  );
};
const Card2 = (
  <div className="card">
    <h1>Invitation</h1>
    <p>Description</p>
  </div>
);
const container = (
  <div>
    {Card1({ title: "Hello", description: "STUDENT" })}
    <Card1 title="Notice" description="SCHEDULE"></Card1>
    {Card1({ title: "Warning", description: "DANGER" })}
    {Card2}
  </div>
);

reactRoot.render(container);
