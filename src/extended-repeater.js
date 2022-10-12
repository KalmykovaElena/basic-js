const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let separator = '+'
  let result
  if(String(str)=='null') str='null'
  str = typeof str==='string'||typeof str==='object'?str:String(str)
  if (options.hasOwnProperty('repeatTimes')) {
      if (options.hasOwnProperty('separator')) {
          separator = options.separator.toString()
      }
  }
  if (options.hasOwnProperty('addition')) {
      let additionRepeatTimes=options.hasOwnProperty('additionRepeatTimes')?options.additionRepeatTimes-1:0;
      let additionSeparator =options.hasOwnProperty('additionSeparator')?options.additionSeparator:'|'

      str = str+options.addition +(additionSeparator+options.addition).repeat(additionRepeatTimes)

  }
  result = str+ (separator + str).repeat(options.repeatTimes - 1)
  return result
}
module.exports = {
  repeater
};
