import { BehaviorSubject } from 'rxjs';

const currentFlashMessageSubject = new BehaviorSubject(false);

const setMessage = (type, message) => {
  currentFlashMessageSubject.next({type, message});
};

const setSuccess = (message) => {
  setMessage("success", message);
}

const setError = (message) => {
  setMessage("danger", message);
}

const reset = () => {
  setMessage(null, null)
}

const FlashMessageService = {
  setSuccess,
  setError,
  reset,
  FlashMessage: currentFlashMessageSubject.asObservable(), 
};

export default FlashMessageService;
