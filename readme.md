Hello! This is the repository for COMP 4710: Senior Design Project in the Spring 2021 semester.
We are working on a booking system for Music Matters, located in Montgomery, AL.

Spring 2021 Group - We split the teams into two:

App Dev Team:
- Sarah Pham (256-702-7184)
- Chase Dumbacher (256-374-5621) Discord : @Chay7646

Web Dev Team:
- Austin Mongold
- Austin Newkirk


Previous Team Repo:
Fall 2020's Group 4 Repo: https://github.com/jphong1111/Senior_Project_Team_Cycle_4.git

Welcome! Here, I'll give some assistance on how you can get everything up and running.


# Requirements

- [Node.js](https://nodejs.org) - We've written this app with cross-compatibility between Android and iOS in mind,
  so we are using the React Native framework, which requires Node.js
- [React Native](https://facebook.github.io/react-native/) - A framework written by the supreme overlords over at Facebook to be able to utilize JavaScript when writing for iOS and Android. Based on React, by the same overlords, for web browsers.
- [Expo](https://expo.io) - A toolkit to assist in React Native development, allowing you to write on your computer and super-simply view the product on your phone or relatively-simply on an emulator. It also handles all the compilation into IPA and APK, allowing you to do the former on Windows and the latter without waiting for Android Studio to boot up.
- [Firebase Realtime Database](https://firebase.google.com/docs/database/) - A NoSQL-based cloud database provided by other digital overlords, Google. We chose this one because it's free up to 1GB and works decently well with React Native and Expo.
- [Firebase CLI](https://www.npmjs.com/package/firebase-tools) - A Firebase Command Line Interface that allows you to deploy your microservices to Firebase Cloud Functions, which is where we have our email generation & Drive upload.

# Getting Started

Got everything installed? Good! There's a few more steps to make sure everything's up and running.

1. Clone this repository. I'm sure you know how to do this if you're on GitHub, and if not, guides are a mere Google search away.
2. Navigate to the cloned repository in command line. Again, you know how to do this.
3. Run `npm install`. This will install all the relevant Node modules.
   ```
   {
       apiKey: <your api key here>
   }
   ```
4. Create a file named `auth.json` in the root project folder, and enter the code shown above, alongside the API key.
   This will allow you to access the database to be able to retrieve information from it and write to it. \* **_UNDER NO CIRCUMSTANCES SHOULD YOU EVER ADD THIS FILE TO YOUR REPOSITORY_** (or post it anywhere public).
5. Run `expo start`. This will get everything running to be able to access the app from your phone.
6. Code to your heart's content using your preferred text editor.
7. When you're ready to compile everything into an app, hit Ctrl+C and enter `expo build:ios` or `expo build:android`.
   _ For Android, it'll ask if you want to include your own certificate.
   If you have one, feel free to use it, or just let Expo do their own thing.
   _ For iOS, you'll need to log into an Apple Developer account that is enrolled in the Apple Development Program, which costs \$99/year. Sorry man, Apple cares far too much about security (and your money) to get around that cost.

Once Expo's machines finish up everything, you'll get a nice IPA or APK for you to upload to the corresponding app marketplace!

## iOS Installation for adding new build to test

This will get the app on TestFlight for all linked testers to test.

- Preconditions: project downloaded and up to date, expo installed correctly, Mike's Apple Developer Account, Mac Computer for person uplaoding app

1. In the app.json file update the version number, just add 1 like from 1.0.1 to 1.0.2.

2. Build project from expo in terminal with 'sudo expo build:ios'.

3. Log into any Expo account in the VS Code terminal and "archive" -> then login with Mikes appstore connect account 

4. Wait for project to build and download the .ipa file from expo when completed.

5. Download the Transporter app on your Mac.

6. Deliver the app to TestFlight. You may have to complete steps 7, 8, and 10 for the app to like to Mike's dev account.

7. Log in to appstoreconnect.apple.com with Mike's Account.

8. Navigate to the 'TestFlight' tab in 'My Apps'.

9. The app should now be there shown.

10. Navigate to the 'App Store Connect Users' tab and add your personal apple account to become a tester instantly via invite. Add the rest of the group as well to test.

11. Download the TestFlight App onto your iPhone.

12. The app should be there to download this Beta App for testing.

# Known Issues and Wanted Functionality

- Ability to pull up calender on PC from firebase
- Language in artist's confirmation shown is not for The Renaissance/Exchange...It is for another venue ( This is from Fall 2020 group, didn't see this issue - Sarah Spring 2021)
- Many deprecated dependencies and sdks in the App code (May cause issues in the future)
- Editing the date/time when clicking on a certain person looks funky in the App
- Lots of warnings about components unmounting/mounting in the App 
- No access to the app on the private side of the Appstore connect, only access to the testflights (will be an issue since they expire)

# Useful Resources

- [React Native Documentation](https://facebook.github.io/react-native/docs/tutorial) - Includes a tutorial on how to write in React, good development tips for each platform, and documentation on what all React Native has to offer.
  - [React Documentation](https://reactjs.org/docs/getting-started.html) - As React Native is a mobile extenstion of React onto mobile apps, it uses a lot of the same elements as the original. Some things are not covered in the above guide, so this can be worth taking a look at as well.
- [React Navigation Documentation](https://reactnavigation.org/en/) - Includes a guide to working with React Navigation, as well as API references. We use this to navigate between the different screens on the app, so I strongly recommend taking a look at it to understand what's going on there!
- [React Native Calendars Repository](https://github.com/wix/react-native-calendars) - This is the framework we used to make our calendar. Thanks, Wix, for making our project a hell of a lot easier. They include some examples and documentation in the readme for their repository.
- [Firebase Realtime Database Documentation](https://firebase.google.com/docs/database/) - Documentation on how to interact with Firebase to access and change information.
  - [Firebase Reference Documentation](https://firebase.google.com/docs/reference/js/) - The above guide is useful for finding out how to do a thing you want correctly, but this is useful for knowing exactly what a function will do.
- [Expo Documentation](https://docs.expo.io/versions/latest/) - All the documentation you need for how to work with Expo. Not quite as necessary as everything else here, as Expo is more limited, but it's still come in handy in a few instances.
- [Firebase CLI Documentation](https://firebase.google.com/docs/cli/) - Documentation on the capabilities of the Firebase CLI.
- [PDFMake Documentation](https://pdfmake.github.io/docs/) - Documentation on PDFMake, which is the package we're using to generate our PDFs.
- [Nodemailer Documentation](https://nodemailer.com/about/) - Nodemailer is the package we're using to send out emails. I highly recommend taking a look at it to understand how to work with it.
- [Drive API Reference](https://developers.google.com/drive/api/v3/about-sdk) - As we're uploading our documents to Mr. Moody's Google Drive, we utilized this API to connect to it.
