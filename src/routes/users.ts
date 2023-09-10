import { Router } from "express";
import { checkJWT } from "../middleware/session";
import {
  validateCreate,
  validateDelete,
  validateGet,
  validateUpdate,
} from "../validators/users";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/users";

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          description: ID auto-generated
 *        firstName:
 *          type: string
 *          description: name of the user
 *        lastName:
 *          type: string
 *          description: last name of user
 *        email:
 *          type: string
 *        password:
 *          type: string
 *        role:
 *          type: string
 *        address:
 *          type: object
 *          properties:
 *            street:
 *              type: string
 *            city:
 *              type: string
 *            country:
 *                type: string
 *            state:
 *              type: string
 *            zip:
 *              type: string
 *        status:
 *          type: boolean
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 *
 *    UserInput:
 *      type: object
 *      properties:
 *        firstName:
 *          type: string
 *          example: john
 *        lastName:
 *          type: string
 *          example: doe
 *        email:
 *          type: string
 *          example: johndoe@gmail.com
 *        password:
 *          type: string
 *          example: examplepassword
 *        role:
 *          type: string
 *          example: ADMIN_ROLE
 *        address:
 *          type: object
 *          properties:
 *            street:
 *              type: string
 *              example: elm street
 *            city:
 *              type: string
 *              example: San Diego
 *            country:
 *                type: string
 *                example: USA
 *            state:
 *              type: string
 *              example: California
 *            zip:
 *              type: string
 *              example: 92911
 *
 *  UserNotFound:
 *    type: object
 *    properties:
 *      msg:
 *        type: string
 *        description: User not found
 *    example:
 *      msg: User was not found
 *  parameters:
 *    userId:
 *      in: path
 *      name: userId
 *      required: true
 *      description: ID of the user that need to be finded
 *      schema:
 *        type: string
 */

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: Users endpoints
 */

/**
 * @swagger
 * /users:
 *  get:
 *    tags: [Users]
 *    description: Responds if the app is up and running
 *    summary: Get User list
 *    responses:
 *      200:
 *        description: List of Users
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 */
router.get("/", getUsers);

/**
 * @swagger
 * /users/{userId}:
 *  get:
 *    tags: [Users]
 *    summary: Get specific user by ID
 *    parameters:
 *      - $ref: '#/components/parameters/userId'
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      400:
 *        description: Error getting user
 *      404:
 *        description: User not found
 */
router.get("/:id", validateGet, getUser);
// router.post("/", checkJWT, validateCreate, createUser);
// router.put("/:id", checkJWT, validateUpdate, updateUser);
// router.delete("/:id", checkJWT, validateDelete, deleteUser);

/**
 * @swagger
 * /users:
 *  post:
 *    tags: [Users]
 *    summary: Register a User
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/UserInput'
 *    responses:
 *      201:
 *        description: Successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      400:
 *        description: Error creating user
 *    security:
 *      - bearerAuth: []
 */
router.post("/", validateCreate, createUser);

/**
 * @swagger
 * /users/{userId}:
 *  put:
 *    tags: [Users]
 *    summary: Update a single user by userId
 *    parameters:
 *      - $ref: '#/components/parameters/userId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/UserInput'
 *    responses:
 *      200:
 *        description: updated user
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      400:
 *        description: Error updating user
 */
router.put("/:id", validateUpdate, updateUser);

/**
 * @swagger
 * /users/{userId}:
 *  delete:
 *    tags: [Users]
 *    summary: Delete a single user by userId
 *    parameters:
 *      - $ref: '#/components/parameters/userId'
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      400:
 *        description: Error deleting user
 */
router.delete("/:id", validateDelete, deleteUser);

export default router;
