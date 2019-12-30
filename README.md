# Sociofolio

Sociofolio is a solution for sharing your multiple social networking sites handles with others easily, this lets you create a single page where all your links can be added and can be shared with others using a single url.

This project is created using React and Hasura.


Those who wish to contribute are welcome :smile: .

## How to setup locally

* run `git clone https://github.com/aswinzz/sociofolio.git`
* Enter into the cloned folder
* run `npm install`
* run `npm start`
* Go to `localhost:3000` in your browser

## How It Works

- The user can login by going to the route `/login` which will let the user to either login or sign up using Auth0 client.
- Once the user is Authenticated, user is directed to `/config` where the user can change the username which will be used as an identifier for the profile.
- The user can add new links to his profile by going to the route `/create`.
- `/profile` will show the profile view of the currently logged in user.
- Once a profile is configured, anyone can open the user's profile by going to `/username`, this will display all the links that the user has added.


- File Structure :
  * The file `src/App.js` is the base file, where the layout of all the pages are present and different routes are defined.
  * The folder `src/pages` contains different pages for the routes that are mentioned in App.js

Happy Contributing 😊
=======
Anyone who wish to contribute to this repo can take up any issue and start solving issues. You can also create [new-issues](https://github.com/NJACKWinterOfCode/sociofolio/issues/new) for the problems that you came across in the project.

## How to contribute?
  * First, verify if there's no one already working on solving the same issue.
  * Star and Fork the repository to start working on it.
  * Clone the repository in your local machine using $ git clone git@github.com:YOUR-GITHUB-USER-NAME/sociofolio.git
  * Visit your fork on (https://github.com/YOUR-USER-NAME/sociofolio) and create a pull request for your changes.
  * Make sure your pull request describes what you changed and references the issue that you're fixing.
