const mongoose = require('mongoose')

const Schema = mongoose.Schema

const DiscussionSchema = new Schema ({
    // _id: String,
    name: String,
    comment: String,


})

module.exports = mongoose.model('discussion', DiscussionSchema , 'discussions')