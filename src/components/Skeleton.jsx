const Skeleton = ({ type, mirrored = false }) => {
  if (type === 'card') {
    return (
      <div className={`animate-pulse border border-[#e7e7e7] bg-white ${mirrored ? 'md:translate-y-1' : ''}`}>
        <div className="aspect-[16/10] w-full bg-[#e4e4e4]" />
        <div className="space-y-4 p-6">
          <div className={`h-8 bg-[#e4e4e4] ${mirrored ? 'ml-auto w-4/5' : 'w-full'}`} />
          <div className={`h-8 bg-[#e4e4e4] ${mirrored ? 'ml-auto w-3/4' : 'w-5/6'}`} />
          <div className={`h-8 bg-[#e4e4e4] ${mirrored ? 'ml-auto w-2/3' : 'w-2/3'}`} />
        </div>
        <div className="mx-6 mb-6 border-t border-[#ededed] pt-5">
          <div className={`h-6 bg-[#e4e4e4] ${mirrored ? 'ml-auto w-2/3' : 'w-3/4'}`} />
        </div>
      </div>
    );
  }

  return (
    <div className="animate-pulse space-y-8">
      <div className="h-[360px] w-full bg-[#e4e4e4]" />
      <div className="mx-auto max-w-[920px] space-y-5 px-6">
        <div className={`h-12 bg-[#e4e4e4] ${mirrored ? 'ml-auto w-3/4' : 'w-4/5'}`} />
        <div className={`h-5 bg-[#e4e4e4] ${mirrored ? 'ml-auto w-11/12' : 'w-full'}`} />
        <div className={`h-5 bg-[#e4e4e4] ${mirrored ? 'w-full' : 'ml-auto w-11/12'}`} />
        <div className={`h-5 bg-[#e4e4e4] ${mirrored ? 'ml-auto w-2/3' : 'w-2/3'}`} />
      </div>
      <div className="mx-auto max-w-[1220px] space-y-4 px-6">
        <div className="h-9 w-1/4 bg-[#e4e4e4]" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="space-y-3">
              <div className="aspect-[16/10] bg-[#e4e4e4]" />
              <div className={`h-5 bg-[#e4e4e4] ${(mirrored || index % 2) ? 'ml-auto w-4/5' : 'w-full'}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skeleton;