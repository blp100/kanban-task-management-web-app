# kanban-task-management-web-app

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
    - So far, I'd like to implement dummydata on the Dashboard. But, after considering for a while, maybe I have to use Dynamic Router. In other words, I maybe need to change my layout. That's not a small chanllenge. I'll try it on tommorow.
- 07.23
    - Today's progress was a bit slow, as I spent most of my time reading Next.js documentation to figure out how to replace the code into Dynamic Router and Layout. However, I did manage to experiment and create another repository for trial and error.
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