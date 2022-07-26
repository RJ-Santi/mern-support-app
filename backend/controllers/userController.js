// Register user function used in user routes
const registerUser = (req, res) => {
    res.send('Register Route')
}

// Login user function used in user routes
const loginUser = (req, res) => {
    res.send('Login Route')
}

module.exports = {
    registerUser,
    loginUser
}