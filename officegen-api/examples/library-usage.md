# Document Conversion Solutions Library - Usage Guide

## Introduction

The Document Conversion Solutions Library is a powerful Node.js module designed for creating `.docx` documents from structured JSON inputs. Leveraging the `officegen` library, it facilitates document generation with customizable styles and elements like text, titles, subtitles, lists, bullets, and footnotes.

This guide details the setup, installation, and usage process of this NPM package within your projects.

## Prerequisites

Ensure the following are installed before proceeding:
- Node.js (v12.x or higher recommended)
- npm (comes bundled with Node.js)

## Installation

This package is available on the NPM registry. To install it, simply run the following command in your project's root directory:

```bash
npm install @arudaev/document-conversion-solutions --save
```

## Setting Up Your Project

1. **Initialize a new Node.js project** (if not already done) by executing `npm init` in your project directory and completing the setup prompts.

2. **Install the Document Conversion Solutions Library** with the command mentioned in the Installation section.

## Usage

Import the library into your Node.js application, configure your document structure and styles in JSON, and invoke the library function to create a document.

### Basic Example

Here's a simple example demonstrating the library usage:

```javascript
const documentLibrary = require('@arudaev/document-conversion-solutions');

// Define your document structure and styles
const inputJson = {
  "elements": [
    { "type": "title", "text": "Document Title" },
    { "type": "subtitle", "text": "Subtitle Here" },
    { "type": "paragraph", "text": "This is a simple paragraph." },
    {
      "type": "list",
      "items": ["First item", "Second item", "Third item"]
    }
  ],
  "styles": {
    "fontFamily": {
      "title": "Arial",
      "body": "Calibri"
    },
    "textColor": "#000000"
  }
};

// Create the document
documentLibrary.createDocumentWithStructure(inputJson)
  .then((path) => console.log(`Document created at: ${path}`))
  .catch((error) => console.error('Error creating document:', error));
```

### Error Handling

It's crucial to implement error handling in your application to manage any potential issues, such as invalid inputs or problems during document generation.

## Advanced Usage

For creating more complex documents, consult the `officegen` documentation to familiarize yourself with the full spectrum of supported elements and styles. The Document Conversion Solutions Library accommodates these configurations through the `inputJson` structure.

## Contributing

Contributions are highly appreciated! If you have improvement suggestions or encounter any issues, please submit them via the project's issue tracker.

## License

This library is distributed under the [MIT License](https://opensource.org/licenses/MIT). Ensure you review the license terms before utilizing or contributing to the project.