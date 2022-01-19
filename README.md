## Typescript

Here, I describe the process for installing and using Typescript in my Next Js project.

First, I dedicated time to understanding Typescript, its benefits, and how it works. To achieve this, I read the official Typescript Handbook and watched tutorials from YouTube. Then, I followed the Next JS documentation to add Typescript to my project. I used the default configuration, except for the target, which I changed to ES6. I did not see the necessity of making my code downlevel when modern browsers support ES6, which is the syntax I was already using for my project.

With Typescript installed, I  changed my VSC settings to use Typescript to format my code. Also, I added a snippet, **tfc**, in the *typescript react.json* file. The snippet creates a *React function component* with Typescript syntax(an interface for Props, etc.). Finally, I formatted and fixed warnings shown to me by Typescript. Mainly, I got messages of missing *deps* in my useEffect functions, etc.

After checking that my code was compiling properly, I converted my *index* and *backdrop* components to *tsx* files to explore its functionality and see it was working. Following the Typescript document's suggestions, I added a few *types* as Typescript intuitively assigns *types* on its own. I hover over my elements and assign *types* to values set to **any**. If necessary, I hover over my elements to get clues on why Typescript was complaining.

After adding types, fixing warnings, and making sure the files were compiling,  I changed the strict mode in my configuration to *true*. The modification forced me to follow a more strict version of its rules. Nevertheless, I was more familiar with the language and implemented the necessary actions faster.

In conclusion, I understand why so many companies use the Typescript language. Adding a static type system to your regular JS makes it easier to detect bugs before runtime. As a developer, it makes you feel safer. It also made me think differently about my code. For example, I erase my *null* values. On the other hand, I recognize that I am new to the language, and there is a lot of syntax and functionality that I need to explore.

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
