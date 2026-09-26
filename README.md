# RPUK Phone Test Site

<p align="center">
  <a href="https://github.com/KeyErrorFinn/rpuk-phone-test-site/commits/main"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/KeyErrorFinn/rpuk-phone-test-site" /></a>
  <a href="https://github.com/KeyErrorFinn/rpuk-phone-test-site/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/KeyErrorFinn/rpuk-phone-test-site" /></a>
</p>

<p align="center">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff" />
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff" />
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000" />
  <img alt="Responsive testing" src="https://img.shields.io/badge/Responsive%20testing-8B5CF6?logoColor=fff" />
</p>

A small static page for testing browser/device information and responsive behaviour in an RPUK phone-style environment.

## How it works

- `index.html` provides the device-information layout.
- `script.js` reads browser viewport/device values and displays them on the page.
- `style.css` controls the presentation.
- `ethan-face.png` is a page asset.

There is no build step or backend.

## Running locally

Open `index.html` directly, or serve the directory so it behaves like a normal website:

```bash
python -m http.server 8000
```

Visit `http://localhost:8000` and resize the window or open the page on different devices to compare the reported values.

## Deployment

The repository can be hosted by any static host, including GitHub Pages. Only publish it if the included image and any displayed diagnostic information are appropriate for the intended audience.

## Project flow

```mermaid
flowchart LR
    Browser["Browser/device"] --> Script["script.js"]
    Script --> Values["Viewport/device values"]
    Values --> Page["Diagnostic page"]
```
