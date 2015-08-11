var mongojs = require('mongojs');

var db = mongojs('test');
//can do var db = mongojs('xxdb', ['xxxcollection']);

var simpsons = db.collection('simpsons');

module.exports = {
  create: function(req, res) {
    simpsons.insert(req.body, function(err, user){
      if (err) res.send(err);
      res.json(user);
    });
  },
  read: function(req, res) {
    simpsons.find(function(err, simps){
      res.json(simps);
    });
  }

  // update: function (req, res) {
  //   simpsons.update(
  //     {name: "Bart"}, //first argument is what you are looking for
  //     {coolness: 98},
  //     function (err, update) {
  //       console.log(update);
  //     }
  //
  //   );
  // }

};
