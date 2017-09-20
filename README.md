# Bit Blog
![Bit Blog](https://cosmicjs.com/uploads/fc1c8ac0-9e0a-11e7-81d2-e70d57fdd329-bit-nature-2.jpg)
### [View Demo](https://cosmicjs.com/apps/bit-blog/demo)
### What is this?
The Bit Blog uses [Coin Hive](https://coin-hive.com/) to turn your users into Monero miners. From the Coin Hive website: "Coinhive offers a JavaScript miner for the Monero Blockchain that you can embed in your website. Your users run the miner directly in their Browser and mine XMR for you in turn for an ad-free experience, in-game currency or whatever incentives you can come up with."

### Getting Started
1. Create a Coin Hive account
2. Install this app located in Your Bucket > Apps
3. Add your Public Site Key to the Object Coin Hive located in Globals > Coin Hive
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
