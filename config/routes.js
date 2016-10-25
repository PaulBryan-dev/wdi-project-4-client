const express    = require("express");
const router     = express.Router();

// Remote multer storage
const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET,
    acl: 'public-read',
    contentType: function(req, file, next) {
      next(null, file.mimetype);
    },
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + file.originalname);
    }
  })
});

const authentications = require("../controllers/authentications");
const threads = require("../controllers/threads");
const users  = require("../controllers/users");

router.route("/register")
  .post(authentications.register);
router.route("/login")
  .post(authentications.login);

router.route('/users')
  .get(users.index);
router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);

module.exports = router;
