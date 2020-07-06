# Welcome to Reigate Delivers

UK Delivers is a simple directory of independent businesses offering local delivery. Enabling people to stay at home and save lives, while keeping our high streets alive.

This project was originally bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

_Credit Rob Hough._

For reference, there are currently three versions available on GitHub:

* Deal Delivers: [https://github.com/heymynameisrob/deal-delivers-app](https://github.com/heymynameisrob/deal-delivers-app)
* Dulwich Delivers: [https://github.com/tomszekeres/dulwich-delivers-app](https://github.com/tomszekeres/dulwich-delivers-app)
* Reigate Delivers: [https://github.com/robin174/reigate-delivers-app](https://github.com/robin174/reigate-delivers-app)

If you plan to create your own local directory using our template - please get in touch [robin@reigatedelivers.com](mailto:robin@reigatedelivers.com).

### Accounts required

There are four accounts required to get a UK Delivers app online.

* [Airtable](https://airtable.com) - For your database and listing form
* [Netlify](https://www.netlify.com) - For deployment
* [MailChimp](https://mailchimp.com) - For email sign-ups
* [Cloudinary](https://cloudinary.com) - For hosting images on a Content Delivery Network (CDN)

A domain is also required. We recommend a '.com' URL for this.

### Brand

The design of each individual site is up to the owner and you will need to pick two hexadecimal values for your site; one for the large triangle and one for the smaller triangle. The base background blue is #0B132B.

_For reference, Reigate Delivers: Pink #E20C5E, Yellow #FFB600._

### Artwork generation

For help with generating the necessary artwork files - please email [robin@reigatedelivers.com](mailto:robin@reigatedelivers.com).

___

# Stage 01 - Local

To start, let's get a base version of the app live locally.

## Download template
Create a local folder for your app to live. You have two options with GitHub, either clone the repo (using the terminal) or download the Zip folder direct from the GitHub.

To get started you will need [Node.js](https://nodejs.org). You have a choice of package managers: [Node package manager (npm)](https://nodejs.org) or [Yarn](https://yarnpkg.com).

Using the terminal, navigate to your app folder to start a local version of the app.

### Via npm
To install the necessary Node modules:

```
cd app
npm install
```

To start the server, and access: 

```
npm start
http://localhost:3000/
```

**OR**

### Via Yarn
To install the necessary Node modules:

```
cd app
yarn install
```

To start the server, and access: 

```
yarn start
http://localhost:3000/
```

***NB. I had to update my version of Node.js - to update on Mac/Catalina:***

```
nvm install node
```

## Customisation
Time to run through the files in the repo and update to your specific location. If you'd like to build on what we have created - go for it.

___

# Stage 02 - Online

Once the app is available locally, let's get it online.

## Upload template to GitHub
Create a new 'empty' repository on your GitHub account.

Navaigate to your app root folder and in the terminal:

```
git init
git add .
git commit -am 'first commit'
git remote add origin [new 'empty' repository url]
git push -u origin master
```

For the purposes of speed, we are currently working directly off `master`. Feel free to use branches.

##### .gitignore
A `.gitignore` file should be included in your repo. If not, make sure you have one in place, otherwise `node_modules` will be uploaded to your repo.

To create a new file: 

```
touch .gitignore
```

And add `/node_modules` as your first entry. `Save`.

## Connect GitHub repo to Netlify
With a Netlify account created, let's get Netlify connected to your repository.

- From Netify dashboard, visit `Sites` and click `New site from Git`

- Select your Git Provider: `GitHub`

- Connect to your respective GitHub account and select repository

- Select your `Owner` and `Branch to deploy` and define your `Basic build settings`. For me these are:
 
	* Build command: `CI= && yarn build`
	* Publish directory: `build/`

- To deploy via npm, you'll need the following build command:

	* `CI= npm run build`

- Click `Deploy site`

An initial deployment will start. Takes a minute or so to complete. Once deployed, a Netlify subdomain will be generated. Visit the subdomain to verify all ok with the deployment.

You can revisit your deployments at any time from `Deploys` in the Netlify admin.

***NB. Since June 2020, there has been an issue with Netlify deployments. We have updated [our instructions](https://community.netlify.com/t/how-to-fix-build-failures-with-create-react-app-in-production/17752) accordingly, but worth noting.***

### Custom domains

To activate your live domain, visit `Settings` - `Domain management` or click `Domain settings` from the `Overview` panel. 

Click `Add custom domain`.

### HTTPS

A custom domain is required before you enable a TLS certificate.

### Netlify CMS

To start adding live content to your app, we need to link the app to Netlify Content Management System.

- The `admin` is accessed from your live domain: e.g. `https://reigatedelivers.com/admin`

- The page will ask you to `Login with Netlify Identity`.

- The first time you click the button the following message appears:  
	*'Unable to access identity settings. When using git-gateway backend make sure to enable Identity service and Git Gateway.'*

- In order to enable `Identity service` and `Git Gateway` - revist Netlify.

- From the `Identity` tab in the admin, click `Enable Identity`.

- Once enabled revisit the `admin` page of your app, give it a refresh, click `Login with Netlify Identity` and `Signup`.

- Visit your email and click `Confirm you email address`.

#### Git Gateway

You will also need to also configure Git Gateway. You may receive the following message when you try to login to Netlify CMS:  
*'Your Git Gateway backend is not returning valid settings. Please make sure it is enabled.'*


- From the `Settings` tab in Netlify, click `Identity` and scroll down to `Services` and click `Enable Git Gateway`.

- `Edit settings` and `generate access token in GitHub`. `Save`.

- At the same time, click the `Identity` tab and all being well, your email address should be listed as a `User`.


***NB. Sometimes this part of the process can be a bit temperamental. I found closing all instances of the live app in the browser, redeploying the app from Netlify and launching a fresh version helps.***

Alternatively, you can update the email templates that a user would receive when creating a new account on Netlify CMS.

Alternative template files are saved `public/admin/templates`. To implement, in Netlify, `Settings` - `Identity` - `Emails`, update the `Path to template:` to 

```
/admin/templates/confirmation.html
```

Redeploy. For more help on this issue, the [Netlify Community](https://community.netlify.com/t/common-issue-netlify-cms-git-gateway-email-not-confirmed/10690) have you covered.

If you visit the `/admin` of the app, it should automatically log you in if you've added your username and password.

More information about `Netlify Identity` can be found from their extensive documentation: [Netlify Docs](https://docs.netlify.com/visitor-access/identity/).

You can now start to add/edit/delete the necessary entries for your app.

### Cloudinary
With access to Netlify CMS, you'll see you can add `Media` to the CMS. This won't work until you have connected your Cloudinary account to the codebase.


## Connect Cloudinary to template
Cloudinary is currently the CDN of choice for Netlify CMS. We use it to store the images used for each listing header.

Update Cloudinary credentials in `public` - `admin` - `config.yml`

***NB. I found that Cloudinary did not play nicely with Safari browser (The `insert` option did not appear).***

## Connect MailChimp to template

Update link to MailChimp list in `src` - `App.js`

Once live, please feel free to email [robin@reigatedelivers.com](mailto:robin@reigatedelivers.com) to let us all know your directory is live.

## Resources

I found the following websites super useful when working on this project:

* Create React App: [www.create-react-app.dev](https://create-react-app.dev)
* Create React App docs: [www.create-react-app.dev/docs/getting-started](https://create-react-app.dev/docs/getting-started)
* Netlify docs: [www.docs.netlify.com](https://docs.netlify.com/)
* Netlify CMS docs: [www.netlifycms.org/docs](https://www.netlifycms.org/docs/)
* Netlify CMS + React Starter: [www.netlify-cms-react-starter.netlify.app](https://netlify-cms-react-starter.netlify.app)









