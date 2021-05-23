import React, { useState, useEffect } from "react";
import { Alert, Fade } from "react-bootstrap";
import { useLocation } from "react-router";
import FlashMessageService from "../../util/FlashMessageService";


const FlashMessage = () => {
  const location = useLocation();

  const [message, setMessage] = useState(null);
  const [type, setType] = useState(null);

  useEffect(() => {
    const subscription = FlashMessageService.FlashMessage.subscribe(x => {
      setType(x.type);
      setMessage(x.message);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);


  React.useEffect(() => {
    setType(location?.state?.flash?.type || null);
    setMessage(location?.state?.flash?.message || null);
  }, [location]);


  return (
    <Alert style={{minHeight: 50}} className={`mt-4 text-center ${type == null ? 'invisible' : 'visible'}`} variant={type} show={true} onClose={() => setType(null)} dismissible transition={Fade}>
      {message}
    </Alert>
  );
};

export default FlashMessage;