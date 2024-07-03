# Welcome to Thunder News

Read some thunder news on: `https://thundernews.vercel.app`

### For Dev's

Frontend: Made using Vite + React.

To setup, pull this from `` or download the zip file. After that run this command `npm i` to install all the dependencies.
Make a `.env` file in the root directory and add `VITE_APP_NEWS_API_KEY=YOUR_API_KEY`. To get your api key, go to newsapi.org.
If you're using your api key then go to the vite.config.js and remove my server proxy from it. Run `npm run dev` and play around.

Backend: Express app.

This project was not meant to be full stack, but due to pricing changes of newsapi.org, free plan users can only call api's from localhost.
Hence we need a server to serve the request. If you're planning not to deploy the app then you don't need a server. Go play now!
