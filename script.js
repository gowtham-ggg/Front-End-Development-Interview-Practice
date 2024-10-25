// Questions and correctAnswers stored as an array of objects
const questionData = [
    {
      question: "What is HTML?",
      correctAnswer: "HTML stands for HyperText Markup Language. It is used to structure the content of a webpage using elements or tags to define the structure and semantics."
    },
    {
      question: "What is the purpose of the <!DOCTYPE html> declaration?",
      correctAnswer: "It informs the browser about the version of HTML being used, ensuring proper rendering."
    },
    {
      question: "What are the main sections of an HTML document?",
      correctAnswer: "The main sections are <html>, <head>, and <body>."
    },
    {
      question: "How do you write a comment in HTML?",
      correctAnswer: "Use <!-- to start a comment and --> to end it."
    },
    {
      question: "What is the purpose of the <head> element?",
      correctAnswer: "It contains metadata, links to stylesheets, scripts, and other information that is not displayed directly on the page."
    },
    {
      question: "What is the purpose of the <title> element?",
      correctAnswer: "It sets the title of the webpage, displayed on the browser tab."
    },
    {
      question: "What is the purpose of the <body> element?",
      correctAnswer: "It contains the content of the HTML document that is displayed in the browser."
    },
    {
      question: "How do you create a hyperlink in HTML?",
      correctAnswer: "Use the <a> tag with the href attribute. Example: <a href=\"URL\">Link text</a>"
    },
    {
      question: "What is the difference between an absolute URL and a relative URL?",
      correctAnswer: "An absolute URL includes the full path (e.g., https://www.example.com/page), while a relative URL is relative to the current page’s location (e.g., /page)."
    },
    {
      question: "What is the difference between an element and a tag?",
      correctAnswer: "An element includes the opening tag, content, and closing tag (e.g., <p>content</p>), while a tag is the part inside angle brackets (e.g., <p>)."
    },
    {
      question: "How do you create a paragraph in HTML?",
      correctAnswer: "Use the <p> element. It is a block-level element that automatically adds some space above and below the text."
    },
    {
      question: "How do you create a line break in HTML?",
      correctAnswer: "Use the <br> element to insert a line break within the text."
    },
    {
      question: "How do you make text bold in HTML?",
      correctAnswer: "Use the <strong> element for bold text, which conveys strong importance."
    },
    {
      question: "How do you make text italic in HTML?",
      correctAnswer: "Use the <em> element to emphasize text."
    },
    {
      question: "How do you create a heading in HTML?",
      correctAnswer: "Use the <h1> to <h6> elements to define headings, with <h1> being the highest level and <h6> the lowest."
    },
    {
      question: "What is the <blockquote> element used for?",
      correctAnswer: "It defines a section that is quoted from another source and is typically displayed as an indented block of text."
    },
    {
      question: "How do you create a horizontal line in HTML?",
      correctAnswer: "Use the <hr> tag to insert a horizontal rule or divider."
    },
    {
      question: "What is the <pre> element used for?",
      correctAnswer: "The <pre> element defines preformatted text with preserved spaces and line breaks."
    },
    {
      question: "How do you create superscript and subscript text in HTML?",
      correctAnswer: "Use the <sup> tag for superscript and the <sub> tag for subscript text."
    },
    {
      question: "How many levels of headings are there in HTML?",
      correctAnswer: "There are six levels, from <h1> to <h6>."
    },
    {
      question: "How do you create an unordered list in HTML?",
      correctAnswer: "Use the <ul> element with <li> elements for each item."
    },
    {
      question: "How do you create an ordered list in HTML?",
      correctAnswer: "Use the <ol> element with <li> elements for each item."
    },
    {
      question: "How do you create a list item in HTML?",
      correctAnswer: "Use the <li> element inside <ul> or <ol> to define each list item."
    },
    {
      question: "What is the difference between the <ul> and <ol> elements?",
      correctAnswer: "<ul> creates a bulleted list, while <ol> creates a numbered list."
    },
    {
      question: "How do you create a nested list in HTML?",
      correctAnswer: "Place a <ul> or <ol> inside a <li> of another list."
    },
    {
      question: "How do you create an anchor link that jumps to a specific section within the same page?",
      correctAnswer: "Use the href attribute with a # followed by the id of the target section."
    },
    {
      question: "How do you open a link in a new tab or window?",
      correctAnswer: "Use the target=\"_blank\" attribute in the anchor tag."
    },
    {
      question: "What is the purpose of the target attribute in an anchor tag?",
      correctAnswer: "It specifies where to open the linked document, such as _blank for a new tab/window."
    },
    {
      question: "How do you link to an email address in HTML?",
      correctAnswer: "Use the mailto: protocol in the href attribute."
    },
    {
      question: "How do you create a navigation menu in HTML?",
      correctAnswer: "Use a <nav> element containing an unordered list (<ul>) with <li> and <a> tags for each menu link."
    },
    {
      question: "How do you embed an image in an HTML page?",
      correctAnswer: "Use the <img> tag with the src attribute for the image path and the alt attribute for alternative text."
    },
    {
      question: "What is the purpose of the alt attribute in an image tag?",
      correctAnswer: "It provides alternative text for the image, aiding accessibility and appearing when the image cannot be loaded."
    },
    {
      question: "How do you make an image a clickable link?",
      correctAnswer: "Wrap the <img> tag inside an <a> tag."
    },
    {
      question: "What is the difference between inline and block-level elements?",
      correctAnswer: "Inline elements don't start on a new line and only take up as much width as necessary, while block-level elements start on a new line and take up the full width available."
    },
    {
      question: "What is the difference between semantic and non-semantic HTML elements?",
      correctAnswer: "Semantic elements describe their meaning in a human- and machine-readable way, like <header> and <article>, while non-semantic elements do not, like <div> and <span>."
    },
    {
      question: "How do you create a table in HTML?",
      correctAnswer: "Use the <table> tag with <thead>, <tbody>, and optionally <tfoot> for structuring the header, body, and footer."
    },
    {
      question: "How do you create a table row in HTML?",
      correctAnswer: "Use the <tr> tag to define a table row containing <td> and <th> cells."
    },
    {
      question: "How do you create a table cell in HTML?",
      correctAnswer: "Use the <td> tag for a data cell and the <th> tag for a header cell."
    },
    {
      question: "What is the purpose of the <thead>, <tbody>, and <tfoot> elements?",
      correctAnswer: "<thead> groups the header, <tbody> groups the body, and <tfoot> groups the footer content of a table."
    },
    {
      question: "How do you merge cells in a table?",
      correctAnswer: "Use the colspan attribute to merge cells horizontally and the rowspan attribute to merge cells vertically."
    },
      {
        question: "What is semantic HTML?",
        correctAnswer: "Semantic HTML refers to using HTML tags that clearly describe their meaning in a human- and machine-readable way. These tags convey the structure of the content rather than just its appearance."
      },
      {
        question: "Why is semantic HTML important?",
        correctAnswer: "Semantic HTML enhances accessibility, SEO, and maintainability. It helps screen readers and search engines understand the content better."
      },
      {
        question: "What is the <article> element used for?",
        correctAnswer: "<article> is used to define an independent, self-contained piece of content, such as blog posts, articles, or news items."
      },
      {
        question: "What is the <section> element used for?",
        correctAnswer: "<section> defines a thematic grouping of content, typically with a heading. It is used to organize content into meaningful sections."
      },
      {
        question: "What is the <nav> element used for?",
        correctAnswer: "<nav> represents a section of navigation links, such as menus or tables of contents."
      },
      {
        question: "What is the <aside> element used for?",
        correctAnswer: "<aside> is used for content that is tangentially related to the main content, such as sidebars or pull quotes."
      },
      {
        question: "What is the <header> element used for?",
        correctAnswer: "<header> typically contains introductory content or elements at the top of a page, such as headings, logos, and navigation links."
      },
      {
        question: "What is the <footer> element used for?",
        correctAnswer: "<footer> is used to contain information that appears at the bottom of a webpage, like copyright notices or contact information."
      },
      {
        question: "What is the <main> element used for?",
        correctAnswer: "<main> specifies the main content of a webpage, excluding repetitive elements like navigation menus."
      },
      {
        question: "What are the <figure> and <figcaption> elements used for?",
        correctAnswer: "<figure> is used to encapsulate media like images, and <figcaption> provides a caption or description for that media."
      },
      {
        question: "How do you embed a video in HTML?",
        correctAnswer: "Use the <video> element with <source> tags for different formats and the controls attribute for playback options."
      },
      {
        question: "How do you embed an audio file in HTML?",
        correctAnswer: "Use the <audio> element with <source> tags for different formats and the controls attribute to enable playback controls."
      },
      {
        question: "What is the purpose of the <source> element in multimedia?",
        correctAnswer: "<source> specifies multiple media resources for <audio> and <video>, enabling compatibility across different browsers."
      },
      {
        question: "How do you embed a YouTube video in HTML?",
        correctAnswer: "Use an <iframe> element with the YouTube embed URL, replacing VIDEO_ID with the specific video ID."
      },
      {
        question: "What is the <canvas> element used for?",
        correctAnswer: "The <canvas> element is used to draw graphics, animations, or other visuals dynamically using JavaScript."
      },
      {
        question: "What new features did HTML5 introduce?",
        correctAnswer: "HTML5 introduced new semantic elements (<header>, <footer>, <article>), multimedia support (<audio>, <video>), form enhancements, the <canvas> element, local storage, and the Geolocation API."
      },
      {
        question: "How do you create a date input field in HTML5?",
        correctAnswer: "Use <input type=\"date\"> to create a date input field in HTML5."
      },
      {
        question: "What is the <datalist> element used for?",
        correctAnswer: "The <datalist> element provides a list of predefined options for an <input> element, often used for autocomplete functionality."
      },
      {
        question: "What is the <output> element used for?",
        correctAnswer: "<output> displays the result of a calculation or user action, commonly within a form."
      },
      {
        question: "What is the <progress> element used for?",
        correctAnswer: "<progress> represents the completion progress of a task, like a download, with value and max attributes for visual representation."
      },
      {
        question: "What are attributes in HTML?",
        correctAnswer: "Attributes provide additional information about HTML elements, always in the opening tag and in name/value pairs (e.g., name=\"value\")."
      },
      {
        question: "How do you specify an attribute in an HTML tag?",
        correctAnswer: "Include it in the opening tag with a name, equals sign, and value in quotes (e.g., <p class=\"example\">)."
      },
      {
        question: "What is the purpose of the id attribute?",
        correctAnswer: "The id attribute uniquely identifies an HTML element and can be used for CSS styling, JavaScript manipulation, and anchor links."
      },
      {
        question: "What is the purpose of the class attribute?",
        correctAnswer: "The class attribute assigns one or more class names to an HTML element, useful for applying CSS styles or selecting elements in JavaScript."
      },
      {
        question: "What is the purpose of the style attribute?",
        correctAnswer: "The style attribute applies inline CSS directly to an HTML element, affecting its appearance."
      },
      {
        question: "What is the purpose of the data-* attribute?",
        correctAnswer: "The data-* attribute stores custom data for HTML elements, which can be accessed in JavaScript for processing."
      },
      {
        question: "How do you specify language in an HTML document?",
        correctAnswer: "Use the lang attribute in the <html> tag (e.g., <html lang=\"en\"> for English)."
      },
      {
        question: "What is the purpose of the tabindex attribute?",
        correctAnswer: "The tabindex attribute specifies the tab order of elements, helping users navigate using the keyboard."
      },
      {
        question: "How do you create tooltips in HTML?",
        correctAnswer: "Use the title attribute to display tooltips when the user hovers over an element (e.g., <p title=\"Tooltip text\">)."
      },
      {
        question: "What are void elements in HTML?",
        correctAnswer: "Void elements are HTML elements that do not have a closing tag, like <br>, <img>, <hr>, and <input>."
      },
      {
        question: "What is the DOM in HTML?",
        correctAnswer: "The Document Object Model (DOM) is a programming interface that represents HTML documents as a tree structure of nodes."
      },
      {
        question: "What is the purpose of meta tags in HTML?",
        correctAnswer: "Meta tags provide metadata about the webpage, such as description, author, and viewport settings for SEO and device compatibility."
      },
      {
        question: "What is the difference between the <meta charset=\"UTF-8\"> and <meta charset=\"ISO-8859-1\"> attributes?",
        correctAnswer: "<meta charset=\"UTF-8\"> supports a wider range of characters (Unicode), while <meta charset=\"ISO-8859-1\"> is limited to Western characters."
      },
      {
        question: "What is the viewport meta tag used for?",
        correctAnswer: "The viewport meta tag controls layout on mobile devices, enabling responsive design with attributes like width=device-width and initial-scale."
      },
      {
        question: "What is responsive web design?",
        correctAnswer: "Responsive web design makes a webpage adapt to different screen sizes and orientations using fluid grids, flexible images, and media queries."
      },
      {
        question: "What are media queries in CSS?",
        correctAnswer: "Media queries are used to apply CSS based on conditions like screen width, allowing for responsive designs across devices."
      },
      {
        question: "What is the difference between inline, internal, and external CSS?",
        correctAnswer: "Inline CSS applies styles directly within an element's style attribute, internal CSS uses a <style> tag in the <head>, and external CSS links to a .css file."
      },
      {
        question: "How do you link a CSS file to an HTML document?",
        correctAnswer: "Use the <link> element in the <head> section with rel=\"stylesheet\" and href attributes to specify the CSS file."
      },
      {
        question: "What is the difference between the <script> and <noscript> tags?",
        correctAnswer: "<script> is used to embed JavaScript, while <noscript> displays content if JavaScript is disabled or unsupported."
      },
      {
        question: "How do you add JavaScript to an HTML document?",
        correctAnswer: "Use the <script> tag in the <head> or <body>, or link to an external JavaScript file with the src attribute."
      },
      {
        question: "What is the defer attribute in the <script> tag?",
        correctAnswer: "The defer attribute delays script execution until the HTML document has been fully parsed."
      },
      {
        question: "What is the async attribute in the <script> tag?",
        correctAnswer: "The async attribute allows the script to execute asynchronously, without blocking HTML parsing."
      },
      {
        question: "What is an HTML validator?",
        correctAnswer: "An HTML validator checks HTML code for syntax errors and best practices, ensuring standards compliance."
      },
      {
        question: "How do you use an HTML validator?",
        correctAnswer: "Visit the W3C HTML Validator website, paste your HTML code or URL, and click validate to check for errors."
      },
      {
        question: "What is ARIA in HTML?",
        correctAnswer: "ARIA (Accessible Rich Internet Applications) provides attributes that enhance accessibility for people with disabilities."
      },
      {
        question: "What is the role attribute in HTML?",
        correctAnswer: "The role attribute defines the purpose of an element for accessibility, aiding screen readers in interpreting content."
      },
      {
        question: "How do you create a favicon for a webpage?",
        correctAnswer: "Link to a 16x16 or 32x32 icon file in the <head> section using <link rel=\"icon\" href=\"path/to/icon\">."
      }
    
  ];
  

// Function to dynamically generate question containers
function generateQuestions() {
  const container = document.getElementById('questions-container');

  questionData.forEach((item, index) => {
    const questionNumber = document.createElement('h3');
    questionNumber.innerText = `Question ${index + 1}:`;

    const questionContainer = document.createElement('div');
    questionContainer.className = 'question-container';

    const questionText = document.createElement('p');
    questionText.innerText = item.question;

    const textarea = document.createElement('textarea');
    textarea.id = `userAnswer${index + 1}`;
    textarea.rows = 6;
    textarea.placeholder = "Write your answer here...";

    const submitButton = document.createElement('button');
    submitButton.innerText = "Submit answer";
    submitButton.onclick = () => checkAnswer(index + 1);

    const showAnswerButton = document.createElement('button');
    showAnswerButton.className = "show-answer-button";
    showAnswerButton.innerText = "Show Correct Answer";
    showAnswerButton.onclick = () => showCorrectAnswer(index + 1);

    const result = document.createElement('p');
    result.className = "result";
    result.id = `result${index + 1}`;

    const correctAnswer = document.createElement('p');
    correctAnswer.className = "correct-answer";
    correctAnswer.id = `correctAnswer${index + 1}`;
    correctAnswer.style.display = "none";

    questionContainer.appendChild(questionNumber);
    questionContainer.appendChild(questionText);
    questionContainer.appendChild(textarea);
    questionContainer.appendChild(submitButton);
    questionContainer.appendChild(showAnswerButton);
    questionContainer.appendChild(result);
    questionContainer.appendChild(correctAnswer);

    container.appendChild(questionContainer);
  });
}

// Call the function to generate the questions on page load
generateQuestions();

// Calculate Levenshtein distance (edit distance)
function editDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  const costs = [];
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0) {
        costs[j] = j;
      } else {
        if (j > 0) {
          let newValue = costs[j - 1];
          if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          }
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) {
      costs[s2.length] = lastValue;
    }
  }
  return costs[s2.length];
}

// Calculate similarity between two answers
function similarity(s1, s2) {
  let longer = s1.length > s2.length ? s1 : s2;
  let shorter = s1.length > s2.length ? s2 : s1;
  let longerLength = longer.length;
  if (longerLength === 0) {
    return 1.0;
  }
  return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

// Function to check the user's answer
function checkAnswer(questionId) {
  let userAnswer = document.getElementById(`userAnswer${questionId}`).value.trim();
  let correctAnswer = questionData[questionId - 1].correctAnswer;

  if (userAnswer === "") {
    document.getElementById(`result${questionId}`).innerText = "Please provide an answer.";
    return;
  }

  let matchPercentage = similarity(userAnswer, correctAnswer) * 100;

  let resultText = matchPercentage >= 70
    ? `Good job! Your answer matches ${matchPercentage.toFixed(2)}% with the expected answer.`
    : `Keep trying. Your answer only matches ${matchPercentage.toFixed(2)}%.`;

  document.getElementById(`result${questionId}`).innerText = resultText;
}

// Function to show the correct answer
function showCorrectAnswer(questionId) {
  let correctAnswer = questionData[questionId - 1].correctAnswer;
  document.getElementById(`correctAnswer${questionId}`).innerText = `Correct Answer: ${correctAnswer}`;
  document.getElementById(`correctAnswer${questionId}`).style.display = "block";
}
