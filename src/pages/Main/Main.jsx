import { Outlet } from "react-router-dom";
import Loading from "../shared/loading/Loading";
import { useEffect, useState } from "react";
const LoadingSpinner = () => {
  return (
    <div className="">
      <Loading />
    </div>
  );
};

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <>
          <Outlet />
        </>
      )}
    </div>
  );
};

export default Main;
