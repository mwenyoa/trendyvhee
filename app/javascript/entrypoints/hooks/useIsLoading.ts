import {  useSelector } from "react-redux";

const useIsLoading = (resource: string) => {
  const { loading } = useSelector((state: any) => state[resource]);
  return { loading };
};

export default useIsLoading;
