
# Strava Dashboard

A dashboard application that pulls data from the Strava API and displays the data in widgets. 

The main aim was to create the functionality of Training Peaks - an application that lets you view your progression of fastest times through time.

Accessing the Strava API's "best efforts" data, we can compare these in graphs and tables.


## The Dashboard

![Dashboard](./src/assets/screenshot.png)

## Dev Notes

Strava API only allows 100 API requests per 15 minutes. The fastest times for each run must be called individually, using an activity id. This makes the data very request-heavy. I would recommend only calling 50 activities at once.

Homepage 


## Environment Variables

To run this project, you will need to add the following VITE environment variables to your .env file.

`VITE_CLIENT_SECRET`

`VITE_CLIENT_ID`

