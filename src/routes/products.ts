import { Router } from "express";
import { checkJWT } from "../middleware/session";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products";
import {
  validateCreate,
  validateDelete,
  validateGet,
  validateUpdate,
} from "../validators/products";

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Product:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          description: ID auto-generated
 *        name:
 *          type: string
 *        description:
 *          type: string
 *        price:
 *          type: number
 *        img:
 *          type: object
 *          properties:
 *            public_id:
 *              type: string
 *            url:
 *              type: string
 *        category:
 *          type: string
 *        status:
 *          type: boolean
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 *
 *    ProductInput:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          example: baby blue board
 *        description:
 *          type: string
 *          example: new and modern model with nice colors
 *        price:
 *          type: number
 *        img:
 *          type: array
 *          items:
 *            type: string
 *            format: binary
 *        category:
 *          type: string
 *          example: 'Longboard'
 *
 *  parameters:
 *    productId:
 *      in: path
 *      name: productId
 *      required: true
 *      description: ID of the user that need to be finded
 *      schema:
 *        type: string
 */

/**
 * @swagger
 * tags:
 *  name: Products
 *  description: Products endpoints
 */

/**
 * @swagger
 * /products:
 *  get:
 *    tags: [Products]
 *    description: Responds if the app is up and running
 *    summary: Get Product list
 *    responses:
 *      200:
 *        description: List of products
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Product'
 */
router.get("/", getProducts);

/**
 * @swagger
 * /products/{productId}:
 *  get:
 *    tags: [Products]
 *    summary: Get specific product by ID
 *    parameters:
 *      - $ref: '#/components/parameters/productId'
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      400:
 *        description: Erro getting product
 */
router.get("/:id", validateGet, getProduct);
// router.post("/", checkJWT, validateCreate, createProduct);
// router.put("/:id", checkJWT, validateUpdate, updateProduct);
// router.delete("/:id", checkJWT, validateDelete, deleteProduct);

/**
 * @swagger
 * /products:
 *  post:
 *    tags: [Products]
 *    summary: Register a Product
 *    requestBody:
 *      description: Create a new product in the store
 *      required: true
 *      content:
 *        multipart/form-data:
 *          schema:
 *            $ref: '#/components/schemas/ProductInput'
 *    responses:
 *     201:
 *      description: Successfully created
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Product'
 *     400:
 *      description: Error creating product
 *    security:
 *     - bearerAuth: []
 */
router.post("/", validateCreate, createProduct);

/**
 * @swagger:
 *  put:
 *    tags: [Products]
 *    summary: Update a singe product by productId
 *    parameters:
 *      - $ref: '#/components/parameters/productId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/ProductInput'
 *    responses:
 *      200:
 *        description: update product
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      400:
 *        description: Error updating product
 */
router.put("/:id", validateUpdate, updateProduct);

/**
 * @swagger
 *  /products/{productId}:
 *    delete:
 *      tags: [Products]
 *      summary: Delete a single product by productId
 *      paremeters:
 *        - $ref: '#/components/parameters/productId'
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                $ref:  '#/components/schemas/Product'
 *        400:
 *          description: Error getting Product
 */
router.delete("/:id", validateDelete, deleteProduct);

export default router;
