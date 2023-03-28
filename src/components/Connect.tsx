import { useEffect, useState } from "react";
import { randint } from "../utils/misc";
import { Rings } from "svg-loaders-react";
import clsx from "clsx";
import { CheckIcon } from "../utils/icons";

type connectType = "connecting" | "success" | "failure";

const Connect = () => {
  const [connected, setConnected] = useState<connectType>("connecting");

  useEffect(() => {
    // simulate an api call for some hypothetical connection
    setTimeout(() => {
      const r = randint(1, 2);
      if (r == 1) {
        setConnected("failure");
      } else {
        setConnected("success");
      }
    }, 2000);
  }, [connected]);

  return (
    <>
      <div className="h-18 w-80 sm:w-100">
        <div className="flex h-full w-full flex-row items-center rounded-2xl border border-gray-200 bg-slate-50 px-6 py-6">
          <div>
            {connected == "connecting" && (
              <span className="font-semibold text-slate-600">
                Connecting...
              </span>
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
          <div className="ml-auto">
            {connected != "success" && (
              <Rings
                className={clsx(
                  "stroke-slate-500",
                  connected == "connecting" && "visible",
                  connected == "failure" && "invisible"
                )}
              />
            )}
            {connected == "success" && (
              <CheckIcon className="h-6 w-6 text-green-500"></CheckIcon>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Connect;
