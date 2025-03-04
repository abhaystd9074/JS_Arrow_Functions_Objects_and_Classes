Regex Problems: PIN Code & Email Validation
This repository contains solutions for PIN code validation and email validation using JavaScript and Regular Expressions (Regex).

1. PIN Code Validation
Description
The PIN code follows the Indian Postal Index Number (PIN) system, which consists of six digits.
This validation ensures that:

The PIN must start with a non-zero digit.
It can contain an optional space between the third and fourth digit.
Alphabets and special characters are not allowed at the beginning or end.
Regex Used
regex
Copy
Edit
^[1-9][0-9]{2}\s?[0-9]{3}$
Example Cases
PIN Code	Valid/Invalid	Reason
400088	✅ Valid	Standard format
400 088	✅ Valid	Allows a space between digits
A400088	❌ Invalid	Starts with an alphabet
400088B	❌ Invalid	Ends with an alphabet
40-088	❌ Invalid	Contains special characters
2. Email Validation
Description
The email follows a structured format with mandatory and optional parts.
This validation ensures that:

The email must start with abc.
It must contain @bridgelabz.co as the mandatory part.
An optional username (xyz) can appear after "abc", but only if it starts with _, +, -, or ..
A Top-Level Domain (TLD) like .in, .us, .uk is optional but allowed.
Regex Used
regex
Copy
Edit
^abc([._+\-][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$
Example Cases
Email	Valid/Invalid	Reason
abc@bridgelabz.co	✅ Valid	Only mandatory parts
abc.xyz@bridgelabz.co.in	✅ Valid	Optional part with dot & TLD
abc-xyz@bridgelabz.co	✅ Valid	Optional part with -
abc@bridgelabzcom	❌ Invalid	Missing .co
xyz@bridgelabz.co	❌ Invalid	Does not start with "abc"
abc..xyz@bridgelabz.co	❌ Invalid	Double dots ".." not allowed
How to Run the Code?
Clone this repository:
sh
Copy
Edit
git clone https://github.com/your-username/your-repo.git
Navigate to the project folder:
sh
Copy
Edit
cd your-repo
Open pin-code.js or email-validation.js in a code editor (e.g., VS Code).
Run the script using Node.js:
sh
Copy
Edit
node pin-code.js
node email-validation.js
Contributing
Feel free to contribute by improving the regex or adding more test cases! 🚀