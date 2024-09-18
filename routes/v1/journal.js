import express from 'express';
import {
  getJournal,
  getJournals,
  createJournal,
  updateJournal,
  deleteJournal,
} from "../../controllers/v1/journal.js";

import {
  validatePutJournal,
  validatePostJournal
} from "../../middleware/validation.js";

const router = express.Router();

router.post('/journals', validatePostJournal, createJournal);
/**
 * @swagger
 * /api/v1/journals:
 *   post:
 *     summary: Create a new Journal
 *     tags:
 *       - Journal
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Journal'
 *     responses:
 *       '201':
 *         description: Journal successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Journal successfully created"
 *                 data:
 *                   $ref: '#/components/schemas/Journal'
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "An unexpected error occurred"
 */

// Get all journals
router.get('/journals', getJournals);
/**
 * @swagger
 * /api/v1/journals:
 *   get:
 *     summary: Get all journals
 *     tags:
 *       - Journal
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Journal'
 *       '404':
 *         description: No journals found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No journals found"
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "An unexpected error occurred"
 */

// Get a journal by id
router.get('/journals/:id', getJournal);
/**
 * @swagger
 * /api/v1/journals/{id}:
 *   get:
 *     summary: Get a journal by id
 *     tags:
 *       - Journal
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The journal id
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Journal'
 *       '404':
 *         description: No journal found with the provided id
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No journal with the id: {id} found"
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "An unexpected error occurred"
 */

// Update a journal by id
router.put('/journals/:id', validatePutJournal, updateJournal);
/**
 * @swagger
 * /api/v1/journals/{id}:
 *   put:
 *     summary: Update a journal by id
 *     tags:
 *       - Journal
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The journal id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Journal'
 *     responses:
 *       '200':
 *         description: Journal successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Journal with the id: {id} successfully updated"
 *                 data:
 *                   $ref: '#/components/schemas/Journal'
 *       '404':
 *         description: No journal found with the provided id
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No journal with the id: {id} found"
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "An unexpected error occurred"
 */

// Delete a journal by id
router.delete('/journals/:id', deleteJournal);
/**
 * @swagger
 * /api/v1/journals/{id}:
 *   delete:
 *     summary: Delete a journal by id
 *     tags:
 *       - Journal
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The journal id
 *     responses:
 *       '200':
 *         description: Journal successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Journal with the id: {id} successfully deleted"
 *       '404':
 *         description: No journal found with the provided id
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No journal with the id: {id} found"
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "An unexpected error occurred"
 */

export default router;
