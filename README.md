# YouTube Notes
NOTE: This repo was abandonded as everything seemed way too annoying to implement. I tried it again using Tauri instead of Electron [here](https://github.com/Sejmou/youtube-notes-).

In this repo, I want to create a desktop app that makes it possible to take notes while watching YouTube videos (especially educational ones).

## Planned features

- [ ] Take screenshots
- [ ] Add notes to screenshots
- [ ] Generate PDF from screenshots + notes
- [ ] OCR for screenshots (useful when taking screenshots of text, e.g. slides)
- [ ] Browse

## Implementation

I want to implement this thing as an Electron desktop app that makes use of Next.js. [Nextron](https://github.com/saltyshiomix/nextron) looks promising for that purpose.

### Why not a traditional Web App?

I don't have the budget to set up server infrastructure to store images and PDFs. So, I guess using the local file system is the next best option. Unfortunately, there's currently no hassle-free option for file system access in a traditional web app (e.g. the [File System Access API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API) looks promising, but browser support is really bad and it still requires a user to allow folder access on every page refresh, which is a suboptimal user experience, imo).

### Why Next.js in a desktop app!?

I know, one of the main strenghts of Next.js is SSR and SSG, which are both completely irrelevant for desktop environments. But I decided to use it because of other advantages such as the simple communication with the backend (especially when using [tRPC]()) and the fact that I can just use NextAuth for Google/YouTube logins and account access (which I had already figured out for another project and is something this app might benefit from sooner or later).

## Local project setup

### Install dependencies

```
# using yarn or npm
$ yarn (or `npm install`)

# using pnpm
$ pnpm install --shamefully-hoist
```

### Run

```
# development mode
$ yarn dev (or `npm run dev` or `pnpm run dev`)

# production build
$ yarn build (or `npm run build` or `pnpm run build`)
```
