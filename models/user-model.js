const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  username:{type:String},
  googleid:{type:String}
});

module.exports=mongoose.model("user",userSchema);