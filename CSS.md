(Due to technical issues, the search service is temporarily unavailable.)

### **Introduction to CSS**

CSS (Cascading Style Sheets) styles HTML elements to control their appearance. It separates content (HTML) from presentation (styling).

---

### **1. How to Add CSS**

CSS can be added in three ways:

- **Inline CSS**: Directly in an HTML tag using the `style` attribute.
  ```html
  <p style="color: red;">This is red text.</p>
  ```
- **Internal CSS**: Inside a `<style>` tag in the HTML `<head>`.
  ```html
  <head>
    <style>
      p {
        color: blue;
      }
    </style>
  </head>
  ```
- **External CSS**: Linked via an external `.css` file (best practice).
  ```html
  <head>
    <link rel="stylesheet" href="styles.css" />
  </head>
  ```

---

### **2. CSS Syntax**

A CSS rule has a **selector** and a **declaration block**:

```css
selector {
  property: value;
}
```

**Example**:

```css
h1 {
  color: #2c3e50;
  font-size: 24px;
}
```

- **Selector**: `h1` (targets all `<h1>` elements).
- **Declarations**: `color: #2c3e50;` (text color) and `font-size: 24px;` (text size).

---

### **3. Selectors**

#### **a. Element Selector**

Targets HTML elements by tag name:

```css
p {
  font-family: Arial;
}
```

Styles all `<p>` elements.

#### **b. Class Selector**

Targets elements with a specific class (`.class-name`):

```css
.highlight {
  background-color: yellow;
}
```

```html
<p class="highlight">Highlighted text.</p>
```

#### **c. ID Selector**

Targets a unique element with an ID (`#id-name`):

```css
#header {
  text-align: center;
}
```

```html
<div id="header">This is a header.</div>
```

#### **d. Grouping Selectors**

Combine selectors to apply the same styles:

```css
h1,
h2,
h3 {
  color: purple;
}
```

---

### **4. Common CSS Properties**

#### **Text Styling**

- `color`: Text color (`red`, `#ff0000`, `rgb(255,0,0)`).
- `font-family`: Font type (`Arial`, `Helvetica`).
- `font-size`: Text size (`16px`, `1.5em`).

#### **Box Model**

Every element is a "box" with:

- **Content**: Actual text/image.
- **Padding**: Space around the content.
- **Border**: Line around padding.
- **Margin**: Space outside the border.

**Example**:

```css
div {
  width: 300px;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
}
```

![Box Model](https://www.w3schools.com/css/box-model.png)

#### **Background & Borders**

- `background-color`: Sets element background.
- `border-radius`: Rounds corners (`10px`).

```css
.button {
  background-color: #3498db;
  border-radius: 5px;
}
```

---

### **5. Layout Basics**

#### **Display Property**

- `block`: Takes full width (e.g., `<div>`, `<h1>`).
- `inline`: Takes only needed width (e.g., `<span>`, `<a>`).
- `inline-block`: Mix of block and inline.

```css
.inline-block {
  display: inline-block;
  width: 100px;
}
```

#### **Flexbox**

Arranges elements in rows/columns:

```css
.container {
  display: flex;
  justify-content: space-between;
}
```

```html
<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

---

### **6. Responsive Design**

Use **media queries** to adjust styles for screen sizes:

```css
@media (max-width: 600px) {
  body {
    font-size: 14px;
  }
}
```

---

### **7. Example: Styling a Page**

**HTML**:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1 id="title">Hello World</h1>
    <p class="text">Welcome to CSS!</p>
    <div class="box">A box with padding and margin.</div>
  </body>
</html>
```

**CSS (styles.css)**:

```css
#title {
  color: #2c3e50;
  text-align: center;
}

.text {
  font-family: Arial;
  line-height: 1.5;
}

.box {
  background-color: #ecf0f1;
  padding: 20px;
  margin: 10px;
  border: 1px solid #bdc3c7;
}
```

---

### **Key Takeaways**

1. CSS styles HTML elements using **selectors** and **properties**.
2. Use **classes** for reusable styles and **IDs** for unique elements.
3. The **box model** (content, padding, border, margin) controls spacing.
4. **Flexbox** simplifies layout design.
5. **Media queries** make designs responsive.

Practice by experimenting with these concepts in tools like [CodePen](https://codepen.io/)!
