const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats( domains ) {
  let obj
  return domains.map(e=>{
     return e.split('.')
  }).reduce((acc,el)=>{
      for(let i=el.length-1;i>=0;i--){
          `.${el.slice(i).reverse().join('.')}` in acc?acc[`.${el.slice(i).reverse().join('.')}`]++ :acc[`.${el.slice(i).reverse().join('.')}`]=1
      }
      return acc
  },{})
}

module.exports = {
  getDNSStats
};
