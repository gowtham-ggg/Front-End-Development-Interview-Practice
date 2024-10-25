// Questions and correctAnswers stored as an array of objects
const questionData = [
        {
          question: "What does CSS stand for?",
          correctAnswer: "CSS stands for Cascading Style Sheets."
        },
        {
          question: "What is the purpose of CSS?",
          correctAnswer: "CSS is used to style and format the appearance of web pages written in HTML and XML."
        },
        {
          question: "How do you link a CSS file to an HTML document?",
          correctAnswer: "Use the <link> element in the <head> section with rel=\"stylesheet\" and href attributes."
        },
        {
          question: "What is the syntax of a CSS rule?",
          correctAnswer: "A CSS rule consists of a selector and a declaration block."
        },
        {
          question: "What are the different ways to apply CSS to a web page?",
          correctAnswer: "CSS can be applied via inline styles, internal stylesheets, and external stylesheets."
        },
        {
          question: "What is an inline style?",
          correctAnswer: "Inline styles are CSS applied directly to an HTML element using the style attribute."
        },
        {
          question: "What is an internal stylesheet?",
          correctAnswer: "An internal stylesheet is CSS written within a <style> element in the <head> section of an HTML document."
        },
        {
          question: "What is an external stylesheet?",
          correctAnswer: "An external stylesheet is a separate CSS file linked to an HTML document using the <link> element."
        },
        {
          question: "How do you apply multiple styles to a single element?",
          correctAnswer: "Multiple styles can be applied within the style attribute or in a CSS rule by separating declarations with semicolons."
        },
        {
          question: "What is the difference between a class selector and an ID selector?",
          correctAnswer: "Class selectors are defined with a dot (.) and can be applied to multiple elements, while ID selectors use a hash (#) and are unique to one element."
        },
        {
          question: "What is a CSS selector?",
          correctAnswer: "A CSS selector is a pattern used to select and style HTML elements based on types, IDs, classes, attributes, or relationships."
        },
        {
          question: "What are the types of CSS Selectors?",
          correctAnswer: "CSS selectors include Universal, Type, Class, ID, Attribute, Pseudo-classes, Pseudo-elements, Descendant, Child, Adjacent Sibling, and General Sibling."
        },
        {
          question: "What is a pseudo-class?",
          correctAnswer: "A pseudo-class styles an element based on its state or position without needing extra HTML code."
        },
        {
          question: "What is a pseudo-element?",
          correctAnswer: "A pseudo-element styles specific parts of an element's content, written with a double colon (::)."
        },
        {
          question: "What is the CSS box model?",
          correctAnswer: "The CSS box model describes the rectangular boxes generated for elements, including content, padding, border, and margin."
        },
        {
          question: "What are the components of the box model?",
          correctAnswer: "The box model consists of content, padding, border, and margin."
        },
        {
          question: "What is the difference between margin and padding?",
          correctAnswer: "Margin is outside the element's border, creating space between elements, while padding is inside the border, creating space between content and the border."
        },
        {
          question: "How do you center an element horizontally?",
          correctAnswer: "To center a block-level element horizontally, use margin: auto."
        },
        {
          question: "How do you center an element vertically?",
          correctAnswer: "To center an element vertically, use Flexbox."
        },
        {
          question: "What is the box-sizing property?",
          correctAnswer: "The box-sizing property defines how an element's total width and height are calculated."
        },
        {
          question: "How do you create a rounded border?",
          correctAnswer: "Use the border-radius property."
        },
        {
          question: "What is the position property in CSS?",
          correctAnswer: "The position property controls how an element is positioned in the document, with values such as static, relative, absolute, fixed, and sticky."
        },
        {
          question: "What is the float property?",
          correctAnswer: "The float property positions an element to the left or right, allowing text and inline elements to wrap around it."
        },
        {
          question: "How do you clear floats in CSS?",
          correctAnswer: "Use the clear property to clear floats and ensure that elements below are not affected by floated elements."
        },
        {
          question: "What are the different values of the display property?",
          correctAnswer: "Common values are block, inline, inline-block, flex, and grid."
        },
        {
          question: "How do you create a flexbox layout?",
          correctAnswer: "Set display: flex on the parent container and use flex properties on child elements."
        },
        {
          question: "What is the flex property?",
          correctAnswer: "The flex property is shorthand for flex-grow, flex-shrink, and flex-basis."
        },
        {
          question: "How do you create a grid layout in CSS?",
          correctAnswer: "Use display: grid on the container, then define columns and rows with grid-template-columns and grid-template-rows."
        },
        {
          question: "How do you change the font of an element?",
          correctAnswer: "Use the font-family property in CSS."
        },
        {
          question: "How do you change the color of the text?",
          correctAnswer: "Use the color property."
        },
        {
          question: "How do you set a background image?",
          correctAnswer: "Use the background-image property."
        },
        {
          question: "How do you create a gradient background?",
          correctAnswer: "Use the background property with gradient functions like linear-gradient."
        },
        {
          question: "What is a CSS transition?",
          correctAnswer: "A CSS transition allows for smooth changes in property values over a specified duration."
        },
        {
          question: "How do you create a transition effect?",
          correctAnswer: "Use the transition property to specify the property, duration, timing function, and delay."
        },
        {
          question: "What is the transform property?",
          correctAnswer: "The transform property applies 2D or 3D transformations to an element, such as rotate, scale, skew, or translate."
        },
        {
          question: "What is Flexbox?",
          correctAnswer: "Flexbox is a CSS layout module that efficiently aligns and distributes space among items in a container."
        },
        {
          question: "What is the main axis and cross axis in Flexbox?",
          correctAnswer: "The main axis is defined by flex-direction, while the cross axis is perpendicular to the main axis."
        },
        {
          question: "What is the justify-content property?",
          correctAnswer: "The justify-content property aligns flex items along the main axis."
        },
        {
          question: "What is the align-items property?",
          correctAnswer: "The align-items property aligns flex items along the cross axis."
        },
        {
          question: "What is CSS Grid Layout?",
          correctAnswer: "CSS Grid Layout is a two-dimensional layout system for creating complex, responsive web layouts."
        },
        {
          question: "How do you create a grid container?",
          correctAnswer: "Set display: grid or inline-grid on the container element."
        },
        {
          question: "What is the grid-template-columns property?",
          correctAnswer: "Defines the number and width of columns in the grid."
        },
        {
          question: "How do you create grid areas?",
          correctAnswer: "Define grid areas using the grid-template-areas property and assign elements with grid-area."
        },
        {
          question: "How do you create a responsive grid layout?",
          correctAnswer: "Use media queries, relative units like %, and functions like repeat() and minmax() to create flexible grids."
        },
        {
          question: "What is responsive design?",
          correctAnswer: "Responsive design adapts web pages for different devices and screen sizes."
        },
        {
          question: "How do you create a responsive layout using CSS?",
          correctAnswer: "Use percentage widths, max-width for images, and media queries."
        },
        {
          question: "What are media queries?",
          correctAnswer: "Media queries apply CSS based on conditions like screen size, resolution, or orientation."
        },
        {
          question: "How do you make images responsive using HTML and CSS?",
          correctAnswer: "Use the srcset attribute in HTML and CSS properties like max-width: 100% to ensure images scale appropriately."
        },
        {
            question: "What is a CSS animation?",
            correctAnswer: "A CSS animation allows changes to CSS properties over time using keyframes to define the changes."
          },
          {
            question: "How do you create a CSS animation?",
            correctAnswer: "Define keyframes with the @keyframes rule and apply the animation to an element using the animation property."
          },
          {
            question: "What is the @keyframes rule?",
            correctAnswer: "@keyframes specifies the animation code, defining styles for the element at various points during the animation."
          },
          {
            question: "What is the animation-duration property?",
            correctAnswer: "Specifies how long an animation should take to complete one cycle, using seconds (s) or milliseconds (ms)."
          },
          {
            question: "What is the animation-timing-function property?",
            correctAnswer: "Specifies the speed curve of the animation, with common values like linear, ease, ease-in, ease-out, and ease-in-out."
          },
          {
            question: "What is the transform property?",
            correctAnswer: "The transform property applies a 2D or 3D transformation to an element, allowing rotation, scaling, skewing, or translation."
          },
          {
            question: "How do you translate an element using CSS?",
            correctAnswer: "Use the translate() function, which moves the element based on specified x and y values."
          },
          {
            question: "How do you rotate an element using CSS?",
            correctAnswer: "Use the rotate() function to rotate the element by a specified angle."
          },
          {
            question: "How do you scale an element using CSS?",
            correctAnswer: "Use the scale() function to resize an element horizontally and/or vertically."
          },
          {
            question: "How do you skew an element using CSS?",
            correctAnswer: "Use the skew() function to slant an element along the x-axis and y-axis."
          },
          {
            question: "What is the transform-origin property?",
            correctAnswer: "Specifies the point around which a transformation is applied, such as the center or top-left corner of an element."
          },
          {
            question: "How do you apply multiple transforms to an element?",
            correctAnswer: "Chain multiple transform functions together in a single transform property."
          },
          {
            question: "What are 3D transforms, and how do you use them?",
            correctAnswer: "3D transforms manipulate elements in three-dimensional space using functions like rotateX(), rotateY(), and translateZ()."
          },
          {
            question: "What is the perspective property, and how is it used?",
            correctAnswer: "Defines the perspective from which a 3D element is viewed, giving depth to 3D transformations."
          },
          {
            question: "What is the backface-visibility property?",
            correctAnswer: "Determines whether the back face of an element is visible when rotated, often used in 3D transformations."
          },
          {
            question: "What is Flexbox?",
            correctAnswer: "Flexbox is a CSS layout module that provides a flexible way to arrange items in a container, even if their size is unknown or dynamic."
          },
          {
            question: "What is the main axis and cross axis in Flexbox?",
            correctAnswer: "The main axis is defined by flex-direction, while the cross axis is perpendicular to the main axis."
          },
          {
            question: "What is the justify-content property?",
            correctAnswer: "Aligns flex items along the main axis, with values such as flex-start, flex-end, center, space-between, and space-around."
          },
          {
            question: "What is the align-items property?",
            correctAnswer: "Aligns flex items along the cross axis with values like stretch, flex-start, flex-end, center, and baseline."
          },
          {
            question: "What is the flex-direction property?",
            correctAnswer: "Specifies the direction of the main axis, with values row, row-reverse, column, and column-reverse."
          },
          {
            question: "What is the flex-wrap property?",
            correctAnswer: "Controls whether flex items are forced into a single line or can wrap onto multiple lines with values like nowrap, wrap, and wrap-reverse."
          },
          {
            question: "What is the align-content property?",
            correctAnswer: "Aligns flex lines along the cross axis when there's extra space in the container, used when flex items wrap onto multiple lines."
          },
          {
            question: "What is the order property in Flexbox?",
            correctAnswer: "Defines the order of flex items within a container; items with lower order values appear first."
          },
          {
            question: "What is CSS Grid Layout?",
            correctAnswer: "CSS Grid Layout is a two-dimensional layout system for creating responsive web layouts using rows and columns."
          },
          {
            question: "How do you create a grid container?",
            correctAnswer: "Set display: grid or inline-grid on a container element to enable grid layout."
          },
          {
            question: "How do you define grid columns and rows?",
            correctAnswer: "Use grid-template-columns and grid-template-rows to specify the number and size of columns and rows."
          },
          {
            question: "What is the grid-template-columns property?",
            correctAnswer: "Defines the number and width of columns in a grid using units like px, %, fr, etc."
          },
          {
            question: "What is the grid-template-rows property?",
            correctAnswer: "Defines the number and height of rows in a grid using units like px, %, fr, etc."
          },
          {
            question: "How do you create grid areas?",
            correctAnswer: "Define grid areas with grid-template-areas and assign elements to those areas using grid-area."
          },
          {
            question: "What is the grid-gap property?",
            correctAnswer: "Defines the spacing between rows and columns in a grid layout. Also known as gap."
          },
          {
            question: "How do you align items in a grid?",
            correctAnswer: "Use justify-items to align items horizontally, align-items to align vertically, or place-items as shorthand for both."
          },
          {
            question: "What is the grid-auto-flow property?",
            correctAnswer: "Controls how the auto-placement algorithm works for grid items, with values like row, column, and dense."
          },
          {
            question: "How do you create a responsive grid layout?",
            correctAnswer: "Use media queries, relative units, repeat(), and minmax() functions to create flexible grid layouts."
          },
          {
            question: "What is responsive design?",
            correctAnswer: "Responsive design ensures webpages render well on a variety of devices and screen sizes."
          },
          {
            question: "How do you create a responsive layout using CSS?",
            correctAnswer: "Use percentage-based widths, max-width for images, and media queries to create flexible layouts."
          },
          {
            question: "What are media queries?",
            correctAnswer: "CSS feature that adapts content rendering to different conditions like screen size, resolution, or orientation."
          },
          {
            question: "How do you write a media query in CSS?",
            correctAnswer: "Use the @media rule followed by conditions, e.g., @media (max-width: 600px) { /* CSS styles */ }."
          },
          {
            question: "What is the @media rule?",
            correctAnswer: "Defines a block of CSS rules that apply only if certain conditions are true, like viewport width."
          },
          {
            question: "What is the viewport meta tag, and why is it important?",
            correctAnswer: "Used to control layout on mobile browsers, setting the viewport width to device width for responsive design."
          },
          {
            question: "Explain @media only screen and (max-width: 600px).",
            correctAnswer: "'only screen' hides stylesheets from older browsers; '(max-width: 600px)' applies styles to screens ≤ 600px."
          },
          {
            question: "How can you make images responsive using HTML and CSS?",
            correctAnswer: "Use the srcset attribute in HTML to provide images for different widths and CSS max-width: 100% to ensure scaling."
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
