const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// កំណត់ static files នៅ Root directory ផ្ទាល់
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// បើក index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
