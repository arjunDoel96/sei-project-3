import express from 'express'
import { loginUser, registerUser } from '../controllers/auth.js'
import { addComment, addProduct, deleteComment, getAllProducts } from '../controllers/products.js'
import { addItemToBasket, addPet, getUserProfile, removeItemFromBasket, removePet } from '../controllers/users.js'
import { secureRoute } from './secureRoute.js'


const router = express.Router()

router.route('/products')
  .get(getAllProducts)
  .post(secureRoute, addProduct)

router.route('/basket')
  .post(secureRoute, addItemToBasket)
  .delete(secureRoute, removeItemFromBasket)

router.route('/products/:id/comments')
  .post(secureRoute, addComment)

router.route('/products/:id/comments/:commentId')
  .delete(secureRoute, deleteComment)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

router.route('/profile')
  .get(secureRoute, getUserProfile)
  .post(secureRoute, addPet)
  .delete(secureRoute, removePet)



export default router