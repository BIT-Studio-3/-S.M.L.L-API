import createRouter from "./base.js";

import {
  getUser,
  getUsers,
  getEmail,
  createUser,
  updateUser,
  deleteUser,
} from "../../controllers/v1/userController.js";

import {
  validatePostUser,
  validatePutUser,
} from "../../middleware/validation.js";

const userController = {
  get: getUsers,
  getById: getUser,
  getByEmail: getEmail,
  create: createUser,
  update: updateUser,
  delete: deleteUser,
};

const userRouter = createRouter(
  userController,
  validatePostUser,
  validatePutUser,
);

export default userRouter;

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: "John"
 *         email:
 *           type: string
 *           example: "john.doe@example.com"
 *         password:
 *           type: string
 *           example: "password123"
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   security:
 *     - BearerAuth: []
 */
