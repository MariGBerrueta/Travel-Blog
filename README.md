## Typescript

Here, I describe the process for installing and using Typescript in my Next js project.

First, I dedicated time to understanding Typescript, its benefits, and how it works. To achieve this, I read the official Typescript Handbook and watched tutorials from YouTube. Then, I followed the Next JS documentation to add Typescript to my project. I used the default configuration, except for the target, which I changed to ES6. I did not see the necessity of making my code downlevel when modern browsers support ES6, which is the syntax I was already using for my project.

With Typescript installed, I  changed my VSC settings to use Typescript to format my code. Also, I added a snippet in the typescript react.json file. You can use the snippet **tfc** to create a *React function component* with Typescript syntax in it(an interface for Props, etc.). On top, I formatted and fixed warnings shown to me by Typescript. Mainly, I got warnings of missing *deps* in my useEffect functions, etc.

After making sure that my project was still running in development, I decided to convert my *index* and *backdrop* components to *tsx* files to explore its functionality and make sure it was working properly on the project. Following the Typescript document's suggestions, I added a few *types* as Typescript intuitively assigns *types* on its own. I hover my elements and assign *types* to values that were set to **any**. When facing problems, I hover over elements to get clues on why Typescript was complaining.

Once my *tsx* files were working well, I changed the strict mode in my configuration to *true*. This made more warnings pop up, but this time was easier to fix them as I had a better understanding of the language.

In conclusion, I can understand why so many companies use the Typescript language. Adding a static type system to your regular JS makes it easier to detect bugs before runtime. As a programmer it makes you feel safer. It also made me think differently about my code. For example, I erase my *null* values. On the other hand, I recognize that I am new to the language and there is a lot of syntax and functionality that I need to explore.

## Getting Started

First, install all packages:

```bash
npm install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
