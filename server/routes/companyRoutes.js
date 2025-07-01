import express from 'express'
import { changeJobApplicationsStatus, changeVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controller/companyController.js'
import upload from '../config/multer.js'

const router = express.Router()

// Register a company
router.post('/register', upload.single('image'), registerCompany)

// Company login
router.post('/login', loginCompany)

// Get company data
router.get('/company', getCompanyData)

// Post a job
router.post('/post-job', postJob)

// Get applicatns data of company
router.get('/applicants', getCompanyJobApplicants)

// Get company job list
router.get('/list-jobs', getCompanyPostedJobs)

// Change application status
router.post('/change-status', changeJobApplicationsStatus)

// Change applications visibility
router.post('/change-visibility', changeVisibility)

export default router