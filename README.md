# Polling-API
 
 ## Getting Started

### Prerequisites

* npm 
  ```sh
  npm install npm@latest -g 
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/1AnujJoshi/Polling-API.git
   ```
2. Install NPM packages
   ```sh
   npm install dotenv mongoose express
   ```
### Routes
- /question/create (To create a question)
- /question/:id/option/create (To add options to a specific question)
- /question/:id/delete (To delete a question)
- /option/:id/delete (To delete an option)
- /option/:id/add_vote (To increment the count of votes)
- /question/:id (To view a question and it’s options)

### Features

1. Create a question (you can add as many questions as you want).
2. Add options to a question.
3. Add a vote to an option of question.
4. Delete a question .
5. Delete an option.
6. View a question with it’s options and all the votes given to it.

### Hosted URL

https://api-polling.herokuapp.com/api/v1/question
