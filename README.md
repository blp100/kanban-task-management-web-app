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
    - add menu on the header component
        - I faced some text style setting issue with Chakra-Ui, and I find the new attribute apply, which I wrote like this way `apply: "textStyle.BodyL"` to change menu text styles.
            - REF: https://github.com/chakra-ui/chakra-ui/issues/3197
    - fix header styles
