


let initalState=[
    {
        id:"1",
        username:"moataz_alaa",
        isLogin:false,
        password:"moataz12"
    }
]




export let users = (state = initalState, action) => {
	switch (action.type) {
		case 'LOG_IN_USER': {
			let { username, password } = action.payload;
			return state.map((user) => {
				//user
				if (username === user.username && password === user.password) {
					user.isLogin = true;
				} else {
					user.isLogin = false;
				}
                return user
			});
		}
        default:{
            return state
        }
    }
}
    