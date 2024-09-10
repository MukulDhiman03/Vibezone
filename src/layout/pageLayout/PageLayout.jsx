import { Box, Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import Navbar from "../../components/Navbar/Navbar";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [user, loading] = useAuthState(auth);

  const canRenderSideBar = pathname !== "/auth" && user;
  const canRenderNavBar = !user && !loading && !pathname !== "/auth";

  // const checkUserIsAuth = !user && loading;
  // if (checkUserIsAuth) return <PageLayoutSpinner />;

  return (
    <Flex flexDirection={canRenderNavBar ? "column" : "row"}>
      {/* Sidebar on left */}
      {canRenderSideBar ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <SideBar />
        </Box>
      ) : null}
      {/* navbar */}
      {/* {canRenderNavBar ? <Navbar /> : null} */}
      {/* Page content on right */}

      <Box
        flex={1}
        w={{ base: "calc(100%-70px)", md: "calc(100%-240px)" }}
        mx={"auto"}
      >
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;

const PageLayoutSpinner = () => {
  return (
    <Flex
      flexDir="column"
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner size="xl" />
    </Flex>
  );
};
