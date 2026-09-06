/**
 * A social media platform stores posts.
 * Tasks:
 * 1. Find post that containing "typescript"!
 * 2. Find post that containing "nestjs"!
 * 3. Find the post with highest number of likes!
 * 4. Calculate the total of likes!
 */

const posts = [
  {
    author: "Andi",
    content: "Learning TypeScript #typescript #programming",
    hashtags: ["typescript", "programming"],
    likes: 120,
  },
  {
    author: "Budi",
    content: "My first NestJS project #nestjs #typescript",
    hashtags: ["nestjs", "typescript"],
    likes: 250,
  },
  {
    author: "Citra",
    content: "Frontend development #nextjs #react",
    hashtags: ["nextjs", "react"],
    likes: 180,
  },
  {
    author: "Deni",
    content: "Backend with NestJS #nestjs #backend",
    hashtags: ["nestjs", "backend"],
    likes: 300,
  },
];

// 1. Find posts containing "typescript"
const typescriptPosts = posts.filter(post =>
  post.hashtags.includes("typescript")
);
console.log(typescriptPosts);

// 2. Find posts containing "nestjs"
const nestjsPosts = posts.filter(post =>
  post.hashtags.includes("nestjs")
);
console.log(nestjsPosts);

// 3. Find post with highest likes
const highestLikesPost = posts.reduce((highest, post) =>
  post.likes > highest.likes ? post : highest
);
console.log(highestLikesPost);

// 4. Calculate total likes
const totalLikes = posts.reduce(
  (total, post) => total + post.likes,
  0
);
console.log(totalLikes);
