# Getting Started Support Widget

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

Create a div with an id="my-widget" and data-email="yoursupport@email.com". You can also pass an optional primary color data-primary_color="colorcode"

```
<div id="my-widget" data-email="yoursupport@email.com"></div>
```

You also need to add this css and javascript file to the buttom of your web page close to the body tag.

```
<link href="https://supportwidget.vercel.app/index.css" rel="stylesheet" />
<script src="https://supportwidget.vercel.app/"></script>
```

### Props

| Prop                 | Required | Type   | Default                              |
| -------------------- | -------- | ------ | ------------------------------------ |
| data-email           | `true`   | string |                                      |
| data-primary_color   | `false`  | string | `#ff7f00`                            |
| data-name            | `false`  | string |                                      |
| data-heading         | `false`  | string | Welcome, You can drop us an email... |
| data-success_message | `false`  | string | Your message was sent successfully.  |
