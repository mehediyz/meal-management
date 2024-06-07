const StatsCard = ({ data }) => {
  const { title, value } = data;
  return (
    <div className="bg-white py-4 px-6 hover:shadow-md ease-in-out duration-300 hover:-translate-y-1 rounded-md">
      <div className="flex items-center gap-6">
        <span className="text-primary">{<data.icon />}</span>
        <div className="space-y-2">
          <h1 className="font-semibold text-grey-500">{title}</h1>
          <p className="text-xl font-semibold text-grey-600">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
