/**
 * @file Manages all operations related to users
 * @author logan
 * @description This function creates a new user
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @returns {object} - The response object
 */

import UserRepository from "../../repositories/userRepositories.js";
import {
  createEntity,
  getEntities,
  getEntity,
  getEmailResource,
  updateEntity,
  deleteEntity,
} from "./baseController.js";

const createUser = createEntity(UserRepository);
const getUsers = getEntities(UserRepository);
const getUser = getEntity(UserRepository);
const getEmail = async (req, res) => getEmailResource(req, res, "user");
const updateUser = updateEntity(UserRepository);
const deleteUser = deleteEntity(UserRepository);

export { createUser, getUsers, getUser, getEmail, updateUser, deleteUser };
  
