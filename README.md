# Project REST-Rant

# REST-RANT

### SUMMARY


REST RANT is an app where users can review restaurants



### User Stories & Wireframes

As a standard user, I need these features
- Page navigation
- Add new locations
- Delete locations
- Leave a review
  - Write a comment
  - Give a rating
  - Add pictures
  - Leave a username or id, or remain anonymous

In order to 
- Edit comments & reviews
- Mark whether the comment is a rant or not
- Track the comments and reviews

## LANGUAGES AND TOOLS

```
Express | Node.Js
CSS
React | JSX
Dependencies - express-react
```

### Routes

| Method | Path                     | Purpose                                                                       |
| ------ | ------------------------ | ----------------------------------------------------------------------------- |
| GET    | /                        | The Homes Page                                                                |
| GET    | /places                  | Index page listing all places                                                 |
| GET    | /places/new              | New from for a place                                                          |
| POST   | /places                  | Create a new place                                                            |
| GET    | /places/:id              | Show one place in detail(Associated rants, new rant form, delete rant button) |
| GET    | /places/:id/edit         | Edit form for a pace                                                          |
| PUT    | /places/:id              | Make changes to existing place                                                |
| DELETE | /places/:id              | Delete a place                                                                |
| POST   | /places/:id/rant         | Add rant to a place                                                           |
| DELETE | /places/:id/rant/:rantId | Delete a rant                                                                 |

## Database

### Places

| Field   | Type      |
| ------- | --------- |
| \_id    | Object ID |
| name    | String    |
| city    | String    |
| state   | String    |
| cusines | String    |
| pic     | String    |

### Rants

| Field    | Type                  |
| -------- | --------------------- |
| \_id     | Object ID             |
| place_id | ref(places) Object_id |
| rant     | Boolean               |
| ranting  | Number                |
| comment  | Sting                 |
| reviewer | String                |

## CSS

### Color Scheme

|        Colors         |
|       --------        |
| DarkSlateGray #2F4F4F |
| Aquamarine    #7FFFD4 |
| Cornsilk      #FFF8DC |