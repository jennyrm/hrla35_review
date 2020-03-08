var mongoose = require('mongoose');
//dont need new
var studentSchema = mongoose.Schema ({
  name: {type: String},
  imgurl: {type: String}
});

module.exports = studentSchema;