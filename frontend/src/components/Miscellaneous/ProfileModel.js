import { React, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Input,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";

const ProfileModel = ({ user, children }) => {
  const [about, setAbout] = useState("Hey there, You are using Cawgnito!");
  const [savedAbout, setSavedAbout] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAbout = (e) => {
    const ab = e.target.value;
    setAbout(ab);
  };
  const handleSave = () => {
    setSavedAbout(about);
  };
  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton
          display={{ base: "flex" }}
          mr={"15px"}
          icon={<FiInfo />}
          onClick={onOpen}
          size={"20px"}
          colorScheme="rgb(220,255,255)"
          color={"black"}
        />
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Box width="100%" p={5} borderRadius="md" color="black">
            <Box pb={5}>
              <Text fontSize="lg">Name</Text>
              <Input
                placeholder="Name"
                value={user.name}
                style={{ fontWeight: "700", fontFamily: "work sans" }}
              />
            </Box>
            <Box pb={5}>
              <Text fontSize="lg">About</Text>
              <Input placeholder="about" onChange={handleAbout} value={about} />
            </Box>
            <Text fontSize="lg">Email</Text>
            <Input placeholder="Email" value={user.email} />
          </Box>
          <ModalCloseButton />

          <ModalFooter>
            <Button colorScheme="yellow" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue" mr={3} onClick={(handleSave, onClose)}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ProfileModel;
