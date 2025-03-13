export default async function CareersSecTwo({careerDescriptions}) {
  
  return (
    <div className=" items-center text-center justify-center">
      <div className="my-24 text-[20px] max-w-[753px] mx-auto">
        {careerDescriptions.map((careerDescription, index) => (
            <div key={index}>
                <p className="text-[#1D1D1D] text-[20px]">
                {careerDescription.careerDescription}
                </p>
            </div>
        ))}
      </div>
    </div>
  );
}