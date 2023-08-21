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
 *        name:
 *          type: string
 *          description: name of the user
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
router.get("/:id", validateGet, getUser);
// router.post("/", checkJWT, validateCreate, createUser);
// router.put("/:id", checkJWT, validateUpdate, updateUser);
// router.delete("/:id", checkJWT, validateDelete, deleteUser);
router.post("/", validateCreate, createUser);
router.put("/:id", validateUpdate, updateUser);
router.delete("/:id", validateDelete, deleteUser);

export default router;
