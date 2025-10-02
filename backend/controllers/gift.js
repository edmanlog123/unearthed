import giftData from '../data/gift.js'

const getGifts = async (req, res) => {
    try {
        res.status(200).json(giftData)
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
} 

const getGiftById = async (req, res) => {
    try {
        const selectQuery = `
        SELECT name, pricePoint, audience, image, descrition, sub,ittedBy, submittedON
        FROM gifts
        WHERE id = $1`
        const giftId = req.params.giftId
        const results = await pool.query(selectQuery, [giftId])
        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

export default { getGifts, getGiftById }