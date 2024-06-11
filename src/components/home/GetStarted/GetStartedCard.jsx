const GetStartedCard = ({ data }) => {
  return (
    <div className="p-4 bg-white rounded-md text-sm space-y-1 shadow-md hover:scale-105 duration-150 ease-in-out">
      <span className="bg-primary-50 px-2 rounded-md text-primary">
        Step {data.step}
      </span>
      <p className="text-primary py-2">{<data.icon size="30px" />}</p>
      <h1 className="text-lg font-semibold text-primary">{data.title}</h1>
      <p className="text-grey-600">{data.description}</p>
    </div>
  );
};

export default GetStartedCard;
