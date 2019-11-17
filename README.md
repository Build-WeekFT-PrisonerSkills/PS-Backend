# Second Chance 💯 ✔️ 🏆 (Back End Code Base and API Information)

## Table of Contents

- **[Overview](#overview)**<br>
- **[API Endpoints](#api-endpoints)**<br>
- **[Credits](#credits)**<br>

## <a name='overview'></a>Overviews
This database allows Career Coach Users to register, login and create a prison profile. Career coaches can then edit or delete their prison, as well as create, edit and delete employee profiles for their prison that they manage on the Second Chance data base. All users can view prison and employee data. Only career coaches can edit data of anykind.

## API Endpoints

### Authentication
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
POST | /api/auth/register | username, password | name, email, organizations, avatarUrl, role | Creates a new user object in the database. |
POST | /api/auth/login |  username, password | N/A | Returns username, JSON Web Token, and the user object. |

### Prisons
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
GET | /api/prisons | N/A | N/A | Returns an object of all the prisons in the database. |
GET | /api/prisons/:organizer | N/A | N/A | Returns a singular event object based on ID. |
POST | /api/prisons | Name, ZIP, Email, Phone | City, State, Image, approved | Allows users to post brand new prisons to the database. |

### Prisons (admin)
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
DELETE | /api/admin/:id | N/A | N/A | Allows admins to delete ANY prison. |
PUT | /api/admin/:id | Name, ZIp, Email, Phone | City, State, Image, approved | Allows admins to edit ANY prison. |

### Users (admin)
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
GET | /api/admin/users | N/A | N/A | Allows an admin to see a list of all the users in the database. |

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
