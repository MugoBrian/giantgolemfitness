function MemebershipSectionHeader({ heading }) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center w-fit">
        <p className="font-family-body font-bold text-lg md:text-2xl pb-2.5">
          {heading}
        </p>
        <div className="bg-primary-75 h-1 w-full rounded"></div>
      </div>
    </div>
  );
}

export default MemebershipSectionHeader;
