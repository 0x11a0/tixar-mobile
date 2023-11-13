# Tixar Mobile App

**Tixar** is a mobile application that allows fans to get verified and purchase event tickets. As we don't have developer accounts on the App Store or Google Play Store, we will run our app on Expo. You will need Yarn installed as we have dependencies in our yarn.lock file.


## Prerequisites

- **Yarn**: You can install Yarn as from [yarnpkg.com](https://classic.yarnpkg.com/en/docs/install).

- **Expo CLI**: Install the Expo CLI globally using npm or Yarn.

```bash
# Using Yarn:
yarn global add expo-cli
```

## Installation and Usage

**Cloning the Repository**:

```bash
git clone https://github.com/yourusername/Tixar-Client.git
cd Tixar-Client
```

**Install Dependencies**:

```bash
# install yarn dependencies:
yarn install
```

**Start the App**:

```bash
npx expo start
```

**Viewing the App on Mobile (Recommended)**:

Install the Expo Go app on the [App store](https://apps.apple.com/sg/app/expo-go/id982107779) or [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&pcampaignid=web_share)

Ensure that your mobile device and laptop are on the same network.

Scan the QR code generated in the terminal using your native camera app. This will open the app in Expo Go.


**Viewing the App on a Mobile Emulator (Requires Emulator Setup)**:

For Android, install Android Studio and set up an Android emulator. Then press `a` in the terminal to run the app on the emulator.

For iOS, install Xcode and set up an iOS simulator. Then press `i` in the terminal to run the app on the simulator.


**Account Registration**:

Register for an account by filling out the relevant fields in the app.


**OTP Service**:

To use the OTP service, we have integrated a Telegram bot. Follow these steps:

- Add the [Tixar Telegram Bot](https://t.me/Tixar_bot) to your Telegram app.
- Start a chat with the bot by typing `/start`.
- Follow the instructions to add your phone number. This will register your phone number with our OTP service.
  

**Logging In**:

When logging in to the Tixar app, enter your phone number. An OTP will be sent to you via Telegram.


## Enquiries

If you have any questions or encounter issues, feel free to contact us.


