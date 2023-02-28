
# Strava Dashboard

A dashboard application that pulls data from the Strava API and displays the data in widgets. 

The main aim was to create the functionality of Training Peaks - an application that lets you view your progression of fastest times through time.

Accessing the Strava API's "best efforts" data, we can compare these in graphs and tables.


## Dashboard

![Dashboard](./src/assets/screenshot.png)

View Demo [here](https://strava-dash.netlify.app).

## Dev Notes

Strava API only allows 100 API requests per 15 minutes. The additional data (fastest times etc..) for each run must be called individually, using an activity id. This makes the data very request-heavy. I would recommend only calling max. 20 activities at once while testing.

Homepage 


## Environment Variables

To run this project, you will need to add the following VITE environment variables to your .env file.

`VITE_CLIENT_SECRET`

`VITE_CLIENT_ID`

`VITE_REDIRECT_URL`

