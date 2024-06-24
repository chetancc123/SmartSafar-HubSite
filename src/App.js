// App.js
import React, { useContext } from "react";
import { Routes, Route, Router } from "react-router-dom";
import HubProtectedRoute from "./HUbprotectedroute/Hubprotectedroute";

import { Flex } from "@chakra-ui/react";


const App = () => {
  return (
    <Flex>
      <HubProtectedRoute />
      
    </Flex>
  );
};

export default App;
