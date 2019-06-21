## gitblit-ticket-generation-helper

An expect script which saves a few steps when creating a gitblit ticket.
The script creates a ticket for the dev branch by default. This can be changed by adding a second argument to the script.

# Dependencies
* expect 
	* expect is an expect script interpreter
	* installing through apt-get should work out of the box
		```bash
		sudo apt-get install expect
		```

# Arguments
* 1 - ticket name: if there are spaces the message must be surrounded by quotes. Should be between 10 and 100 symbols (gitblit restriction)
* 2 - branch (OPTIONAL): the branch for which the ticket will be created. Without this argument "dev" will be selected.


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

# Config
There is a folder called config.
 * If the file TmpAutoCommit.flag exists within it then after the ticket generation a commit of the deleted file will automatically be made.
 * If the file CheckStatus.flag exists within it then the script will check for uncommited changes. If such exist the execution will stop.
