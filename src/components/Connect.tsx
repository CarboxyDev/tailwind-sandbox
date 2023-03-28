import { useEffect, useState } from "react";
import { randint } from "../utils/misc";

type connectType = "connecting" | "success" | "failure";

const Connect = () => {
  const [connected, setConnected] = useState<connectType>("connecting");

  useEffect(() => {
    setTimeout(() => {
      const r = randint(1, 2);
      if (r == 1) {
        setConnected("failure");
      } else {
        setConnected("success");
      }
    }, 4000);
  }, [connected]);

  return (
    <>
      <div className="inline-flex min-w-[400px] items-center rounded-2xl border border-gray-200 bg-slate-50 px-6 py-8">
        <div>
          {connected == "connecting" && (
            <span className="font-semibold text-slate-600">Connecting...</span>
          )}
          {connected == "success" && (
            <span className="font-semibold text-green-500">Connected</span>
          )}
          {connected == "failure" && (
            <span className="font-semibold text-red-500">
              Unable to connect
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Connect;
