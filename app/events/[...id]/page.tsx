interface Props {
  params: {
    id: string;
  };
}

const Events = ({ params }: Props) => {
  return (
    <div>
      {" "}
      <h1>Events with id: {JSON.stringify(params)} </h1>
    </div>
  );
};

export default Events;
