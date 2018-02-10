# react-full-stack
react full stack with expressJS


# MongoDB notes
SQL vs NO SQL
Databases like MySQL are planned structured and complex, rigid

No SQL:
Instead of structuring data you can dynamically save whatever data, manipulate
the data without having to plan a structure in advance


Driver- driving and controlling MongoDB

Why MongoDB?
stores information in JSON
No schemas necessary

## Installation of MongoDB on linux
1. https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
2. You need to create /data/db directory in system root
https://stackoverflow.com/questions/7948789/mongodb-mongod-complains-that-there-is-no-data-db-folder
3. From the reference above also change permission of directory or you will receive
'IllegalOperation' exception stating "attempted to create a lock file on a read-only"

Troubleshooting with MongoDB service:
1. sudo service mongod stop
2. mongod

To open up built-in driver enter 'mongo' in terminal

If service complains about .dbshell, create a file in root directory

### MongoDB:
## commands
db ## to show current Database

use {name} ## will create/switch to database

db.version() ## returns db version

db.users.insert({
  key1: value,
  key2: value
  })

db.users.find() ## to display all users

db.users.find().pretty() ## display nicely

db.users.find({
  "_id": ObjectId("5a7f7dd7c8065acbdb996b58")
  })

db.users.find().limit(2)

db.users.find().limit(2).skip(2) ## skip 2 documents

db.users.findOne() ## find one document

db.users.find({name: {$in: ["Ricky", "rick"]}}) ## to find Ricky || x

db.users.find({$or:[{name: 'Ricky'}, {age: {$gt:50}}]}) ## to find Ricky or age greater than 50

db.users.remove({_id: ObjectId("5a7f7dd7c8065acbdb996b58")})

show collections ## shows all collections

db.users.drop() ## drops the collection

db.dropDatabase() ## drops database

Terms:
Collection --> "SQL table" (global object to that database)
Document --> "SQL row" ( content inside a collection )

Database --> Collection --> Document

Using mongo-sample database
