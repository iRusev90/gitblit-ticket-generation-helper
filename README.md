## gitblit-ticket-generation-helper

An expect script which saves a few steps when creating a gitblit ticket.
Currently hardcoded to create tickets for the dev branch.


# Dependencies
    * expect script interpreter (sudo apt-get install should work out of the box)
    * nodejs

# Usage
    * Go to some gitblit repo
    * then run: expect <dir where you cloned this script>/generateTicket.exp <ticket name> 
        + <ticket name> is the commit message you'd make and what appears as the ticket name in git blit. Write it in double quotes. ex: "This is my commit message". Must be between 10 and 100 characters.
