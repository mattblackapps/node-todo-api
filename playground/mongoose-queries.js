const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')
const {ObjectId} = require('mongodb')

// var id = '5882792a2929c6f54fe79f4f'


// // var id = '5882792a2929c6f54fe79f4' // invalid objectId
// // if (!ObjectId.isValid(id)) {
// //     console.log('ID not valid')
// // }

// // var id = '5882792a2929c6f54fe79f4a' // null
// // Todos []
// // Todo null
// // Todo by id null

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// })
// // Todos [ { _id: 5882792a2929c6f54fe79f4f,
// //     text: 'First test todo',
// //     completedAt: null,
// //     completed: false } ]

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo)
// })
// // Todo { _id: 5882792a2929c6f54fe79f4f,
// //   text: 'First test todo',
// //   completedAt: null,
// //   completed: false }

// Todo.findById(id).then((todo) => {
//     if(!todo) console.log("Todo not found")
//     console.log('Todo by id', todo)
// })
// // Todo by id { _id: 5882792a2929c6f54fe79f4f,
// //   text: 'First test todo',
// //   completedAt: null,
// //   completed: false }

var userId = '58827c412929c6f54fe7a05f'
User.findById(userId).then((user) => {
    if(!user) return console.log("User not found")
    console.log(JSON.stringify(user, undefined, 2))
}, (e) => {
    console.log(e)
})
