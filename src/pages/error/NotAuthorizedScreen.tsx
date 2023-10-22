import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotAuthorized = () => {
  const history = useNavigate();

  const goBack = () => {
    history(-1);
  }

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div className="my-4 font-bold text-3xl">Not Authorized</div>
      <Button onClick={goBack}>Go Back</Button>
    </div>
  );
};

export default NotAuthorized;
