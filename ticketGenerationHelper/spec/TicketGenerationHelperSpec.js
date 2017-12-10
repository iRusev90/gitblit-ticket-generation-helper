let	helperExports = require("../TicketGenerationHelper.js"),
	TicketGenerationHelper = helperExports.TicketGenerationHelper,
	startAssistance = helperExports.startAssistance;

describe("Find ticket number", function() {
	it("When response is standart", function() {
		let ticketGenerationHelper = new TicketGenerationHelper(),
			generationMessage = "This is a valid message",
			gitblitResponse = "'http://i.rusev@dev.irusev.bg':" +
			"Counting objects: 3, done. " +
			"Delta compression using up to 4 threads." +
			"Compressing objects: 100% (2/2), done." +
			"Writing objects: 100% (3/3), 327 bytes | 0 bytes/s, done." +
			"Total 3 (delta 1), reused 0 (delta 0)" +
			"remote: Resolving deltas: 100% (1/1)" +
			"remote: Updating references: 100% (1/1)" +
			"remote:     " +
			"remote: --> #117: This is a valid message" +
			"remote:     created proposal ticket from patchset" +
			"remote:     http://dev.irusev.bg/git/tickets?r=gitblit-ticket-testing.git&h=117" +
			"remote:     " +
			"To http://i.rusev@dev.irusev.bg/git/r/gitblit-ticket-testing.git" +
			" * [new branch]      HEAD -> refs/for/dev";

		let ticketNum = ticketGenerationHelper.findTicketNumber(generationMessage, gitblitResponse);

		expect(117).toEqual(ticketNum);
	});

	it("When response commit message ends in multiplicity", function() {
		let ticketGenerationHelper = new TicketGenerationHelper(),
			generationMessage = "This message will cause the git response to end in multiple dots instead of this",
			gitblitResponse = "'http://i.rusev@dev.irusev.bg': " +
			"Counting objects: 3, done." +
			"Delta compression using up to 4 threads." +
			"Compressing objects: 100% (2/2), done." +
			"Writing objects: 100% (3/3), 364 bytes | 0 bytes/s, done." +
			"Total 3 (delta 1), reused 0 (delta 0)" +
			"remote: Resolving deltas: 100% (1/1)" +
			"remote: Updating references: 100% (1/1)" +
			"remote:     " +
			"remote: --> #118: This message will cause the git response to end in multiple dots instead of..." +
			"remote:     created proposal ticket from patchset" +
			"remote:     http://dev.irusev.bg/git/tickets?r=gitblit-ticket-testing.git&h=118" +
			"remote:     " +
			"To http://i.rusev@dev.irusev.bg/git/r/gitblit-ticket-testing.git" +
			" * [new branch]      HEAD -> refs/for/dev";

		let ticketNum = ticketGenerationHelper.findTicketNumber(generationMessage, gitblitResponse);

		expect(118).toEqual(ticketNum);
	});
});

describe("startAssistance", function() {
	beforeAll(function() {
		this.originalArgs = process.argv;
		process.argv = [null, null, "findTicketNumber","arg1", "arg2"];
	});

	it("Should call findTicketNumber with proper args", function() {

		let ticketGenerationHelper = new TicketGenerationHelper();
		spyOn(ticketGenerationHelper, 'findTicketNumber');
		startAssistance(ticketGenerationHelper);
		expect(ticketGenerationHelper.findTicketNumber).toHaveBeenCalledWith("arg1", "arg2");

	});

	afterAll(function() {
		process.argv = this.originalArgs;
	});
});
