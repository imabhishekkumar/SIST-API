# SIST API
API to fetch data from Sathyabama website using webscraping.

## How to use

Base URL : `https://sist-api.herokuapp.com`

## Endpoints [GET]

| Endpoint    | Response                                                                                                                                                                                                                         |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/latestNews` |  `[ { "id": 0,          "headline" :   "Sample headline 1." ,           "date" :   "Day DD Month YYYY"       },       { "id": 1,          "headline" :   "Sample headline 2." ,           "date" :   "Day DD Month YYYY"       }  ]` |
|      `/eventNews`       |    To be added                                                                                                                                                                                                                              |
|      `/sportNews`       |      `[ { "id": 0,          "headline" :   "Sample headline 1." ,           "time" :   "Day DD Month YYYY"       },       { "id": 1,          "headline" :   "Sample headline 2." ,           "time" :   "Day DD Month YYYY"       }  ]`                                                                                                                                                                                                                            |
|      `/placementRecords`       |            `[ { "id" : 0, "year" : "Academic year", "records" : { "registered" : "Total students registered", "eligible" : "Total eligible students", "placed" : "Placed students", "placedPercentage" : "Placement percentage", "comapanies" : "Companies offered placements", "avaragePackege" : "Average package" } } ] `                                                                                                                                                                                                                       |


