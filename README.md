# website-vuepress

## Update documentation

To update documentation just place .md files in the guide folder. To edit the sidebar list titles you have to edit the `title` field in .md file. If a subfolder doesn't provide a `README.md` file with the `title` section, the system will use folder name for the title.

## Build mode

To generate static files run `npm run docs:build` the files are stored in the `.vuepress/dist` folder. You can use `serve` package to run them in your browser.

## Dev mode

To run the script in development mode run `npm run docs:dev`. This mode watches all of the files except the .md files. To watch the .md files run `npm run dev:watch`.
