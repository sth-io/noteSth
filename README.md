![Alt text](https://raw.githubusercontent.com/sth-group/noteSth/master/note_sth_logo.png "NoteSth")

Open Source app with sticky notes.


#sys requirements
1. MongoDB
installation tutorial for Ubuntu

http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/

2. Node.js
Installation on Ubuntu
```
$ sudo apt-get update
$ sudo apt-get install nodejs
$ sudo apt-get install npm
$ sudo mkdir /data/
$ sudo mkdir /data/db
```

error fix:
```
npm command gives error "/usr/bin/env: node: No such file or directory"
$ ln -s /usr/bin/nodejs /usr/bin/node
```


#API
/api/note

    GET - get all notes
    POST - new note

/api/note/:id

    GET - get single note
    PUT - edit note by mongo _id
    DELETE - marks note as delted by mongo _id

/api/user

    GET - get logged user data
    POST - register an user

/api/auth

    POST - authenticate user


#OBJECTS

note

    {
        owner: String,
        title: String,
        type: String,
        content: String,
        dateAdded: Date,
        dateModified: Date,
        status: Number    
    }

user

    {
        email: String,
        password: String,
        dateAdded: Date,
        dateModified: Date,
        status: Number
    }