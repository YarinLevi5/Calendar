import Card from "react-bootstrap/Card";

let CardWrapper = (props) => {
  let { meeting } = props;
  let { title, description, date } = meeting;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Header>{new Date(date).getDate()}</Card.Header>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

CardWrapper.defaultProps = {
  title: "Title",
  description: "Description",
  date: "2022-01-18",
};

export default CardWrapper;
