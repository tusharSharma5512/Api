const users = {
    user1: {
        id: 1,
        name: "test1",
        gender: "F",
        email: "test1@test.com"
    },
    user2: {
        id: 2,
        name: "test2",
        gender: "M",
        email: "test2@test.com"
    },     
    user3: {
        id: 3,
        name: "test3",
        gender: "F",
        email: "test3@test.com"
    },
    user4: {
        id: 4,
        name: "test4",
        gender: "M",
        email: "test4@test.com"
    },
    user5: {
        id: 5,
        name: "test5",
        gender: "F",
        email: "test5@test.com"
    },
};

exports.read = function(req, res) {
    res.send("All Users: " + JSON.stringify(users));  
};

exports.create = function(req, res) {
	const newUser = req.body;
    users["user" + newUser.id] = newUser;
    res.send("Post Successfully" + JSON.stringify(newUser));
};

exports.update = function(req, res) {
	const id = parseInt(req.params.id);
	const updateUser = req.body; 
	if(users["user" + id] != null){
		
		users["user" + id] = updateUser;

		res.send("Updated Successfully" + JSON.stringify(updateUser));
	}else{
		res.send("User Doesn't Exist" + JSON.stringify(updateUser));
	}
};

exports.delete = function(req, res) {
	const deleteUser = users["user" + req.params.id];
    delete users["user" + req.params.id];
    res.send( "Deleted user" + JSON.stringify(deleteUser));
};