import { useEffect } from "react";

const Connect = () => {
  useEffect(() => {
    //
  }, []);

  return (
    <>
      <div className="inline-flex min-w-[400px] items-center rounded-2xl border border-gray-200 bg-slate-50 px-6 py-8">
        <div className="">
          <span className="font-semibold text-slate-500">Connecting...</span>
        </div>
      </div>
    </>
  );
};

export default Connect;
