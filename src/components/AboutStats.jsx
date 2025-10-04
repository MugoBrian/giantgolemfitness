function AboutStats({ statsNumber, statsInfo }) {
  return (
    <div className="flex flex-col gap-2 pt-2">
      <h5 className="font-family-body font-medium text-lg sm:text-2xl text-primary">
        {statsNumber}
      </h5>
      <p className="font-family-body text-sm md:text-lg whitespace-break-spaces">
        {statsInfo}
      </p>
    </div>
  );
}

export default AboutStats;
