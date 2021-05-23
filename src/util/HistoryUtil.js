const PushWithSuccess = (history, location, message) => {
  history.push(location, { flash: { message: message, type: "success" } });
};

export {
  PushWithSuccess
};