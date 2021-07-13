const express = require('express')
const cors = require('cors')
const multer  = require('multer')
const { response } = require('express')

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
  response.sendFile(process.cwd() + '/views/index.html');
})

app.post('/api/fileanalyse', upload.single('upfile'), (request, response, next) => {
  const fileDetails = request.file
  response.json({
    name: fileDetails.originalname,
    type: fileDetails.mimetype,
    size: fileDetails.size
  })

})

const port = 3000;
app.listen(port, () => {
  console.log('Your app is listening on port ' + port)
})