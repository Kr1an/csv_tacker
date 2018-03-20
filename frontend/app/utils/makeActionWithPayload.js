const makeActionWithPayload = (type) => (payload) => ({ type, payload });

export default makeActionWithPayload;
