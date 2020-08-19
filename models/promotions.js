const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//is to load this new currency type into Mongoose.
require('mongoose-currency').loadType(mongoose);

const Currency = mongoose.Types.Currency;
const promoSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    label:{
        type: String,
        default : ''
    },
    price:{
        type: Currency,
        required : true,
        min: 0
    },
    description: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
        
    },
   
    
    
}, {
    timestamps: true


});
var Promotions = mongoose.model('Promotions', promoSchema);
module.exports = Promotions;