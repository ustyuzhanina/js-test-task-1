// write here
const pack1 = require('./data/pack1.js');
const pack2 = require('./data/pack2.js');
const pack3 = require('./data/pack3.js');

function getRelevantPlace(places) {
  places.sort((a, b) => {
      return a.peopleCount - b.peopleCount;
  });

  const equalQtyArray = [];
  places.forEach(item => {      
      if (item.peopleCount === places[0]['peopleCount']) {
        equalQtyArray.push(item);
      }
  })

  if (equalQtyArray.length > 1) {
      const index = Math.floor(Math.random() * equalQtyArray.length);
      return equalQtyArray[index]['id'];
  } else {
    return equalQtyArray[0]['id'];
  }
  
}

module.exports = {
    getRelevantPlace
}
