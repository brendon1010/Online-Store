import { useState } from "react"
import { Button, Modal } from "react-bootstrap"

export default function Info(){

    const [show, setShow] = useState(false)

    const handleHide = () => setShow(false)

    return(
        <div>
        <img onClick={() => setShow(true)} className="myImg" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Information_icon.svg/1024px-Information_icon.svg.png" alt="help"/>
        <Modal show={show} onHide={handleHide} centered>
            <Modal.Header>
                <Modal.Title>Shipping Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <span style={{fontWeight: 'bold'}}>Standard Shipping:</span><br/>
                cost: R20<br/>
                duration: 5 - 7 days<hr/>
                <span style={{fontWeight: 'bold'}}>Express Shipping:</span><br/>
                cost: R50<br/>
                duration: 3 - 5 days<hr/>
                <span style={{fontWeight: 'bold'}}>Two-Day Shipping:</span><br/>
                cost: R70<br/>
                duration: 2 days<hr/>
                <span style={{fontWeight: 'bold'}}>Overnight Shipping:</span><br/>
                cost: R100<br/>
                duration: overnight
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleHide}>OKAY</Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
}