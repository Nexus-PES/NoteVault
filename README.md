# Note Vault


[Design File](https://www.figma.com/file/ym8CNt559tAIpseV4m6Ret/NoteVault?type=design&node-id=3%3A38&mode=design&t=xuc0UP490ZSuRSHq-1)

[![wakatime](https://wakatime.com/badge/user/b486c624-54cb-4d61-9d41-06e9e496bcfe/project/bbfba2d4-b7d4-4057-9587-32cee31a3aa2.svg)](https://wakatime.com/badge/user/b486c624-54cb-4d61-9d41-06e9e496bcfe/project/bbfba2d4-b7d4-4057-9587-32cee31a3aa2)

Pages
- Homepage
- User Notes Page
- Notes

Prefered file structure

```
app
	page.jsx
	layout.jsx
	(notes)
		layout.jsx
		[name]
			page.jsx
			[note]
				page.jsx
```


### Pages

#### Homepage

- **6** sections - *hero, title, features, comments, faq, footer*.
- Here every content is static thus the data is taken from the `data.js`.
- Components used: **Hero**, **Features**, **Comments**, **FAQ**, **Footer**

>**Sidebar** 
> Component is there in the route group.
> Has 3 parts - **logo**, **user profile pic**(hardcoded), **options**(open and close sidebar).
>  When the logo is clicked it directs the user to the `homepage`.
>  When the user pic is clicked it directs the users to the `user homepage`.
>  When the 1st option is clicked it should open and close the sidebar, when opened it should display all the notes available.
  
#### User Homepage
- **2** section - *Greetings, Tabs*
- In the Tabs component 3 things are there - title, created on - last modified on, 3 dots(to delete the note). When the tab is clicked it directs the user to that note page.
- There should be on `+ New` tab that can create a new note when clicked.

#### Notes

- The notes page has a few main components - title, notes, footer, buttons
- The footer counts the number of words in the notes, the day it was created, the day it was last modified, and the status.
- The data should only be saved when the user clicks the save button. Then the status should change from `pending` to `saved`. *you may add other features*
- There should also be a feature to tag. If the user types something that starts with **#** and has some character without space then it should style that particular text with different stylings. Link `#notemaking`
- In the buttons tab there is also a mic. Clicking on the mic should convert your speech to text and also show `recording` text in the footer button. *figma might help here*
