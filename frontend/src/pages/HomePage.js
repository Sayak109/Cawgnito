import { React, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import {
  Box,
  Container,
  Text,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (!user) {
      history.push("/");
    }
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w={"60%"}
        m={"40px 0 15px 0"}
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text
          fontSize={"2xl"}
          fontFamily={"Work sans"}
          fontWeight={"bold"}
          color={"black"}
        >
          Cawgnito
        </Text>
      </Box>
      <Box p={3} bg={"white"} w={"100%"} borderRadius="lg" borderWidth="1px">
        <Tabs variant="soft-rounded" colorScheme="yellow">
          <TabList mb={"1em"}>
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
