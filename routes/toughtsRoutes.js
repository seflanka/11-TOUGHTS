const express = require('express')
const router = express.Router()
const ToughtController = require('../controllers/ToughtController')

// Helpers
const checkAuth = require('../helpers/auth').checkAuth


router.get('/add', checkAuth, ToughtController.createTaught)
router.post('/add', checkAuth, ToughtController.createTaughtSave)
router.get('/edit/:id', checkAuth, ToughtController.updateTought)
router.post('/edit', checkAuth, ToughtController.updateTaughtSave)
router.get('/dashboard', checkAuth, ToughtController.dashboard)
router.post('/remove', checkAuth, ToughtController.removeToughts)
router.get('/', ToughtController.showToughts)

module.exports = router