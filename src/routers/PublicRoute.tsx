import { Navigate } from "react-router-dom";
import AuthRouter from "./AuthRouter";

type Props = {
  isAuthenticated: boolean,
}

export default function PublicRoute({ isAuthenticated }: Props) {
  return !isAuthenticated ? <AuthRouter /> : <Navigate to="/" />;
}