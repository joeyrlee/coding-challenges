# Hubspot coding test
It’s your first day at HubSpot, and you’re in charge of writing the logic to send invitations to a special two-day event in each country for HubSpot’s partners in those countries. We need to find the dates that’ll work best based on survey results that partners have sent in and determine how many people can attend.

You’re provided with an API that gives you a list of partners, their countries, and which dates they’re available in ISO 8601 format.

Another team will send out the invitations, but you need to tell them when we should host the event and who should attend by POSTing to an API.

The date you send in for the country should be the starting date of the two day period where the most partners can make it for both days in a row. In case of multiple dates with the same number of partners, pick the earlier date. If there are no two days in a row when any partners can make it, return null.

## API Docs and Example
To get the list of partners, send an HTTP GET to:
`https://candidate.hubteam.com/candidateTest/v3/problem/dataset?userKey=4fde4dc81a542310b11d97e41890`
Here’s a sample response with 10 partners:
```json
{
            "partners": [
          {
            "firstName": "Darin",
            "lastName": "Daignault",
            "email": "ddaignault@hubspotpartners.com",
            "country": "United States",
            "availableDates": [
            "2017-05-03",
            "2017-05-06"
            ]
          },
          {
            "firstName": "Crystal",
            "lastName": "Brenna",
            "email": "cbrenna@hubspotpartners.com",
            "country": "Ireland",
            "availableDates": [
            "2017-04-27",
            "2017-04-29",
            "2017-04-30"
            ]
          },
          {
            "firstName": "Janyce",
            "lastName": "Gustison",
            "email": "jgustison@hubspotpartners.com",
            "country": "Spain",
            "availableDates": [
            "2017-04-29",
            "2017-04-30",
            "2017-05-01"
            ]
          },
          {
            "firstName": "Tifany",
            "lastName": "Mozie",
            "email": "tmozie@hubspotpartners.com",
            "country": "Spain",
            "availableDates": [
            "2017-04-28",
            "2017-04-29",
            "2017-05-01",
            "2017-05-04"
            ]
          },
          {
            "firstName": "Temple",
            "lastName": "Affelt",
            "email": "taffelt@hubspotpartners.com",
            "country": "Spain",
            "availableDates": [
            "2017-04-28",
            "2017-04-29",
            "2017-05-02",
            "2017-05-04"
            ]
          },
          {
            "firstName": "Robyn",
            "lastName": "Yarwood",
            "email": "ryarwood@hubspotpartners.com",
            "country": "Spain",
            "availableDates": [
            "2017-04-29",
            "2017-04-30",
            "2017-05-02",
            "2017-05-03"
            ]
          },
          {
            "firstName": "Shirlene",
            "lastName": "Filipponi",
            "email": "sfilipponi@hubspotpartners.com",
            "country": "Spain",
            "availableDates": [
            "2017-04-30",
            "2017-05-01"
            ]
          },
          {
            "firstName": "Oliver",
            "lastName": "Majica",
            "email": "omajica@hubspotpartners.com",
            "country": "Spain",
            "availableDates": [
            "2017-04-28",
            "2017-04-29",
            "2017-05-01",
            "2017-05-03"
            ]
          },
          {
            "firstName": "Wilber",
            "lastName": "Zartman",
            "email": "wzartman@hubspotpartners.com",
            "country": "Spain",
            "availableDates": [
            "2017-04-29",
            "2017-04-30",
            "2017-05-02",
            "2017-05-03"
            ]
          },
          {
            "firstName": "Eugena",
            "lastName": "Auther",
            "email": "eauther@hubspotpartners.com",
            "country": "United States",
            "availableDates": [
            "2017-05-04",
            "2017-05-09"
            ]
          }
            ]
          }
```
POST a JSON body to:
`https://candidate.hubteam.com/candidateTest/v3/problem/result?userKey=4fde4dc81a542310b11d97e41890`
For the list of partners above, the proper API response to send would look like this:
```json
{
            "countries": [
          {
            "attendeeCount": 1,
            "attendees": [
            "cbrenna@hubspotpartners.com"
            ],
            "name": "Ireland",
            "startDate": "2017-04-29"
          },
          {
            "attendeeCount": 0,
            "attendees": [],
            "name": "United States",
            "startDate": null
          },
          {
            "attendeeCount": 3,
            "attendees": [
            "omajica@hubspotpartners.com",
            "taffelt@hubspotpartners.com",
            "tmozie@hubspotpartners.com"
            ],
            "name": "Spain",
            "startDate": "2017-04-28"
          }
            ]
}
```

## API Guidelines
If your answer is correct, the API will return `200 OK`. If the request is malformatted or incorrect, the API will return `400` along with a message indicating if the response is of the wrong structure or incorrect.

If you get a 5xx response, let us know and we’ll help you out.

The candidate.hubteam.com domain is set up with a permissive cross-origin policy, so you can POST to it from any location in a browser if you choose to implement in an in-browser JS solution.

## Evaluation

When you’re done, this page will update with a form to upload your code. We’ll evaluate you based on two things:
* First and foremost, if you complete the project within three hours.
* Next, the time from when you started the assessment to the time you submit a correct solution.
