import React, { useState } from "react";
import LoginModal from "../components/Login/LoginModal";

const Login = () => {
  const [show, setShow] = useState(true);
  return (
    <section>
      <LoginModal />
    </section>
  );
};

export default Login;
