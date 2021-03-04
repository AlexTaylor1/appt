# Appt Technical Task

## Objective
The goal of this exercise is to create 3 API endpoints for an hypothetical online shop. Assume the shop is being built using a frontend framework like React and will be sending requests to your api.

The API endpoints are:
1. Allow a user to login with a username and password. If the username and password are correct, return an API Token.
    - the username and password can be hardcoded in the source code and checked with a simple string comparison
    - the API Token should be randomly generated and unique
    - the API token must be sent and validated in each of the other endpoints
2. Allow a user to record a purchase
    - the purchase should have an amount and description
    - assume that the amount sent through the API is exclusive of VAT
3. Allow a user to view stats on the purchases, this endpoint should return:
    - the total number of orders in the system
    - the total value of the orders in the system
    - the average value of the orders in the system
    - the total amount of VAT for the orders based on the current VAT rate of 20%

This exercise will be timed. We expect the exercise to take around 1-2 hours but we're more interested in how you approach the problem than the amount of time you take. The timer will start when you've been sent a link to the repo and will end when you email [jon@appt.digital](jon@appt.digital) with a link to your repo. If you reach 2 hours and there are requirements outstanding, just add comments to your code explaining what's left to do and outline how you'd do it with more time.

You can upload your work as a public repo and send a link to it or as a private repo and add jon@appt.digital with enough permission to clone it.

## Additional Requirements
- Create a Postman Collection for your endpoints and store it in the repo
- Comment your code to show your thought process
- Add unit tests using Jest or Mocha for at least one endpoint

## To Start
Run `
docker compose up
`

This will start up the project in a container in development mode. Changes to the code should cause the server to automatically reload. It will accessible at [http://localhost:1337](http://localhost:1337).

This project is built using SailsJS which is based on ExpressJS and is using Sails Disk database adapter. Restarting your project may cause your data to be erased.


### Additional Links
+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Postman](https://www.postman.com)


