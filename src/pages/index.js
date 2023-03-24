import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Redirect = () => {
  const { push } = useRouter();

  useEffect(() => {
    push("/home");
  }, []);
  return <></>;
};

export default Redirect;
