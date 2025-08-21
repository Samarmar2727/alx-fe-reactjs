
import { useState } from "react";

export default function useAuth() {
  // simulate login state
  const [isAuthenticated] = useState(false); 
  return { isAuthenticated };
}
