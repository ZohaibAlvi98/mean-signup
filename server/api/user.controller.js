const UserModel = require("./user.model")

module.exports.register = (req,res,next) => {
  var user = new UserModel();
  user.fullName = req.body.fullName
  user.email = req.body.email
  user.password = req.body.password
  user.save((err, NewUser) => {
      if(!err){res.send(NewUser)}
      else
      { 
          if(err.code == 11000)res.status(422).send(['Duplicate email address found'])
          else
             {
                 return next(err);
             }
      }
  })
}