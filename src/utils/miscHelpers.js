export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const status = Object.freeze({
  idle: 'idle', //initial state on component mount
  reset: 'reset', //state when state is manually reseted
  pending: 'pending', //state when async action is dispatched
  loading: 'loading', //state for handling eager timeouts, should change from pending if its taking more than usual
  success: 'success', //state when async call gets resolved correctly
  error: 'error', //state when async call gets rejected
  warning: 'warning', //state for partial resolution of async call (not used for now...)
});
