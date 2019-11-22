import connectDb from '../../utils/connectDb'
import User from '../../models/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import isEmail from 'validator/lib/isEmail'
import isLength from 'validator/lib/isLength'

connectDb()

export default async (req, res) => {
  const { name, email, password } = req.body
  try {
    // 1) validate name / email / password
    if(!isLength(name, { min: 3, max: 10 })) {
      return res.status(422).send("Name must be 3-10 characters long")
    } else if (!isLength(password, { min: 6 })) {
      return res.status(422).send("Password must be at least 6 characters")
    } else if (!isEmail(email)) {
      return res.status(422).send("email must be valid")
    }

    // 2) check to see if the user already exist in DB
    const user = await User.findOne({ email })
    if(user) {
      return res.status(422).send(`user already exists with ${email}`)
    }

    // 3) --if not, hash their password
    const hash = await bcrypt.hash(password, 10)

    // 4) create user
    const newUser = await new User({
      name,
      email,
      password: hash
    }).save()
    console.log(newUser)

    // 5) create a token for the new user
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: '7d' })
    // 6) send back token
    
    res.status(201).json(token)
  } catch (error) {
    console.log(error)
    res.status(500).send("Error signup user. Please try again later")
  }
}