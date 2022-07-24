import { FormControl, FormLabel, Input, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,  useDisclosure } from "@chakra-ui/react";
import { Button, Modal } from "@chakra-ui/react";
import React from "react";
import MailOutlineOutlined from "@mui/icons-material/MailOutlineOutlined";



function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button onClick={onOpen}> <MailOutlineOutlined/> Sent Mail</Button>
        
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input ref={initialRef} placeholder='Enter Your Full Name' type="text" required/>
              </FormControl>

              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input ref={initialRef} placeholder='Enter Your Email'  type="email" required/>
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>City</FormLabel>
                <Input placeholder='Enter Your City'  type="text" required/>
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button   colorScheme='blue' mr={3}>
              Send
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default InitialFocus;