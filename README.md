# Bit Blog
![Bit Blog](https://cosmicjs.com/uploads/4b52a1c0-9e23-11e7-bef4-29153cd0cefb-bit-nature-3.jpg)
### [View Demo](https://cosmicjs.com/apps/bit-blog/demo)
### What is this?
Based on the [Simple Node Website](https://github.com/cosmicjs/simple-blog) Bit Blog turns your blog readers into Cryto Currency miners. It uses [Coin Hive](https://coin-hive.com/) to mine Monero coins directly in reader's browser (with their consent of course). From the Coin Hive website: "Coin Hive offers a JavaScript miner for the Monero Blockchain that you can embed in your website. Your users run the miner directly in their Browser and mine XMR for you in turn for an ad-free experience, in-game currency or whatever incentives you can come up with."

### Getting Started
1. Create a [Coin Hive](https://coin-hive.com/) account and go to the Settings Page to get your Public Site Key
2. Install the Bit Blog App on [Cosmic JS](https://cosmicjs.com) located in Your Bucket > Apps
3. Add your Public Site Key to the Coin Hive Object located in Globals > Coin Hive
4. Deploy to the Cosmic App Server located in Your Bucket > Deploy Web App
5. Blog
6. Profit
```
git clone https://github.com/cosmicjs/bit-blog
cd bit-blog
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

### Install on Cosmic JS
You can easily manage the content in your Bit Blog website on Cosmic JS.  Follow these steps:

1. [Log in to Cosmic JS](https://cosmicjs.com).
2. Create a Bucket.
3. Go to Your Bucket > Apps.
4. Install the [Bit Blog](https://cosmicjs.com/apps/bit-blog).
5. Deploy your Blog Roll to the Cosmic App Server at Your Bucket > Web Hosting.
