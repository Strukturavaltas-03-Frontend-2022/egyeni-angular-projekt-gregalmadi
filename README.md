Changes and updates:

|2022.11.18 - ver 1.0

- 50 items generated, edited and added to Firebase realtime databse, with images in storage.
- Added navbar, routing, all neccessary components, filter pipes, models, etc.
- Added responsive card design, filtering options and a pagination component to List page.
- CRUD funtionality added to http service.

|2022.11.21 - ver 1.1

- Clicking on a card edit button navigates the user to the target editor (admin) page and sets up all the input data.
- Clicking on the 'Add new target' button navigates the user to the target editor (admin) with empty input fields.
- Added validation to all input fields.
- Sending post and patch requests succesfully updates database and DOM.
- Admin page is not displayed on the navbar anymore, it can only be reached through edit or create requests.
- Default display mode on List page is 'List all'. Unchecking it enables the pagination component.
- Filter categories now feature dynamically updated counters that show user the amount of items in each category.
- Added button to navbar to navigate between 'Home' and 'List' pages

|2022.11.23 - ver 1.15

- Visual changes: added background, changed color theme slightly all around components
- Added documentation

|2022.11.28 - ver 1.15

- Visual changes: changed navbar toggler background color, changed form submit button color based on validity
- Added new galaxy subtype 'Elliptical Galaxy'
- Fixed issue where leaving the editor without updating database would update data locally.

|2022.11.29 - ver 1.20

- Visual changes: Home component jumbotron slightly adjusted
- Added popup messages to every successful database action (create, update, delete)
- Added new filter option for sorting by catalogue
- Added stats page with some interesting pie chart statistics

|Application documentation:

- This mini listing application features 50 of the most famous / special / exotic and also many of my favourite deep sky objects in the night sky of the northern hemisphere.
- Backend solution is realized with the use of a Firebase realtime database with an additional storage for the card images.
- The application can be initialized through a terminal using the 'ng serve -o' or 'npm run start' command.
- The 'Home' page features a very short introduction with a direct button navigating to the 'List' component.
- Besides the usual menu links, the navbar also has a navigating button in the top right corner, which changes display text and action based on which page the user is currently on.
- The 'List' page has all 50 item cards, each with its unique image and details below. Every card has a delete and edit button in the bottom right corner.
- Each card has an indicator in its top right corner aswell, showing whether a certain target is inside the Milky Way or not.
- Multiple filtering options are available to narrow down the full list, by types, magnitude, name search and a checkbox to only show objects inside of our galaxy or all of them together instead.
- Unchecking the default checked 'List All' button enables a paging component that splits all records into 3 pages of max 20 items.
- The 'Add new target' button navigates the user to an editor window with unique validation for most input fields, and lets user create a new astro target, aswell as add it to the database.
- Deleting an item removes it from the list, and the database aswell.
- Editing an item navigates the user to the same editor window as in the adding segment, except this time all input fields are prefilled with the currently selected target's details, that the user can respec within validation limits. Clicking the save button navigates the user back to the listing page that already reflects the updated data, just like the database.
- All CRUD actions send popup messages to the user on success.
- Stats page features 3 pie charts displaying information about the listed astronomical objects
