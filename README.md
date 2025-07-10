Recipe Viewer with Favorites
Objective
Create a very simple website to browse recipes using Next.js (version 14+). Users can:
●
●
●
View recipes from TheMealDB API.
Save favorite recipes.
Manage their favorite recipes.
Time limit: 24 hours
Features
1. View Recipes
●
○
○
○
Show a list of recipes with:
Recipe name.
Image.
Short description (if available).
2. Recipe Details
●
○
○
○
○
When a recipe is clicked, show:
Name.
Ingredients.
Instructions.
Dish image.
3. Favorite Recipes
●
●
Mark recipes as "favorites" from the detail view.
Store favorite recipes in a database.
4. Favorites Tab
●
●
Show all saved favorite recipes.
Allow users to remove recipes from their favorites. (optional)
5. Responsive Design
● Make sure the site works well on phones, tablets, and desktops.
15-MINUTE CHICKEN & HALLOUMI BURGERS
INSTRUCTIONS
STEP 1
Favorite Button
Put the chicken breasts between two pieces of baking parchment and use a
rolling pin to gently bash them until they are approximately 1cm thick.
Cut each chicken breast into two even pieces.
STEP 2
If you're using a frying pan, heat two frying pans over medium-high heat, with
one of them containing oil.
Fry the chicken in the oiled pan for 3-4 mins on each side until they are cooked
through.
Season the chicken, reduce the heat, drizzle in the chilli sauce and half of the
lemon juice, and cook for an additional 1-2 mins until the sauce is reduced.
Remove the chicken from the heat.
If you're using an air-fryer, preheat it to 180C for 4 mins.
Add the chicken to the air-fryer and cook for 12 mins.
Drizzle over the chilli sauce and half the lemon juice and cook for an additional 1-
2 mins until the chicken is cooked through and the sauce is reduced.
Remove the chicken and keep it warm.
STEP 3
While the chicken is cooking, toast the buns in the dry frying pan for 30 seconds.
Transfer them to a plate.
If you're using an air fryer, put the buns in the air fryer for 1-2 mins until they are
warm.
Increase the air fryer temperature to 200C.
Add the halloumi to the air fryer basket and cook for 10 mins, turning halfway
through, until it's golden.
Toss the cabbage with the mayo and the remaining lemon juice.
STEP 4
Spoon the hummus (or dip of your choice) into the toasted buns, then top with
the rocket, chilli chicken, halloumi, and peppers.
Drizzle with a little more chilli sauce, spoon over the cabbage, season with black
pepper, and top with the bun lids.
Serve with any extra cabbage on the side or a green salad.
All Meals Favorite Meals
15-minute chicken & halloumi burgers Lamb Pilaf (Plov) Strawberries Romanoff Potato Salad (Olivier Salad)
Blini Pancakes Fish Soup (Ukha) Beetroot Soup (Borscht) Cabbage Soup (Shchi)
Technical Overview
Frontend
●
●
Use Next.js.
Style with Tailwind CSS or any component framework you are comfortable with.
Backend
●
●
Use Next.js API routes for actions like saving or removing favorites.
Use MongoDB Atlas to store favorite recipes.
Database Schema
● Use one collection in MongoDB - favorite_recipes:
{
  "recipeId": "52772",
  "recipeName": "Chicken Handi",
  "imageUrl": "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg"
}
External API
●
○
○
○
Use TheMealDB API for recipe data:
Get recipes: https://www.themealdb.com/api/json/v1/1/search.php?s=
Get random recipe: https://www.themealdb.com/api/json/v1/1/random.php
Get recipe details: https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}
Deployment
●
●
●
Host the app on Vercel.
Use MongoDB Atlas (free tier).
Set up environment variables for API keys and database connections.
Step-by-Step Instructions
Step 1: Project Setup
1. Create a new Next.js app:
npx create-next-app@latest recipe-viewercd recipe-viewer
1. Install dependencies:
npm install mongoose axios
Step 2: Display Recipes
● Fetch and show recipe data on the homepage using TheMealDB API.
Step 3: Recipe Details Page
●
●
Create a dynamic route: /recipe/[id] .
Fetch detailed recipe data when the page loads.
Step 4: Add Favorites
1.
2.
Set up MongoDB Atlas.
Create API routes:
○
○
○
GET /api/favorites: Fetch all saved favorites.
POST /api/favorites: Save a new favorite.
DELETE /api/favorites/[id]: Remove a recipe.
Step 5: Favorites Tab
●
○
○
Add a tab to:
Show all favorites.
Allow removing recipes.
Step 6: Deploy
●
●
Deploy on Vercel.
Configure environment variables for MongoDB and API keys - make sure these keys aren't publicly
accessible.
Evaluation Criteria
Core Features
●
○
○
○
Can users:
See recipes from TheMealDB?
View recipe details?
Save and manage favorites in MongoDB?
Code Quality
● Clean, modular, and well-documented code.
UI/UX
●
●
Responsive and easy to use.
Clean and visually appealing design.
Deployment
● App live on Vercel with working database operations.
Post Submission Interview
● A number of questions will be asked about the project, its implementation, and beyond
Bonus Points (entirely optional, but pushes you above the rest)
●
●
●
●
UI/UX enhancements - thoughtful redesign of the target UI presented.
Extra features (e.g., search, random recipe suggestions).
User Management
Authentication Implementation

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

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
