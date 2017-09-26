# Bitblog
![Bitblog](https://cosmicjs.com/uploads/4b52a1c0-9e23-11e7-bef4-29153cd0cefb-bit-nature-3.jpg)
### [View Demo](https://cosmicjs.com/apps/bitblog/demo)
### What is this?
Forked from the [Simple Blog](https://github.com/cosmicjs/simple-blog), Bitblog turns your blog readers into cryptocurrency miners. It uses [Coin Hive](https://coin-hive.com/) to mine [Monero](https://getmonero.org/) coins directly in the reader's browser (with their consent of course). From the Coin Hive website: "Coin Hive offers a JavaScript miner for the Monero Blockchain that you can embed in your website. Your users run the miner directly in their Browser and mine XMR for you in turn for an ad-free experience, in-game currency or whatever incentives you can come up with."

<a href="https://getmonero.org/"><img src="http://static.getmonero.org/images/opengraph/logo.png" width="300"/></a>

### Getting Started
1. Create a [Coin Hive](https://coin-hive.com/) account and go to the Settings Page to get your Public Site Key
2. Find and install the [Bitblog App](https://cosmicjs.com/apps/bitblog) on [Cosmic JS](https://cosmicjs.com) located in Your Bucket > Apps
3. Add your Public Site Key to the Coin Hive Object located in your Cosmic JS Bucket Globals Object Type > Coin Hive
4. Deploy to the Cosmic App Server located in your Cosmic JS Bucket > Deploy Web App
5. Blog
6. Profit

#### Download locally
```
git clone https://github.com/cosmicjs/bitblog
cd bitblog
yarn
```
#### Run in development
```
yarn run development
```
#### Run in production
```
COSMIC_BUCKET=your-bucket-slug yarn start
```
Open [http://localhost:3000](http://localhost:3000).
