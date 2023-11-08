# Tixar Mobile App

**Tixar** is a mobile application that allows fans to get verified and purchase event tickets. As we don't have developer accounts on the App Store or Google Play Store, we will run our app on Expo. You will need both npm and Yarn installed as we have both package.lock and yarn.lock files.

## Prerequisites

- **Node.js and npm**: You can download and install Node.js, which includes npm, from [nodejs.org](https://nodejs.org/).

- **Yarn**: You can install Yarn as from [yarnpkg.com](https://classic.yarnpkg.com/en/docs/install).

- **Expo CLI**: Install the Expo CLI globally using npm or Yarn.

```bash
# Using npm:
npm install -g expo-cli

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
# install npm dependencies:
npm install

# install yarn dependencies:
yarn install
```

**Start the App**:

```bash
npx expo start
```

**Viewing the App on Mobile**:

Scan the QR code generated in the terminal using your native camera app. This will open the app in Expo Go.

**Viewing the App on a Mobile Emulator**:

For Android, install Android Studio and set up an Android emulator. Then press `a` in the terminal to run the app on the emulator.

For iOS, install Xcode and set up an iOS simulator. Then press `i` in the terminal to run the app on the simulator.

**Account Registration**:

Register for an account by filling out the relevant fields in the app.

**OTP Service**:

To use the OTP service, we have integrated a Telegram bot. Follow these steps:

- Add the Tixar Telegram bot to your Telegram app.
- Start a chat with the bot by typing `/start`.
- Follow the instructions to add your phone number. This will register your phone number with our OTP service.

**Logging In**:

When logging in to the Tixar app, enter your phone number. An OTP will be sent to you via Telegram.

## Contributing

If you'd like to contribute to the development of Tixar, please read our [contributing guidelines](CONTRIBUTING.md) before submitting a pull request.

## License

This project is licensed under the [Your License Name] License. See the [LICENSE](LICENSE) file for details.

If you have any questions or encounter issues, feel free to contact us.
```

You can copy and paste this entire markdown text into your README file.
