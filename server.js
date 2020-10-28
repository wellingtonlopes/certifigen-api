import express from 'express';
import cors from 'cors';

const app = express();


const template = {
  html: '',
  name: '',
  course: ''
};

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send(template);
});

app.post('/certificado', (req, res) => {
  const { data } = req.body;
  template.name = data.name;
  template.course = data.course;
  template.html = 'certificate.html'
  console.log(template);
  res.json(template);
})

app.listen(3001, () => {
  console.log('App is running on port 3001');
});

/*
/ --> GET = form page
/certificado --> POST = data para o certificado
*/