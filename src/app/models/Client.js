// Load required packages
var mongoose = require('mongoose');

// Define our Client schema
var ClientSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  id: { type: String, required: true },
  secret: { type: String, required: true },
  userId: { type: String, required: true },
  redirectUri: { type: String, required: true }
});
ClientSchema.virtual('clientId')
    .get(function(){
      return this._id;
 });
// Export the Mongoose model
module.exports = mongoose.model('Client', ClientSchema);