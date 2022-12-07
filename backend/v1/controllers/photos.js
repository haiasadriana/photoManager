const { Photo } = require('../../models/photoSchema.js')
const multer = require('multer');

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({
    storage: storage
}).single('photo')


const getPhoto = async function (req, res) {
    try {
        const photo = await Photo.find();
        res.status(200).json(photo);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const createPhoto = async function (req, res) {
    upload(req, res, (err) => {
        if (err) {
            console.log(err);
        } else {
            const newPhoto = new Photo({
                name: req.body.name,
                image: {
                    data: req.file.filename,
                    contentType: 'image/png',
                }
            })
            newPhoto.save()
                .then(() => res.send('Successfully uploaded'))
                .catch(err => console.log(err));
        }
    })
}

module.exports = {
    getPhoto,
    createPhoto
}