# kanban-task-management-web-app

# Frontend Mentor Challenge 6 - Kanban Task Management Web App

This is a solution to the [Kanban task management web app on Frontend Mentor](https://www.frontendmentor.io/challenges/kanban-task-management-web-app-wgQLt-HlbB). 
## Table of contents
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [New Stuff for me](#new-stuff-for-me)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Development Dairy](#development-dairy)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
## Overview
Before tackling this challenge, I intentionally opted for an easier one to take a breather and keep my momentum going. So, this time around, I made a bold decision to dive into the guru level challenge.

I decided to elevate my skills by embarking on the Kanban task management web app, aiming to demonstrate my frontend expertise. However, this undertaking extended over 25 days, nearly a month, ultimately nurturing immense gratitude for this transformative experience.

At the outset, my goal was to become better acquainted with Next.js' latest feature - the APP Router. Moreover, through this challenge, I acquired a understanding of employing dynamic routes, which I want to build a blog by my own. That's really useful experience for me.

Furthermore, navigating JSON data, an area relatively unexplored for me. The exercise of fetching data within the context of frontend development enriched my proficiency.

And... here's the challenge below.

### The challenge
users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, 
- Receive form validations when trying to create/edit boards and tasks
- Mark subtasks as complete and move tasks between columns
- Hide/show the board sidebar
- Toggle the theme between light/dark modes
- **Bonus**: Allow users to drag and drop tasks to change their status and re-order them in a column
- **Bonus**: Keep track of any changes, even after refreshing the browser (localStorage could be used for this if you're not building out a full-stack app)
- **Bonus**: Build this project as a full-stack application


### Links
- Source Code: [Gihub Source](https://github.com/blp100/kanban-task-management-web-app)
- Live Site: [Vercel Link](https://kanban-task-management-web-app-one.vercel.app/)
---
## My process
### Built with
- Setup Next.JS environment
- Import Image and Default Setting from challenge package
- Chakra-UI custom theme properties
- Semantic HTML5 markup
- Desktop-first workflow
- [Chakra-UI](https://chakra-ui.com/) - For UI
- [Framer Motion](https://www.framer.com/motion/)
- [Next.js](https://nextjs.org/) - For React Framework
- `Bonus:` Using `localStorage` and UUID to store and check user data.

### New Stuff for me

- **Customizing Chakra Templates**: Explored customizing Chakra UI templates using the Chakra Templates

- **Next.js App Router**: Faced challenges while trying to integrate the new Next.js App Router feature. Explored the differences between App Router and Pages Router.

- **Dynamic Routing and Layout**: Spent time reading Next.js documentation to understand how to replace code with Dynamic Routes and Layout, and experimented with a trial and error approach.

- **Styling Variants for Components**: Worked on implementing variants for the Switch components and experimented with adjusting component widths.

- **React State Handling**: Learned how to use React state more effectively for managing and updating data.

- **Loading Animation**: Added loading animation to enhance user experience during data loading with Next.JS.

- **Data Fetching and Storage**: Refactored data fetching methods to prioritize local storage. Implemented storing new task data into local storage.

- **UUID Implementation**: Added UUIDs for verifying data and enabling easy data retrieving.

### Continued development
In the end, it's not truly an end.

Upon completing this challenge, I've found myself pondering about my next steps. But as I reflect on this, I realize that there's so much more I can delve into and learn. Perhaps diving into React Three Fiber or exploring other avenues. Anticipation for what the future holds is building up within me.

### Useful resources

- **Next.JS App Router & Pages Router**: The official Next.js documentation provides comprehensive information about App Routing and Pages Routing, explaining how to link and navigate between pages effectively.
  - REF: [Next.js Documentation - Linking and Navigating](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating)

- **Chakra Templates**: A valuable resource for customizing Chakra UI templates to enhance the app's visual appeal and functionality. 
    - REF: [Chakra Templates](https://chakra-templates.dev/)

- **Responsive Images Guide**: An informative guide on implementing responsive images using HTML attributes like `srcset` and `media`. 
    - REF: [Responsive Images Guide](https://www.keycdn.com/blog/responsive-images)

- **CSS Grid System**: A comprehensive guide to CSS Grid, aiding in the creation of dynamic and responsive layouts. 
    - REF: [CSS Grid System](https://css-tricks.com/snippets/css/complete-guide-grid/)

- **Gradient Web Tools**: Web tools for generating CSS gradients, helping to achieve visually pleasing color transitions. 
    - REF: [Gradient Web Tools](https://hypercolor.dev/)
    - REF: [CSS Gradient Generator](https://cssgradient.io/)

- **Chakra-UI Text Style Issue**: A discussion thread addressing text style setting issues in Chakra UI, offering solutions to customize text styles.
    - REF:[Chakra-UI Issue](https://github.com/chakra-ui/chakra-ui/issues/3197)

- **SVG Conversion Tools**: Online tools for converting SVG stroke to fill and manipulating SVG path commands. Useful for resolving SVG-related challenges. 
    - REF: [SVG Conversion Tool 1](https://iconly.io/tools/svg-convert-stroke-to-fill)
    - REF: [SVG Conversion Tool 2](https://thednp.github.io/svg-path-commander/convert.html)

- **URL Parameters Handling**: A detailed explanation of JavaScript functions `encodeURI()` and `decodeURI()` for effectively managing URL parameters. 
    - REF: [URL Parameters Handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI)
    - REF: [URL Parameters Handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI)

- **Firefox Overflow Issue Fix**: A Stack Overflow discussion providing solutions to fix overflow issues in Firefox, particularly regarding missing padding. 
    - REF: [Firefox Overflow Issue Fix](https://stackoverflow.com/questions/29986977/firefox-ignores-padding-when-using-overflowscroll)

- **Preventing Page Refresh on Button Click**: Stack Overflow thread explaining how to prevent page refresh when a button within a form is clicked. 
    - REF: [Preventing Page Refresh](https://stackoverflow.com/questions/7803814/how-can-i-prevent-refresh-of-page-when-button-inside-form-is-clicked)

### Development Dairy

- 07.16 face the color mode setting problem. In the end, It's work after remove <CacheProvider>. Weird...
- 07.17 Find a useful website.
    - customize chakra template
        - REF: https://chakra-templates.dev/
    - Encounter a littile problem with html `<img>` attributte "srcset" and "media", and here is more information 
        - REF: https://www.keycdn.com/blog/responsive-images
- 07.18 
    - Fetch local Json data
        - getStaticProps it's no longer use in APP router
    - Face a lot of problem with new Next.js feature -- App router
    - Enconter fetch local data.json, ruined the half day.
    - In the end, I just import dummy data. And build the sidebar properly. 
- 07.19
    - Built sidebar items and change theme styles
        - At times, I forget to adjust the CSS settings when using different templates, and it ends up consuming an hour of my time. I need to find a solution to fix this issue.
- 07.20
    - Spend more time to familiarizing myself with Chakra UI components
    - Work on implementing variants to the Switch components, but still unsure how to adjust its width.
    - add icons and styles on the sidebar
- 07.21
    - Set hide and show function with Slide Component.
        - finally, know what is useDisclosure hook.
    - Add button theme
    - Add header without logo and functions
- 07.22
    - First, I choose `useRadio` & `useRadioGroup` Chakra-UI hook to implement my navitem, but if I want it work propperly, I have to change the structure. So...
    - I try build my own hook and it works well.
    - So far, I'd like to implement dummydata on the Dashboard. But, after considering for a while, maybe I have to use Dynamic Routes. In other words, I maybe need to change my layout. That's not a small chanllenge. I'll try it on tommorow.
- 07.23
    - Today's progress was a bit slow, as I spent most of my time reading Next.js documentation to figure out how to replace the code into Dynamic Routes and Layout. However, I did manage to experiment and create another repository for trial and error.
- 07.24
    - Successfully revamped the project structure and layout.
    - Integrated the Dynamic Routes feature into the project, enhancing the user experience. 
- 07.25
    - Add tasks container, columns, items.
    - Learned about the JavaScript functions `encodeURI()` & `decodeURI()` for handling URL parameters
        - Considering using `encodeURI()` for setting pathname later.
    - Encountered an overflow issue on Firefox where the padding at the bottom & right went missing. Fixed this problem with the help of the following URL:
        - REF: https://stackoverflow.com/questions/29986977/firefox-ignores-padding-when-using-overflowscroll
- 07.26
    - Add menu on the header component
        - I faced some text style setting issue with Chakra-Ui, and I find the new attribute apply, which I wrote like this way `apply: "textStyle.BodyL"` to change menu text styles.
            - REF: https://github.com/chakra-ui/chakra-ui/issues/3197
    - Fix header styles
- 07.27
    - Add task detail on the Modal
        - Encounter checkbox styles customization issue in Chakra-UI, maybe i have to build another custom checkbox
- 07.28
    - Take a rest  
    - Refactor Modal Component
    - Swapp a select component with a menu component to align with the style documentation.
- 07.29
    - Fix menu styles in modal component
        - Face svg import issue. And, at the first time, I use the svg converter to fix svg not showing propperly problem. But I just did a dumb things, cause the chevron-down icon don't have to add any style on it. But still, it's good to know another tools.
        - REF: https://iconly.io/tools/svg-convert-stroke-to-fill
        - REF: https://thednp.github.io/svg-path-commander/convert.html
    - Resolve checkbox styles issue in modal component
    - Implement task menu in modal component
- 07.30
    - Work on implementing the "Add New Task" modal. 
        - Encounter a strange issue where the `apply: "textStyle.BodyL"` in the theme setting doesn't work as expected. In the end, I end up directly setting the text styles, which might not be the neatest solution, but it worked.
- 07.31
    - Update "Add New Task" method.
        - Add Remove Button
        - encounter some of array problems, thanks MDN always save my life.
    - Update disabled status in header
- 08.01 
    - Encounter auto refresh issue when click on the menu wrap in the `<form>`
        - fix the problem to give button atrribute `type="button"`, cause when any button in the form don't give it the type will be assum `type="submit"`
        - REF: https://stackoverflow.com/questions/7803814/how-can-i-prevent-refresh-of-page-when-button-inside-form-is-clicked
    - Add update subtasks handler
- 08.02
    - Add a error message in title input text when the content is empty.
    - wrap up `<InputGroup>` into a component
        - come across a little bug, forgot to destructuring props.
- 08.03
    - Add error message in all `<InputText>` and make it a individual component
        - Learn how to use set React State more.
    - Add loading animation
    - refactor the data loading change to the static server side.
- 08.04
    - Refactor the data fetching method to load from local storage first. If the local data doesn't exist, fetch from the online server.
    - Implement storing new task data into local storage and ensure proper rendering of components.
- 08.05
    - Attempt to implement the "Edit Task" feature and refactored the task object handler, but encountered a challenge. So I...
    - Add UUIDs to verify the data and enable easy data retrieval.
    - Refactor the function responsible for finding the task object.
- 08.06
    - Implement the `Edit Task` successfully.
    - Streamlined the Add New Task method and data structure for improved readability and easier data retrieval.
- 08.07
    - Add `Delete Task` feature.
    - Add `+ New Column` on the main board
    - Attempt to implement `Edit Board` feature, but it encouter the route issue. Try to figure out where is the problem.
- 08.08
    - Resolved router path issue
    - Rectified incorrect state update in EditBoard component
    - Added functionality for New Board and Delete Board components
- 08.09
    - Making good progress on this challenge (not including bonus challenge). Managed to address several previously unnoticed bugs:
        - Correct header logo and title
        - Resolve task status can't be updated
        - Fix the issue of buttons being activated when the route path has already changed in the sidebar.
        - The mobile design has been refined to meet the specific demands of this challenge.
- 08.10
    - Implement mobile board selector feature
    - Fix subtasks not updating after being checked

## Author
- Website - [Personal site](https://po-cheng-yeh.vercel.app/)
- Frontend Mentor - [@blp100](https://www.frontendmentor.io/profile/blp100)
## Acknowledgments
I am grateful to my friends who have supported me, even though they prefer to remain anonymous.
