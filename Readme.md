# Hush

Hush is a little demo app built in ~2h from the ground up for a React Meetup live demo session. It's meant to provide some introduction to:

- React and Typescript
- Generators
- CSS-in-JS with emption
- Render props
- requestAnimationFrame
- Deploying with now and netlify

It's a breathing app heavily inspired by [Oak](https://itunes.apple.com/us/app/oak-meditation-breathing/id1210209691).

## Install and run

To install, just clone the repo and run:

```sh
yarn
```

To run it, simply:

```sh
yarn start
```

To build the app:

```sh
yarn build
```

### Deploy the app

With now, log into through the CLI and then:

```
yarn deploy
```

With netlify, clone the repo and then work your magic in the netlify dashboard.

#### Steps

You can checkout a specific step at any point in time by doing:

```
git checkout step-1-init
```

All steps are tagged and named appropriately:

**Step 1 (step-1-init)**

- Setup the project with the correct configs
- Add the basic UI components that we will use

**Step 2 (step-2-types)**

- Add typings

**Step 3 (step-3-home)**

- Add Global css
- Create and style the Home component and then add it to the Router

**Step 4 (step-4-home-with-exercises)**

- Add exercises to the Home component and style them

**Step 5 (step-5-exercise-routes)**

- Create Exercise component with typings and basic styles
- Create a route for each exercise

**Step 6 (step-6-timer)**

- Create the Timer component in Exercise

**Step 7 (step-7-timer-with-generator)**

- Create repeatGenerator
- Integrate the repeatGenerator into the Timer component

**Step 8 (step-8-progress)**

- Create Progress component in Exercise

**Step 9 (step-9-deploy)**

- Setup the deploy config files for both netlify and now

**master**

- Some bug fixes post-meetup
