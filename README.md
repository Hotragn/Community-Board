# Web Development Project 1 - *Community Board for Anime Updates*

Submitted by: **Hotragn Pettugani**

This web app: **A responsive web application built with React that showcases upcoming anime events, conventions, and resources for anime enthusiasts. The board features a collection of cards displaying various anime-related activities including conventions, screenings, workshops, and meetups.**

Time spent: **12** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **There is a unique theme for events or resources relevant to a specific community**
- [x] **At least 10 unique resources or events are displayed in a responsive card format**

The following **optional** features are implemented:

- [x] Buttons or links to a related resources are on each card component
- [x] The site is responsive for both desktop and mobile formats

The following **additional** features are implemented:

* [x] Toggle Button for light and Dark Mode

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='[http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough](https://github.com/Hotragn/Community-Board/blob/main/recording-demo.gif)' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with LiceCap
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes
## Challenges Encountered
During development, several technical challenges were addressed:

- **State Management:**  
  Implementing the dark/light mode toggle required careful state management with localStorage to persist user preferences across sessions.

- **Background Image Implementation:**  
  Adding the Naruto-themed background image presented challenges with proper sizing, positioning, and ensuring text remained readable through appropriate overlays.

- **Dark Mode Flash:**  
  The initial flash of the light theme before dark mode loads was resolved by setting theme variables early in the rendering process.

- **Responsive Design:**  
  Creating a card layout that adapts seamlessly across different device sizes involved using a CSS grid system along with media queries.

- **Component Communication:**  
  Ensuring smooth data flow and rendering between the Board and Card components by effectively passing props.

- **Performance Optimization:**  
  Optimizing image loading to prevent layout shifts and maintain a smooth user experience.

- **Cross-Browser Compatibility:**  
  Testing and adjusting styles to guarantee consistent appearance and functionality across different browsers.


## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
