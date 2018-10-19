## gitblit-ticket-generation-helper

An expect script which saves a few steps when creating a gitblit ticket.
Currently hardcoded to create tickets for the dev branch.


# Dependencies
* expect 
	* expect is an expect script interpreter
	* installing through apt-get should work out of the box
		```bash
		sudo apt-get install expect
		```
* nodejs
    * [node.js](https://nodejs.org/) version 8 works for me

# Usage
* create an alias for the script in ~/.bashrc for easier usage (optional)
	```bash
    alias generate-ticket='expect ~/my/script/dir/gitblit-ticket-generation-helper/generateTicket.exp'
	```

* go to some gitblit repo
	```bash
	cd ~/my/gitblit/project/dir 
	```

* then run: 
	```bash
	generete-ticket "My first ticket"
	```
	
	* there will be a lot of output on the console.
		- if successful the output will end with 
			```bash
			EXPECT: Ready for use
			```
		- if something went wrong it should end with a message hinting the reason. eg:
		    ```bash
			EXPECT: The ticket generation message must be between 10 and 100 symbols long
			```
