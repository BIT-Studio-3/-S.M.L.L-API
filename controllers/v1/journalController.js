/**
 * @file Manages all operations related to users
 * @author mike
 * @description This function creates a new journal
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @returns {object} - The response object
 */


import {
    createResource,
    getResources,
    getResource,
    updateResource,
    deleteResource,
  } from "./baseController.js";

  const createJournal = async (req, res) =>
    createResource(req, res, "user");
  
  const getJournals = async (req, res) => getResources(req, res, "journal");
  
  const getJournal = async (req, res) => getResource(req, res, "journal");
  
  const updateJournal = async (req, res) =>
    updateResource(req, res, "journal");
  
  const deleteJournal = async (req, res) =>
    deleteResource(req, res, "journal");
  
  export {
    createJournal,
    getJournals,
    getJournal,
    updateJournal,
    deleteJournal,
  };