# CS 260 Notes

My startup - need to add a link to it

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)
- [Markdown documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

## Git and GitHub notes

- Git is a tool to save older versions of projects and is incredibly useful for coding.
- GitHub is a website where I can view those older versions as well as other projects by other people.
- Before working on the project, do a `git pull`
- Code, test, repeat
- When it's working, `git commit` and `git push`
- I should push a commit to github at least 10 times for each assignment in this class

## Console and editor notes

- Use Git Bash instead of windows powershell (maybe just in general?)
- Get familiar with VI and VSCode

## The Internet

- All devices have an IP address, and a domain name is a more english way of communicating that information. You can look up any domain name to get the associated IP address.
- Caddy is a program for ensuring encryption and security over the internet, allowing you to use HTTPS instead of HTTP

## AWS Notes

- To SSH into my website, `& ssh -i ~/[location of my key pair file] ubuntu@[ip address]`
- To exit the SSH use `exit`
- IP address (elastic): 34.199.202.124
- Domain: ratemydryer.com
- The IP address costs 3$ a month if the server instance is down
- The server instance is free for the first 750 hours, but I may need to upgrade it soon
- My plan for now is to use the free server instance and leave it running because I'll probably have to upgrade within the month to get a stronger computer
- Turning off the instance now means I will for sure pay for the elastic IP and only possibly be able to keep using the free tier server instance in the future

## Internet Notes

- You can do the command `dig` in ubuntu to find the IP address for a domain name
- You might be able to do `whois [domain like amazon.com]` to get info on the owner, but it doesn't seem to work on windows
- When multiple domain names go to the same name, that's through a CNAME or canonical name (think lds.org redirecting to churchofjesuschrist.org)

## HTML Notes

- HTML is used to give a very functional outline for websites
- Very minimal user interaction
- Can be prettified with CSS and JS
- Can display images, audio, videos, and make simple graphics using geometry

## Deploy Files

- When wanting to put code into effect, I'll use some sort of .sh deploy file.
- The command to run in git bash is `./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s [startup/simon]`
- RUN THE FILE WHILE YOU ARE IN THE DIRECTORY YOU WANT TO DEPLOY, it will upload everything in whatever directory you are in haha
- The `-k` is the key parameter, `-h` is the domain, and `-s` is the name of the application
- The deploy files are shell scripts which are just a collection of command line commands put into a text file that automates running them all so that you don't have to do it over and over and over

## Testing

- For testing, run `npm run dev` from startup-service to run frontend
- Run `node service/index.js` from startup-service to run backend