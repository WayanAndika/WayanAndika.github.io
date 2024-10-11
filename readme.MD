# Basic Web Project with HTML, CSS, JS, and Tailwind

## Overview
This is a basic web project built using HTML, CSS, JavaScript, and Tailwind CSS. It utilizes CDN links for fast setup and ease of use. The project is a simple starting point for building responsive web pages quickly and efficiently.

## Features
- Responsive design using Tailwind CSS via CDN
- Simple and modular HTML structure
- JavaScript for interactivity
- Easy to customize and expand

## Technologies Used
- **HTML5**: For the basic structure of the website.
- **CSS3**: Basic styling, integrated with Tailwind CSS via CDN.
- **JavaScript (ES6)**: For client-side interactivity and DOM manipulation.
- **[Tailwind CSS CDN](https://cdn.tailwindcss.com/)**: A utility-first CSS framework for quickly styling components without installation.

## Usage
You can simply open the `index.html` file in your browser after downloading or cloning the project. No need for build tools or installation steps since it uses CDN links.

## Step by Step to build the website
- Build the structure of the website using HTML
- Style the website using Tailwing CSS and if necessary use the custom styles (like the font type; here i use XDPrime in the CSS file)
- It use JSON for the data structure. Also use custom JavaScript for the interactivity using DOM.
- If want to change the primary color of the website, look at this section:
    ```bash
    <script>
        tailwind.config = {
          theme: {
            extend: {
              colors: {
                primary: '#2563EB',
              }
            }
          }
        }
      </script>