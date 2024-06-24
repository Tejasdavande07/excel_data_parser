const SUCCESS = 'success.';
const ERROR = 'error.';
const MONGO_SERVER_ERROR = 'Internal Server Error!';
const PROGRAMMING_ERROR = 'Internal Server Error!';
const SESSION_EXPIRE = 'Session expire!';
const OOPS_OVERWORKED =
  'Oops! Looks like the servers are overworked. Please try again later.';

let error = {
  OverWorked: OOPS_OVERWORKED,
  TokenExpiredError: 'Oops! TokenExpired',
  JsonWebTokenError: 'Oops! JsonWebTokenError',
  SessionTimeout: 'Oops! Session timed out.',
  init() {
    let self = JSON.parse(JSON.stringify(this));
    error = Object.fromEntries(
      Object.entries(self).map(([key, value]) => [key, new Error(value)])
    );
  },
};

error.init();

module.exports = {
  SUCCESS,
  ERROR,
  MONGO_SERVER_ERROR,
  PROGRAMMING_ERROR,
  SESSION_EXPIRE,
  OOPS_OVERWORKED,
  error,
};
