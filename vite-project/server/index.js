

// const express = require('express');
// const mongoose = require('mongoose');
// const Post = require('../server/models/Post'); // model import karo
// const cors = require('cors');
// const authRoutes = require('./routes/auth');




// const app = express();
// app.use(cors());
// app.use(express.json({ limit: '10mb' })); // json aur base64 image handle karne ke liye

// // MongoDB connect karo (apne DB name ke sath)
// mongoose.connect('mongodb://localhost:27017/employee', {
//   // useNewUrlParser: true,
//   // useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.error('MongoDB connection error:', err));




// const authRoutes = require('./routes/auth');
// app.use('/api/auth', authRoutes);

// // Create post
// app.post('/api/posts', async (req, res) => {
//   try {
//     const post = new Post(req.body);
//     await post.save();
//     res.status(201).json(post);
//   } catch (error) {
//     res.status(400).json({ message: 'Error creating post', error });
//   }
// });

// // Read all posts
// app.get('/api/posts', async (req, res) => {
//   try {
//     const posts = await Post.find().sort({ createdAt: -1 });
//     res.json(posts);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching posts', error });
//   }
// });

// // Update post by id
// app.put('/api/posts/:id', async (req, res) => {
//   try {
//     const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(updatedPost);
//   } catch (error) {
//     res.status(400).json({ message: 'Error updating post', error });
//   }
// });

// // Delete post by id
// app.delete('/api/posts/:id', async (req, res) => {
//   try {
//     const post = await Post.findByIdAndDelete(req.params.id);
//     if (!post) return res.status(404).json({ message: 'Post not found' });
//     res.json({ message: 'Post deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting post', error });
//   }
// });

// // Server start karo
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Post = require('./models/Post');
const app = express();
const PORT = 3001;

app.use(express.json({ limit: '10mb' }));      // increase JSON limit to 10 megabytes
app.use(express.urlencoded({ limit: '10mb', extended: true })); 
app.use(cors());


// ✅ Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/employee', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// ✅ Use Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);



// // Create post
app.post('/api/posts', async (req, res) => {
  try {
    console.log('Received post data:', req.body);
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    console.error('Error creating post:', error.message);
    res.status(400).json({
      message: 'Error creating post',
      error: error.message,
      validationErrors: error.errors, // this helps!
    });
  }
});

// Read all posts
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error });
  }
});

// Update post by id
app.put('/api/posts/:id', async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: 'Error updating post', error });
  }
});

 // Delete post by id
app.delete('/api/posts/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting post', error });
  }
});


// ✅ Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
