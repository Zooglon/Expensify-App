const moment = require.requireActual('moment');

// if timestamp exists we will use, if not default is set to 0
export default (timestamp = 0) => {
  return moment(timestamp);
};
