var mongoose = require('mongoose')
var encrypt = require('mongoose-encryption')
var Schema = mongoose.Schema

var secret = process.env.SK || 'someUnguessableString'

var LeafSchema = new Schema({
  dsn: { host: String, port: Number, user: String, pwd: String, dbname: String, dbtype: String },
  query: { type: String },
  name: {
    type: String,
    default: '',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  creator: {
    type: Schema.ObjectId,
    ref: 'User'
  }
})

LeafSchema.plugin(encrypt, { requireAuthenticationCode: false, secret: secret, encryptedFields: ['dsn.pwd'] })

mongoose.model('Leaf', LeafSchema)
