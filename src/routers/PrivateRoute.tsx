import { Navigate } from "react-router-dom";
import ChatPage from "../pages/ChatPage";

type Props = {
  isAuthenticated: boolean,
}

export default function PrivateRoute({ isAuthenticated }: Props) {
  return isAuthenticated ? <ChatPage /> : <Navigate to="/auth/login" />;
}