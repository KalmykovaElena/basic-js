const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chine : [],
  getLength() {
      return this.chine.length
  },
  addLink( value ) {
     value!==''?this.chine.push(String(value)):this.chine.push('')
      return this
  },
  removeLink( position) {
     if(this.chine[position] && position>0) {
         this.chine.splice(position-1,1)
         return this
     }else{
      this.chine=[]
         throw new Error(`You can't remove incorrect link!`)
     }

  },
  reverseChain() {
     this.chine.reverse()
      return this
  },
  finishChain() {
      let result = this.chine
      this.chine=[]
     return result.map((e,i)=>i==result.length -1?`( ${e} )`:`( ${e} )~~`).join('')
  }
};


module.exports = {
  chainMaker
};
