import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    
  } from "@nextui-org/react";
  import { useNavigate } from "react-router-dom";
  
  export default function ModalComponent(props: any) {

    const navigate = useNavigate();

    function backHome(){
      console.log("home")
      navigate("/");
    }

    return (
      <>
        
        <Modal isOpen={true}>
          <ModalContent>
            
              <>
                <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                <ModalBody>
                  <p>
                   {props.text}
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light">
                    Close
                  </Button>
                  <Button color="primary" onPress={()=>{props.modal(false);backHome()}} >
                    Action
                  </Button>
                </ModalFooter>
              </>
          
          </ModalContent>
        </Modal>
      </>
    );
  }
  