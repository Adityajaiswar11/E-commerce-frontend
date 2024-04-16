import { useContext } from "react";
import { Context } from "../utils/Constant";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const { userLog } = useContext(Context);
  if (userLog) {
    return <Navigate to={"/product"} />;
  }

  return children;
};

export default ProtectedRoute;
