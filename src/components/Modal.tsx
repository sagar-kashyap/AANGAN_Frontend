import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    
  } from "@heroui/react";
  import { useNavigate } from "react-router-dom";
  import {Snippet} from "@heroui/react";
  
  export default function ModalComponent(props: any) {

    const navigate = useNavigate();
    // console.log(props.text)
    function backHome(){
      console.log("home")
      navigate("/");
    }

    return (
      <>
        
        <Modal isOpen={true}>
          <ModalContent>
            
              <>
                <ModalHeader className="flex flex-col gap-1">🎉 Purchase Confirmed!</ModalHeader>
                <ModalBody>
                  <p>
                  Thank you for purchase! Your order has been successfully placed, and the details will be sent to your provided email shortly.</p>
                   {/* <h2 style={{ color: "blue" }}>{props.orderid}.</h2> */}
                   <Snippet symbol="" color="primary">{props.orderid}</Snippet>
                   <p> Please keep your product code for future reference. 😊
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onPress={()=>{props.modal(null);backHome()}} >
                    Home
                  </Button>
                </ModalFooter>
              </>
          
          </ModalContent>
        </Modal>
      </>
    );
  }
  