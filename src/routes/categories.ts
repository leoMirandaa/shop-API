import { Router } from "express";
import { checkJWT } from "../middleware/session";
import {
  getCategories,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categories";
import {
  validateCreate,
  validateDelete,
  validateGet,
  validateUpdate,
} from "../validators/categories";

const router = Router();

// example...
/**
 * @swagger
 * components:
 *  schemas:
 *    CreateCategoryInput:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: name of the category
 *          default: newCategory2.0
 *      required:
 *        - name
 *    CreateCategoryResponse:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        _id:
 *          type: string
 *        status:
 *          type: boolean
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 *    GetCategoryResponse:
 *      type: string
 *      properties:
 *        name:
 *          type: string
 *      parameters:
 *        - name: categoryId
 *          in: path
 *          description: The id of the category
 *          required: true
 */

//....

/**
 * @swagger
 * components:
 *  schemas:
 *    Category:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: auto-generate ID
 *        name:
 *          type: string
 *          description: name of the category
 *        status:
 *          type: boolean
 *          description: status of category
 *        cratedAt:
 *          type: string
 *          description: show when category was created
 *        updatedAt:
 *          type: string
 *          description: show when category was updated
 *      required:
 *        - name
 *      example:
 *        id: 64c2d97e105160d0391b04e8
 *        name: longBoard
 *        status: true
 *        createdAt: 2023-07-27T20:54:27.585Z
 *        updatedAt: 2023-08-16T00:38:38.528Z
 *    CategoryNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: Not found category
 *      example:
 *        msg: Category was not found
 *  parameters:
 *    categoryId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: category id
 */

/**
 * @swagger
 * tags:
 *  name: Categories
 *  description: Categories endpoints
 */

/**
 * @swagger
 * /categories:
 *  get:
 *     tags: [Categories]
 *     description: Responds if the app is up and running
 *     summary: Get category list
 *     responses:
 *       200:
 *         description: List of categories
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Category'
 *
 */
router.get("/", getCategories);

/**
 * @swagger
 * /categories/{id}:
 *  get:
 *     tags: [Categories]
 *     summary: Get a single product by the productId
 *     parameters:
 *      - $ref: '#/components/parameters/categoryId'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *           schema:
 *            $ref: '#/components/schemas/Category'
 *       400:
 *         description: Error getting category
 *       404:
 *         description: Task was not found
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CategoryNotFound'
 */
router.get("/:id", validateGet, getCategory);
// router.post("/", checkJWT, validateCreate, createCategory);
// router.put("/:id", checkJWT, validateUpdate, updateCategory);
// router.delete("/:id", checkJWT, validateDelete, deleteCategory);

/**
 * @swagger
 * /categories:
 *  post:
 *    tags: [Categories]
 *    summary: Register a Category
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CreateCategoryInput'
 *    responses:
 *      201:
 *        description: Successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Category'
 *      400:
 *        description: Bad request
 *      500:
 *        description: Some server error
 *    security:
 *      - bearerAuth: []
 *
 */
router.post("/", validateCreate, createCategory);

/**
 * @swagger
 *  /categories/{id}:
 *    put:
 *      tags: [Categories]
 *      summary: Update a single category by categoryId
 *      parameters:
 *        - $ref: '#/components/parameters/categoryId'
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateCategoryInput'
 *      responses:
 *        200:
 *          description: updated task
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Category'
 *        400:
 *          description: Error updating category
 *          content:
 *            application/json:
 *              schema: '#/components/schemas/CategoryNotFound'
 *
 */
router.put("/:id", validateUpdate, updateCategory);

/**
 * @swagger
 * /categories/{id}:
 *  delete:
 *    tags: [Categories]
 *    summary: Delete a single category by categoryId
 *    parameters:
 *      - $ref: '#/components/parameters/categoryId'
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Category'
 *      400:
 *        description: Error deleting category
 *        content:
 *          appliation/json:
 *            schema:
 *              $ref: '#/components/schemas/CategoryNotFound'
 */
router.delete("/:id", validateDelete, deleteCategory);

export default router;
