import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import useRefreshToken from "@/hooks/useRefreshToken";
import Loader from "@/components/Loader";
import { useAppSelector } from "@/hooks/useStoreActions";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const auth = useAppSelector((state) => state.auth);

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    if (!auth?.accessToken) {
      verifyRefreshToken();
    } else {
      setIsLoading(false);
    }
  }, [auth.accessToken]);

  return <>{isLoading ? <Loader /> : <Outlet />}</>;
};

export default PersistLogin;
