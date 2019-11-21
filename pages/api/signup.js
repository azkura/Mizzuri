import connectDb from '../../utils/connectDb'
import User from '../../models/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

connectDb()

export default async (req, res) => {
  const { name, email, password } = req.body
  try {
    // 1) check to see if the user already exist in DB
    const user = await User.findOne({ email })
    if(user) {
      return res.status(422).send(`user already exists with ${email}`)
    }
    // 2) --if not, hash their password
    const hash = await bcrypt.hash(password, 10)
    // 3) create user
    const newUser = await new User({
      name,
      email,
      password: hash
    }).save()
    console.log(newUser)
    // 4) create a token for the new user
    jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: '7d' })
    // 5) send back token
    res.status(201).json(token)
  } catch (error) {
    console.log(error)
    res.status(500).send("Error signup user. Please try again later")
  }
}