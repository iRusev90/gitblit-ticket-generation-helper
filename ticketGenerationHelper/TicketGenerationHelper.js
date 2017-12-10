#!/usr/bin/node

function startAssistance(helper) {
	"use strict";

	let assistanceFuncName = process.argv[2];

	if (typeof(helper[assistanceFuncName]) == "function") {
		let funcArgs = process.argv.slice(3);
		let expectedMessage = helper[assistanceFuncName].apply(null, funcArgs);
		console.log(expectedMessage);
	} else {
		console.log("NoSuchHelperFuncException");
	}

}

class TicketGenerationHelper {
	findTicketNumber(gitCommitMessage, gitUpstreamResponse) {
		if(gitCommitMessage == undefined || gitUpstreamResponse == undefined) {
			return "InvalidFindTicketNumberArgsException";
		}

		let beforeTicketNum = "remote: --> #";
		let beforeTicketNumStartIndex = gitUpstreamResponse.indexOf(beforeTicketNum);
		let beforeTicketNumEndIndex = beforeTicketNumStartIndex + beforeTicketNum.length;

		if (beforeTicketNumStartIndex < 0) {
			return "BeforeTicketNumNotFoundException";
		}

		let afterTicketNumText = gitCommitMessage;
		let messageIndexThatWontBeReplaceWithDots = 15;
		if (gitCommitMessage.length - 1 > messageIndexThatWontBeReplaceWithDots) {
			afterTicketNumText = gitCommitMessage.substr(0, messageIndexThatWontBeReplaceWithDots);
		} else {
			afterTicketNumText = gitCommitMessage;
		}

		let afterTicketNum = ": " + afterTicketNumText;
		let afterTicketNumIndex = gitUpstreamResponse.indexOf(afterTicketNum);
		if (afterTicketNumIndex < 0) {
			return "AfterTicketNumNotFoundException";
		}

		let ticketNum = gitUpstreamResponse.substring(beforeTicketNumEndIndex, afterTicketNumIndex);
		if (isNaN(ticketNum)) {
			return "TicketIsNaNException";
		}
		if (ticketNum.trim() == "") {
			return "TicketNumIsEmptyStringException";
		}

		let parsedTicketNumber = parseInt(ticketNum);
		return parsedTicketNumber;
	}
}

startAssistance(new TicketGenerationHelper());

module.exports = {
	TicketGenerationHelper: TicketGenerationHelper,
	startAssistance: startAssistance
};
