const mongoose = require ("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/requestFrom')
.then(() => {
    console.log ('mongodb connected');
})
.catch((error) => {
    console.log("failed to connect", error);
})

const requestFrom = new mongoose.Schema({ 
    user_email: { type: String, trim: true },
    prayer_request: { type: String, trim: true },
});

const planToVisit = new mongoose.Schema({
    name : {type: String, trim: true},
    time : {type: String, trim: true},
    contact : {type: Number, trim: true},
    NotAlone : {type: String, trim: true},
    location : {type: String, trim: true},
})


const collection = new  mongoose.model('Collection2', requestFrom)
const collection1 = new  mongoose.model('Collection3', planToVisit)

module.exports = {collection, collection1}