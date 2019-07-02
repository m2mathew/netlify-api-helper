# Netlify API Helper

This little app provides a way to use a limited subset of the Netlify API.

It's hosted on Netlify at → `https://netlify-api-helper.netlify.com/`

It's like a hat on a hat...it's a Netlify API built on top of the Netlify API hosted on Netlify.

## To Use

1. Clone this repo
2. Make an .env file with your [Netlify API Token](https://app.netlify.com/user/applications).
    - Only used if you are running locally. When the app is deployed, you will authorize with Netlify's API in a super-safe way. 😎
3. Run `yarn && yarn start`
4. Open up [your browser](http://localhost:3000)
5. Click the "Log in with Netlify" button to see information about your user/account/sites.

### Built with

- ReactJS
- Redux
- Styled Components
- React Router
- Netlify Client
- Netlify Functions
- A bit of Material-UI

### Helpers

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
