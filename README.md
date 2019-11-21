# Second Chance 💯 ✔️ 🏆 (Back End Code Base and API Information)

## Table of Contents

- **[Overview](#overview)**<br>
- **[API Endpoints](#api-endpoints)**<br>
- **[Credits](#credits)**<br>

## <a name='overview'></a>Overviews
This database allows Career Coach Users to register, login and create a prison profile. Career coaches can then edit or delete their prison, as well as create, edit and delete employee profiles for their prison that they manage on the Second Chance data base. All users can view prison and employee data. Only career coaches can edit data of anykind.

## ***API Endpoints***

## ***Base URL***
https://prisoner-skills-bw.herokuapp.com/

### ***Employers (endpoints do NOT require login)***
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
prisons GET | /api/users/ | N/A | N/A | Returns an object of all the prisons in the database. |
prison by ID GET | /api/users/:id | N/A | N/A | Returns a single prison profile using the ID in the req.params. |
inmates by prison ID GET | /api/users/:id/inmates | N/A | N/A | Returns all the inmates the database by prison (using the ID in the req.params). |
inmates by ID GET | /api/users/inmates/:id | N/A | N/A | Returns a single inmate profile using the ID in the req.params. |

### ***Authentication (for login)***
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
register POST | /api/auth/register | username, password | N/A | Creates a new user object in the database. Returns the user information. |
login POST | /api/auth/login |  username, password | N/A | Returns a welcome message and the JSON Web Token. |

### ***Users (admin/career coach, all these endpoints require a login)***
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
add a prison POST | /api/users/prison | N/A | ***prisonName, address, phone, city, state, zipcode***, all the above are strings  | Allows an admin to _add_ a prison to the database. |
update a prison PUT | /api/users/:id | Only the fields that need updating (_must send at least 1 field_)| See required  | Allows an admin to _edit_ a prison in the database. |
delete a prison DELETE | /api/users/:id | N/A | N/A | Allows an admin to _delete_ a prison from the database (using req.params). ***Warning!! All inmates MUST be deleted before deleting a prison*** |
add an inmate POST | /api/users/inmates | ***prison_id*** (as a number, no quotation marks), ***available*** (0(false) or 1(true)) | ***inmateFirstName, inmateLastName, prison_id, skillset, age, workExperience, image, available***, all the above are strings  | Allows an admin to _add_ an inmate to the database. |
update an inmate PUT | /api/users/inmates/:id | Only the fields that need updating (_must send at least 1 field_)| See required  | Allows an admin to _edit_ an inmate in the database. |
delete an inmate DELETE | /api/users/inmates/:id | N/A | N/A | Allows an admin to _delete_ an inmate from the database (using req.params). |

## Credits
### Project Manager
Justin Trombley https://github.com/JustinTrombley96 <br>

### User Interface
Maggie Price https://github.com/maggieprice <br>
Rick Ahlgren https://github.com/thericktastic <br>

### Frontend
Jackson Ogles (senior react dev): https://github.com/cjogles <br>
Walter Futch (junior react dev): https://github.com/WalterTheCodeGuy <br>
Sunil Karki (junior react dev): https://github.com/karkisunil1200 <br>

### Backend
Sean Naleid https://github.com/seanaleid <br>
Taylor Hunkler https://github.com/taylorhh5 <br>
