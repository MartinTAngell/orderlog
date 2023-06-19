Work Log
========
## Setup
### Code Repository
TLDR: Created a new git repository to hold my code and set up the files. [Here](https://docs.github.com/en/get-started/quickstart) is the quickstart guide, but I'll add the exact commands that need to be typed into the process
- Create an empty folder for the project
- Go to [GitHub](https://github.com/) and create a new repository.
- Get the specific link for the project from GitHub
- If necessary, log in
- Open up a terminal or command line
```console
git init
git remote add origin (put the link gotten from GitHub here)
```
- When a lot of code has been completed and it's time to save all the code, run these commands to save and log the code in GitHub
```console
git commit -m "(Put a message here that describes the work you did)"
git push -u origin main
```
- Then check in GitHub that it updated