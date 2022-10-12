const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason( date ) {
  if (!date) {
      return 'Unable to determine the time of year!'
  }
  if ((date instanceof Date === false || Object.getOwnPropertyNames(date).length > 0) && arguments.length > 0) {
      throw new Error('Invalid date!');
  }
 
 else  {
      let result
      let seasons = ['winter', 'spring', 'summer', 'autumn']
      let month = date.getMonth()
      if (!isNaN(month)) {
          if (month <= 1 || month == 11) {
              result = seasons[0]
          } else if (month <= 4) {
              result = seasons[1]
          } else if (month <= 7) {
              result = seasons[2]
          } else if (month <= 10) {
              result = seasons[3]
          }

          return result
      } 
  }

}
module.exports = {
  getSeason
};
