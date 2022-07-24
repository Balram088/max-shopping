import { FormControl, FormLabel, Input, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,  useDisclosure } from "@chakra-ui/react";
import { Button, Modal } from "@chakra-ui/react";
import React from "react";



function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      
      <>
      
        <Button onClick={onOpen} class="login">SignUp/SignIn</Button>
         <Modal
          LoginRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent mt="200px">
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
           

              <FormControl>
                <FormLabel>Mobile Number</FormLabel>
                <Input ref={initialRef} placeholder='Enter Your Mobile Number'  type="Number" required/>
              </FormControl>
  
             
            </ModalBody>
  
            <ModalFooter>
              <Button  onClick={onClose}  colorScheme='blue' mr={3}>
              Send
              </Button>
              <Button onClick={onClose} >Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      
      </>
    )
  }
  export default Login;