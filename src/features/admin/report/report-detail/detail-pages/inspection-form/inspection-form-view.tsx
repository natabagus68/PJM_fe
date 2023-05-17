export const InspectionForm = () => {
  return (
    <>
      <div className="w-full rounded-xl border border-gray-300 pb-3">
        {/* header */}
        <div className="flex w-full">
          <div className="w-full py-2 text-center font-semibold border-b border-gray-300">
            Point Inspection
          </div>
          <div className="w-full py-2 text-center font-semibold border-b border-gray-300">
            Ketetapan
          </div>
          <div className="w-full py-2 text-center font-semibold border-b border-gray-300">
            Notes
          </div>
        </div>
        {/* body */}

        <div className="flex w-full">
          <div className="w-full py-2 text-center font-semibold">
            1.Substansi Mesin
          </div>
          <div className="w-full py-2 text-center font-semibold">Ketetapan</div>
          <div className="w-full py-2 text-center font-semibold">Notes</div>
        </div>

        <hr className="w-full border border-gray-300" />
      </div>
    </>
  );
};

