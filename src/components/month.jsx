let Month = (props) => {
  let { month, days } = props;
  let style = {
    width: "200px",
    margin: "30px",
    backgroundColor: "#f5f5f5",
    textAlign: "center",
  };
  return (
    <div style={style}>
      <h1>{month}</h1>
      <p>{days}</p>
    </div>
  );
};
export default Month;
