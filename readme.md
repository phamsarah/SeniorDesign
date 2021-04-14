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

# Useful Resources
- App Code Documentation
  - This is a useful walk through of various issues we fixed and ran into and how we fixed them
- Readme.txt in MusicMattersApp
  - This list various specific packages/libaries used in the app documentation as well as links to documentation
- Cycle 3 Report (Inside 2021 Spring Reports Folder)
  - This is the final revision of our cycle report and is a decent place to find diagrams and descriptions of things we worked on.

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
4. Run `expo start`. This will get everything running to be able to access the app from your phone.
5. Code to your heart's content using your preferred text editor.
6. When you're ready to compile everything into an app, hit Ctrl+C and enter `expo build:ios` or `expo build:android`.
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
- Many deprecated dependencies and sdks in the App code (May cause issues in the future)
- Editing the date/time when clicking on a certain person looks funky in the App (Problem with "react-native-modal-datetime-picker" library)
- Lots of warnings about components unmounting/mounting in the App 
- Mike wants Stage location (e.g house restaurant) displayed underneath artist name on a calendar pdf.
- Mike wants to remove AM/PM from the times shown on calendar pdf. (May prove slightly difficult ask if required)
- Confirmation and (Possibly) Invoices are suppose to be sent out on the 20th of the previous month for the next month. Currently (I believe) this sends out the current month on the 20th of said month.
