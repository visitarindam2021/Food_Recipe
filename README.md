🥘 Recipe Viewer with Favorites
A simple, responsive web application to browse and save your favorite recipes. Built with Next.js 14+, styled with Tailwind CSS, and powered by TheMealDB API and MongoDB Atlas.

🚀 Objective
Build a recipe app within 24 hours that allows users to:

🔍 View recipes from TheMealDB API

❤️ Save favorite recipes

🗂️ Manage favorites with a tab

📱 Enjoy a mobile-responsive UI

✨ Features

🔍 View Recipes
Browse a list of recipes with:

🍽️ Name

🖼️ Image

📝 Short description (if available)

📄 Recipe Details
Click a recipe to view:

📛 Name

🍴 Ingredients

🧑‍🍳 Instructions

📷 Dish image

❤️ Favorite Recipes
Mark/unmark recipes as favorite

Stored in MongoDB

⭐ Favorites Tab
View all saved recipes

Option to remove any recipe

📱 Responsive Design
Works seamlessly on desktop, tablet, and mobile

🛠️ Tech Stack

| Frontend     | Backend/API         | Database      |
| ------------ | ------------------- | ------------- |
| Next.js 14+  | Next.js API Routes  | MongoDB Atlas |
| Tailwind CSS | Axios for HTTP reqs | Mongoose ORM  |


🗂️ Folder Structure

recipe-viewer/
├── app/
│   ├── page.tsx
│   ├── recipes/[id]/page.tsx
│   ├── favorites/page.tsx
│   ├── signup/page.tsx (optional)
├── components/
│   ├── Header.tsx
│   ├── RecipeCard.tsx
├── lib/
│   └── db.ts
├── models/
│   └── Favorite.ts
├── pages/api/favorites/
│   ├── index.ts
│   └── [id].ts
├── public/
│   └── demo-screenshot.png
├── .env.local
└── README.md


🧪 MongoDB Schema

{
  "recipeId": "52772",
  "recipeName": "Chicken Handi",
  "imageUrl": "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg"
}


🔌 External APIs Used
🔗 Get recipes
https://www.themealdb.com/api/json/v1/1/search.php?s=

🔗 Get random recipe
https://www.themealdb.com/api/json/v1/1/random.php

🔗 Get recipe details
https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}

🧑‍💻 Setup & Run Locally

git clone https://github.com/visitarindam2021/recipe-viewer.git
cd recipe-viewer
npm install


🧪 2. Environment Variables (`.env.local`)
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority


▶️ 3. Start Development
npm run dev


🌍 Deployment

- ✅ Hosted on [Vercel](https://vercel.com/)
- ✅ Live App: https://food-recipe-pink-nine.vercel.app/
- ✅ Database on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)


✅ Evaluation Checklist

- ✔️ Can users view recipe data from API?
- ✔️ Can they see details and ingredients?
- ✔️ Can users save/delete favorites?
- ✔️ Is it responsive and visually appealing?
- ✔️ Clean code and modular structure?
- ✔️ Live demo available on Vercel?



🔒 Optional Enhancements

- [x] Search bar
- [x] Random recipe suggestion
- [ ] User authentication
- [ ] Category-based browsing

---

📸 Sample Screens

> Add screenshots of:
- Home page with recipe list
- Recipe detail view
- Favorite tab

📞 Contact

Built with ❤️ by Arindam Roy
🔗 GitHub: https://github.com/visitarindam2021
📧 Email: visitarindam2021@gmail.com
📱 Phone: +91-9907197945

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
