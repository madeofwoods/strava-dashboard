export const errorHandler = (error: number) => {
  switch (error) {
    case 444:
      return "Apologies, we are having technical issues at the moment.";
      break;
    case 400:
      return "Apologies, we are having technical issues at the moment.";
      break;
    case 401:
    case 404:
      return 'Please the tick box "View data about your private activities" to view your data.';
      break;
    case 403:
      return "We are forbidden from accessing this data. Please check your privacy settings to continue.";
      break;
    case 429:
      return "Apologies, Strava limits the number of requests we can make per 15 minutes. Please try again later.";
      break;
    case 500:
      return "Apologies, Strava is having technical issues at the moment.";
  }
};
