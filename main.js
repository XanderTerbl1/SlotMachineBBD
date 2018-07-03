function main ()
{
    currentDate();
    populateTable();
}

var currentDate;

function currentDate()
{
	var today = new Date();
	var day = today.getDate();
	var m = today.getMonth();
	var year = today.getFullYear();
	var month;

	if(day.toString().length == 1)
	{
		if(m.toString().length == 1)
			currentDate = year + "-0" + m + "-0" + day;
		else
		 	currentDate = year + "-" + m + "-0" + day;
	}
	else
	{
		if(m.toString().length == 1)
			currentDate = year + "-0" + m + "-" + day;
		else
		 	currentDate = year + "-" + m + "-" + day;
	}

	switch(m)
	{
		case 0 : month = "January";
					  break;
		case 1 : month = "February";
					  break;
		case 2 : month = "March";
					  break;
		case 3 : month = "April";
					  break;
		case 4 : month = "May";
					  break;
		case 5 : month = "June";
					  break;
		case 6 : month = "July";
					  break;
		case 7 : month = "August";
					  break;
		case 8 : month = "September";
					  break;
		case 9 : month = "October";
					  break;
		case 10 : month = "November";
					  break;
		case 11 : month = "December";
					  break;
		default : month = "Error";
				  break;
	}

	document.getElementById("date").innerHTML = day + " " + month + " " + year;
}

function pullData()
{
	// console.log("HERE");
	var req = new XMLHttpRequest();
	req.onreadystatechange = function()
	{
		if(req.readyState == 4 && req.status == 200)
		{
			// console.log(req.responseText);
			var json = JSON.parse(req.responseText);
			populateTable(json);
		}
	};
	
	req.open("GET", "https://login.microsoftonline.com/cccbf502-6b91-40d6-be02-5ffa0eb711d6/.well-known/openid-configuration", true);
	req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	// req.send(parameterize(data));

     console.log("in Pull JS");
}

function populateTable()
{
	var values = JSON.parse(object);
	var value = values.value;

	for(var i = 0; i < value.length; i++)
	{
		var subject = value[i].subject;
		var start = value[i].start;
		var end = value[i].end;
		var location = value[i].location;
		var organizer = value[i].organizer;

		var startDateTime = start.dateTime;
		var endDateTime = end.dateTime;

		var startDate = startDateTime.substring(0,10);
		var startTime = startDateTime.substring(11,16);

		if(startDate == currentDate)
		{
			var endDate = endDateTime.substring(0,10);
			var endTime = endDateTime.substring(11,16);

			var startHour = startTime.substring(0,2);
			var endHour = endTime.substring(0,2);

			var startMinute = startTime.substring(3,5);
			var endMinute = endTime.substring(3,5);

			if(startHour == endHour)
			{
				if(startMinute == "00")
				{
					if(endMinute == "15")
						document.getElementById(startHour + "1").style.backgroundColor = "#e60000";
					else if(endMinute == "30")
					{
						document.getElementById(startHour + "1").style.backgroundColor = "#e60000";
						document.getElementById(startHour + "2").style.backgroundColor = "#e60000";
					}
					else if(endMinute == "45")
					{
						document.getElementById(startHour + "1").style.backgroundColor = "#e60000";
						document.getElementById(startHour + "2").style.backgroundColor = "#e60000";
						document.getElementById(startHour + "3").style.backgroundColor = "#e60000";
					}

				}
				else if(startMinute == "15")
				{
					if(endMinute == "30")
						document.getElementById(startHour + "2").style.backgroundColor = "#e60000";
					else if(endMinute == "45")
					{
						document.getElementById(startHour + "2").style.backgroundColor = "#e60000";
						document.getElementById(startHour + "3").style.backgroundColor = "#e60000";
					}
				}
				else if(startMinute == "30")
				{
					if(endMinute == "45")
						document.getElementById(startHour + "3").style.backgroundColor = "#e60000";
				}
				else if(startMinute == "45")
				{
					document.getElementById(startHour + "4").style.backgroundColor = "#e60000";
				}
			}
			else if(startMinute == "00")
			{
				if(parseInt(endHour) - parseInt(startHour) == 1 && endMinute == "00")
				{
					document.getElementById(startHour + "1").style.backgroundColor = "#e60000";
					document.getElementById(startHour + "2").style.backgroundColor = "#e60000";
					document.getElementById(startHour + "3").style.backgroundColor = "#e60000";
					document.getElementById(startHour + "4").style.backgroundColor = "#e60000";
				}
				else
				{
					document.getElementById(startHour + "1").style.backgroundColor = "#e60000";
					document.getElementById(startHour + "2").style.backgroundColor = "#e60000";
					document.getElementById(startHour + "3").style.backgroundColor = "#e60000";
					document.getElementById(startHour + "4").style.backgroundColor = "#e60000";

					var temp = startHour;

					for(var j = parseInt(startHour) + 1; j < parseInt(endHour); j++)
					{
						switch(temp)
						{
							case "07" : temp = "08";
										break;
							case "08" : temp = "09";
										break;
							case "09" : temp = "10";
										break;
							case "10" : temp = "11";
										break;
							case "11" : temp = "12";
										break;
							case "12" : temp = "13";
										break;
							case "13" : temp = "14";
										break;
							case "14" : temp = "15";
										break;
							case "15" : temp = "16";
										break;
							case "16" : temp = "17";
										break;
							case "17" : temp = "18";
										break;
							case "18" : temp = "19";
										break;
							default : temp = "00"
									  break;
						}

						document.getElementById(temp + "1").style.backgroundColor = "#e60000";
						document.getElementById(temp + "2").style.backgroundColor = "#e60000";
						document.getElementById(temp + "3").style.backgroundColor = "#e60000";
						document.getElementById(temp + "4").style.backgroundColor = "#e60000";
					}

					var tempEnd = newEnd(endHour);

					if(endMinute == "00")
					{
						document.getElementById(tempEnd + "1").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "2").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "3").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "4").style.backgroundColor = "#e60000";
					}
					else if(endMinute == "15")
					{
						document.getElementById(tempEnd + "1").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "2").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "3").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "4").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "1").style.backgroundColor = "#e60000";	
					}
					else if(endMinute == "30")
					{
						document.getElementById(tempEnd + "1").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "2").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "3").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "4").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "1").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "2").style.backgroundColor = "#e60000";
					}
					else if(endMinute == "45")
					{
						document.getElementById(tempEnd + "1").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "2").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "3").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "4").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "1").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "2").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "3").style.backgroundColor = "#e60000";
					}
				}
			}
			else if(startMinute == "15")
			{
				if(parseInt(endHour) - parseInt(startHour) == 1 && endMinute == "00")
				{
					document.getElementById(startHour + "2").style.backgroundColor = "#e60000";
					document.getElementById(startHour + "3").style.backgroundColor = "#e60000";
					document.getElementById(startHour + "4").style.backgroundColor = "#e60000";
				}
				else
				{
					document.getElementById(startHour + "2").style.backgroundColor = "#e60000";
					document.getElementById(startHour + "3").style.backgroundColor = "#e60000";
					document.getElementById(startHour + "4").style.backgroundColor = "#e60000";

					var temp = startHour;

					for(var j = parseInt(startHour) + 1; j < parseInt(endHour); j++)
					{
						switch(temp)
						{
							case "07" : temp = "08";
										break;
							case "08" : temp = "09";
										break;
							case "09" : temp = "10";
										break;
							case "10" : temp = "11";
										break;
							case "11" : temp = "12";
										break;
							case "12" : temp = "13";
										break;
							case "13" : temp = "14";
										break;
							case "14" : temp = "15";
										break;
							case "15" : temp = "16";
										break;
							case "16" : temp = "17";
										break;
							case "17" : temp = "18";
										break;
							case "18" : temp = "19";
										break;
							default : temp = "00"
									  break;
						}

						document.getElementById(temp + "1").style.backgroundColor = "#e60000";
						document.getElementById(temp + "2").style.backgroundColor = "#e60000";
						document.getElementById(temp + "3").style.backgroundColor = "#e60000";
						document.getElementById(temp + "4").style.backgroundColor = "#e60000";
					}

					var tempEnd = newEnd(endHour);

					if(endMinute == "00")
					{
						document.getElementById(tempEnd + "1").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "2").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "3").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "4").style.backgroundColor = "#e60000";
					}
					else if(endMinute == "15")
					{
						document.getElementById(tempEnd + "1").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "2").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "3").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "4").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "1").style.backgroundColor = "#e60000";	
					}
					else if(endMinute == "30")
					{
						document.getElementById(tempEnd + "1").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "2").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "3").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "4").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "1").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "2").style.backgroundColor = "#e60000";
					}
					else if(endMinute == "45")
					{
						document.getElementById(tempEnd + "1").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "2").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "3").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "4").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "1").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "2").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "3").style.backgroundColor = "#e60000";
					}
				}
			}
			else if(startMinute == "30")
			{
				if(parseInt(endHour) - parseInt(startHour) == 1 && endMinute == "00")
				{
					document.getElementById(startHour + "3").style.backgroundColor = "#e60000";
					document.getElementById(startHour + "4").style.backgroundColor = "#e60000";
				}
				else
				{
					document.getElementById(startHour + "3").style.backgroundColor = "#e60000";
					document.getElementById(startHour + "4").style.backgroundColor = "#e60000";

					var temp = startHour;

					for(var j = parseInt(startHour) + 1; j < parseInt(endHour); j++)
					{
						switch(temp)
						{
							case "07" : temp = "08";
										break;
							case "08" : temp = "09";
										break;
							case "09" : temp = "10";
										break;
							case "10" : temp = "11";
										break;
							case "11" : temp = "12";
										break;
							case "12" : temp = "13";
										break;
							case "13" : temp = "14";
										break;
							case "14" : temp = "15";
										break;
							case "15" : temp = "16";
										break;
							case "16" : temp = "17";
										break;
							case "17" : temp = "18";
										break;
							case "18" : temp = "19";
										break;
							default : temp = "00"
									  break;
						}

						document.getElementById(temp + "1").style.backgroundColor = "#e60000";
						document.getElementById(temp + "2").style.backgroundColor = "#e60000";
						document.getElementById(temp + "3").style.backgroundColor = "#e60000";
						document.getElementById(temp + "4").style.backgroundColor = "#e60000";
					}

					var tempEnd = newEnd(endHour);

					if(endMinute == "00")
					{
						document.getElementById(tempEnd + "1").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "2").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "3").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "4").style.backgroundColor = "#e60000";
					}
					else if(endMinute == "15")
					{
						document.getElementById(tempEnd + "1").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "2").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "3").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "4").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "1").style.backgroundColor = "#e60000";	
					}
					else if(endMinute == "30")
					{
						document.getElementById(tempEnd + "1").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "2").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "3").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "4").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "1").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "2").style.backgroundColor = "#e60000";
					}
					else if(endMinute == "45")
					{
						document.getElementById(tempEnd + "1").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "2").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "3").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "4").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "1").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "2").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "3").style.backgroundColor = "#e60000";
					}
				}
			}
			else if(startMinute == "45")
			{
				if(parseInt(endHour) - parseInt(startHour) == 1 && endMinute == "00")
					document.getElementById(startHour + "4").style.backgroundColor = "#e60000";
				else
				{
					document.getElementById(startHour + "4").style.backgroundColor = "#e60000";

					var temp = startHour;

					for(var j = parseInt(startHour) + 1; j < parseInt(endHour); j++)
					{
						switch(temp)
						{
							case "07" : temp = "08";
										break;
							case "08" : temp = "09";
										break;
							case "09" : temp = "10";
										break;
							case "10" : temp = "11";
										break;
							case "11" : temp = "12";
										break;
							case "12" : temp = "13";
										break;
							case "13" : temp = "14";
										break;
							case "14" : temp = "15";
										break;
							case "15" : temp = "16";
										break;
							case "16" : temp = "17";
										break;
							case "17" : temp = "18";
										break;
							case "18" : temp = "19";
										break;
							default : temp = "00"
									  break;
						}

						document.getElementById(temp + "1").style.backgroundColor = "#e60000";
						document.getElementById(temp + "2").style.backgroundColor = "#e60000";
						document.getElementById(temp + "3").style.backgroundColor = "#e60000";
						document.getElementById(temp + "4").style.backgroundColor = "#e60000";
					}

					var tempEnd = newEnd(endHour);

					if(endMinute == "00")
					{
						document.getElementById(tempEnd + "1").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "2").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "3").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "4").style.backgroundColor = "#e60000";
					}
					else if(endMinute == "15")
					{
						document.getElementById(tempEnd + "1").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "2").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "3").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "4").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "1").style.backgroundColor = "#e60000";	
					}
					else if(endMinute == "30")
					{
						document.getElementById(tempEnd + "1").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "2").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "3").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "4").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "1").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "2").style.backgroundColor = "#e60000";
					}
					else if(endMinute == "45")
					{
						document.getElementById(tempEnd + "1").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "2").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "3").style.backgroundColor = "#e60000";
						document.getElementById(tempEnd + "4").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "1").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "2").style.backgroundColor = "#e60000";
						document.getElementById(endHour + "3").style.backgroundColor = "#e60000";
					}
				}
			}
		}
		else
			break;
	}
}

function newEnd(end)
{
	var result;

	switch(end)
	{
		case "09" : result = "08";
					break;
		case "10" : result = "09";
					break;		
		case "11" : result = "10";
					break;	
		case "12" : result = "11";
					break;
		case "13" : result = "12";
					break;
		case "14" : result = "13";
					break;
		case "15" : result = "14";
					break;
		case "16" : result = "15";
					break;
		case "17" : result = "16";
					break;
		case "18" : result = "17";
					break;
		case "19" : result = "18";
					break;
		default : result = "00";
				  break;
	}

	return result;
}

var object = '{"@odata.context":"https://graph.microsoft.com/v1.0/$metadata#users(15000b65-4d66-4d8a-9a03-980bed8be18c)/calendar/events","@odata.nextLink":"https://graph.microsoft.com/v1.0/cccbf502-6b91-40d6-be02-5ffa0eb711d6/users/15000b65-4d66-4d8a-9a03-980bed8be18c/calendar/events?$skip=10","value":[{"@odata.etag":"W","id":"AAMkADc2MDhlMmJmLWQ4NjEtNDRkNy04MDE5LTEzZmZlYzNkMzY4YQBGAAAAAACaHcs00Ii9SrnUe3PNkWCNBwDhwZJFtz2ETbVSgn0LrCyfAE5fxuM2AAD2nSDDkgrMSKifAsq5WXunAAGzel1WAAA=","createdDateTime":"2018-07-03T07:30:10.3936449Z","lastModifiedDateTime":"2018-07-03T07:30:12.6095326Z","changeKey":"9p0gw5IKzEionwLKuVl7pwABs4z5iw==","categories":[],"originalStartTimeZone":"South Africa Standard Time","originalEndTimeZone":"South Africa Standard Time","iCalUId":"040000008200E00074C5B7101A82E00807E207039069E043BFFCD3010000000000000000100000009A26A7C5A728F24393D6EA0E36850039","reminderMinutesBeforeStart":15,"isReminderOn":false,"hasAttachments":false,"subject":"Zanele Phadu RECRUITMENT: People Planning meeting","bodyPreview":"","importance":"normal","sensitivity":"normal","isAllDay":false,"isCancelled":false,"isOrganizer":false,"responseRequested":true,"seriesMasterId":null,"showAs":"busy","type":"singleInstance","webLink":"https://outlook.office365.com/owa/?itemid=AAMkADc2MDhlMmJmLWQ4NjEtNDRkNy04MDE5LTEzZmZlYzNkMzY4YQBGAAAAAACaHcs00Ii9SrnUe3PNkWCNBwDhwZJFtz2ETbVSgn0LrCyfAE5fxuM2AAD2nSDDkgrMSKifAsq5WXunAAGzel1WAAA%3D&exvsurl=1&path=/calendar/item","onlineMeetingUrl":"https://sfb.bbd.co.za/meet/zanele/RWRQKNN2","recurrence":null,"responseStatus":{"response":"accepted","time":"2018-07-03T07:30:11.310426Z"},"body":{"contentType":"html","content":"<html>" content=\"text/html; charset=utf-8\">\r\n<meta content=\"text/html; charset=us-ascii\">\r\n<meta name=\"Generator\" content=\"Microsoft Word 15 (filtered medium)\">\r\n<style>\r\n<!--\r\n@font-face\r\n\t{font-family:Wingdings}\r\n@font-face\r\n\t{font-family:\"Cambria Math\"}\r\n@font-face\r\n\t{font-family:Calibri}\r\np.MsoNormal, li.MsoNormal, div.MsoNormal\r\n\t{margin:0cm;\r\n\tmargin-bottom:.0001pt;\r\n\tfont-size:11.0pt;\r\n\tfont-family:\"Calibri\",sans-serif}\r\na:link, span.MsoHyperlink\r\n\t{color:#0563C1;\r\n\ttext-decoration:underline}\r\na:visited, span.MsoHyperlinkFollowed\r\n\t{color:#954F72;\r\n\ttext-decoration:underline}\r\np.msonormal0, li.msonormal0, div.msonormal0\r\n\t{margin-right:0cm;\r\n\tmargin-left:0cm;\r\n\tfont-size:11.0pt;\r\n\tfont-family:\"Calibri\",sans-serif}\r\nspan.EmailStyle18\r\n\t{font-family:\"Calibri\",sans-serif;\r\n\tcolor:windowtext}\r\n.MsoChpDefault\r\n\t{font-size:10.0pt}\r\n@page WordSection1\r\n\t{margin:72.0pt 72.0pt 72.0pt 72.0pt}\r\ndiv.WordSection1\r\n\t{}\r\n-->\r\n</style>\r\n</head>\r\n<body lang=\"EN-ZA\" link=\"#0563C1\" vlink=\"#954F72\">\r\n<div class=\"WordSection1\">\r\n<p class=\"MsoNormal\"><a name=\"_InsertRtfSavedPosition\"></a>&nbsp;</p>\r\n<p class=\"MsoNormal\" style=\"text-autospace:none\"><span style=\"font-size:8.0pt; color:#404040\">.........................................................................................................................................</span><b><span style=\"font-size:14.0pt\"></span></b></p>\r\n<p class=\"MsoNormal\" style=\"text-autospace:none\"><a name=\"OutJoinLink\"><span style=\"font-size:14.0pt; font-family:Wingdings; color:#0066CC\">\u00e0</span></a><span style=\"\"><span style=\"font-size:14.0pt; color:#0066CC\">\r\n</span></span><a href=\"https://sfb.bbd.co.za/meet/zanele/RWRQKNN2\"><span style=\"\"><span style=\"font-size:16.0pt; color:#0066CC\">Join Skype Meeting</span></span><span style=\"\"></span></a><span style=\"\"><span style=\"font-size:14.0pt\">&nbsp;\r\n<a name=\"OutSharedNoteBorder\">&nbsp;</a>&nbsp;&nbsp;<a name=\"OutSharedNoteLink\">&nbsp;</a></span></span><span style=\"font-size:14.0pt\"></span></p>\r\n<p class=\"MsoNormal\" style=\"margin-right:0cm; margin-bottom:12.0pt; margin-left:16.0pt; line-height:125%; text-autospace:none\">\r\n<span style=\"font-size:10.0pt; line-height:125%\">Trouble Joining? <u><a href=\"https://sfb.bbd.co.za/meet/zanele/RWRQKNN2?sl=1\"><span style=\"color:#0066CC\">Try Skype Web App</span></a>\r\n</u></span></p>\r\n<p class=\"MsoNormal\" style=\"text-autospace:none\"><span style=\"font-size:3.0pt\">&nbsp;</span><span lang=\"EN\"></span></p>\r\n<p class=\"MsoNormal\" style=\"text-autospace:none\"><span lang=\"EN\" style=\"font-size:8.0pt\">&nbsp;</span></p>\r\n<p class=\"MsoNormal\" style=\"text-autospace:none\"><span lang=\"EN\" style=\"font-size:10.0pt\"><a href=\"https://o15.officeredir.microsoft.com/r/rlidLync15?clid=1033&amp;p1=5&amp;p2=2009\"><span style=\"color:#0066CC\">Help</span></a></span><span lang=\"EN\" style=\"font-size:3.0pt\">\r\n</span><span lang=\"EN\" style=\"font-size:8.0pt\"></span></p>\r\n<p class=\"MsoNormal\" style=\"text-autospace:none\"><span lang=\"EN\" style=\"font-size:14.0pt\">&nbsp;</span></p>\r\n<p class=\"MsoNormal\" style=\"text-autospace:none\"><sub><span lang=\"EN\" style=\"font-size:1.0pt; color:white\">[!OC([1033])!]</span></sub><span lang=\"EN\" style=\"font-size:3.0pt\"></span></p>\r\n<p class=\"MsoNormal\" style=\"margin-bottom:10.0pt; line-height:115%; text-autospace:none\">\r\n<span lang=\"EN\" style=\"font-size:8.0pt; line-height:115%; color:#404040\">.........................................................................................................................................</span><span lang=\"EN\" style=\"font-size:10.5pt; line-height:115%\"></span></p>\r\n<p class=\"MsoNormal\">&nbsp;</p>\r\n</div>\r\n</body>\r\n</html>\r\n"},"start":{"dateTime":"2018-07-03T07:30:00.0000000","timeZone":"UTC"},"end":{"dateTime":"2018-07-03T08:30:00.0000000","timeZone":"UTC"},"location":{"displayName":"Assembly - VC; Lisp - CT VC; Windows - PTA Ground Floor VC; IndVC1","locationType":"default","uniqueId":"Assembly - VC; Lisp - CT VC; Windows - PTA Ground Floor VC; IndVC1","uniqueIdType":"private"},"locations":[{"displayName":"Assembly - VC; Lisp - CT VC; Windows - PTA Ground Floor VC; IndVC1","locationType":"default","uniqueId":"Assembly - VC; Lisp - CT VC; Windows - PTA Ground Floor VC; IndVC1","uniqueIdType":"private"}],"attendees":[{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Zanele Phadu","address":"zanele@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Charlene Cooke","address":"charlene@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"HR","address":"HR@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"recruitment","address":"recruitment@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Stratco","address":"Stratco@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Justin Purchase","address":"justinp@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Derick Oosthuizen","address":"dericko@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Claire Wood","address":"clairew@innosys.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Richard Kantor","address":"richardk@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Francois Van Niekerk","address":"francoisvn@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Andries Janse van Rensburg","address":"andriesj@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Dieter Lehmann","address":"dieterl@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Tom Du Toit","address":"tom@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Streicher Stegmann","address":"streicher@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Sue Van Eeden","address":"sue@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Lynn Van Aarde","address":"lynn@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Rudolph Esterhuysen","address":"rudolphe@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Jacques Du Plessis","address":"jacques@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Naomi Phokobye","address":"naomi@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Karen Combrink","address":"karen@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Kevin Staples","address":"kevin@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Zachery Schoeman","address":"ZachSc@Nedbank.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Zachery Schoeman","address":"zachery@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Johan Drenth","address":"johand@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Ankur Chourasia","address":"ankur@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Anand Kumar","address":"anand@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Sonali Deo","address":"sonali@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Tony Van der Linden","address":"tonyv@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Anjoem Ismail","address":"anjoem@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Ana ODonoghue","address":"ana@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Telisha Baartman","address":"telisha@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Justin Purchase","address":"JustinMark.Purchase@vcontractor.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Lerato Matabola","address":"leratom@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Matthew Barnard","address":"Matthewb@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Peter Searle","address":"peter@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Michelle Soares","address":"michelles@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Peter Scheffel","address":"peters@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Russell Davidson","address":"russell@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Gus Pringle","address":"gus@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Andre De Witt","address":"andred@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Sonia Silva De Andrade","address":"Sonia@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Abrie Van Aarde","address":"abrie@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Nelius Maritz","address":"nelius@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Neetu Ramchunder","address":"neetu@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Maxime Papazian","address":"maxime@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Rudolph Esterhuysen","address":"RudolphE@discovery.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Andries  Janse Van Rensburg","address":"Andries.JansevanRensburg@vcontractor.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Akshay Deole","address":"Akshay.Deole@vcontractor.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Deepti Pataskar","address":"deepti@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Vanessa Joseph","address":"vanessa@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Precious Hlozokuhle Nkomo","address":"precious@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Johan Mostert","address":"johanm@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"George Hakim","address":"georgeh@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Muzuvukile Matlala","address":"muzi@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Herman Botha","address":"hermanb@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Jarno Culhane","address":"Jarno@bbd.co.za"}},{"type":"optional","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Ivan Lazarov","address":"ivanl@bbd.co.za"}}],"organizer":{"emailAddress":{"name":"Zanele Phadu","address":"zanele@bbd.co.za"}}},{"@odata.etag":"W/\"9p0gw5IKzEionwLKuVl7pwABs4znzw==\"","id":"AAMkADc2MDhlMmJmLWQ4NjEtNDRkNy04MDE5LTEzZmZlYzNkMzY4YQBGAAAAAACaHcs00Ii9SrnUe3PNkWCNBwDhwZJFtz2ETbVSgn0LrCyfAE5fxuM2AAD2nSDDkgrMSKifAsq5WXunAAGzel1UAAA=","createdDateTime":"2018-07-02T07:59:20.5458973Z","lastModifiedDateTime":"2018-07-02T07:59:22.4404382Z","changeKey":"9p0gw5IKzEionwLKuVl7pwABs4znzw==","categories":[],"originalStartTimeZone":"South Africa Standard Time","originalEndTimeZone":"South Africa Standard Time","iCalUId":"040000008200E00074C5B7101A82E0080000000080AA5228EB11D401000000000000000010000000A8144F9EDF6D8241A4A4C7DCEEF6C3F7","reminderMinutesBeforeStart":15,"isReminderOn":false,"hasAttachments":false,"subject":"Prasad Bhogi ","bodyPreview":"Agenda :\r\n\r\nSanity Check on Patch Released in Nedbank QA\r\nGoing through the Spec","importance":"normal","sensitivity":"normal","isAllDay":false,"isCancelled":false,"isOrganizer":false,"responseRequested":true,"seriesMasterId":null,"showAs":"busy","type":"singleInstance","webLink":"https://outlook.office365.com/owa/?itemid=AAMkADc2MDhlMmJmLWQ4NjEtNDRkNy04MDE5LTEzZmZlYzNkMzY4YQBGAAAAAACaHcs00Ii9SrnUe3PNkWCNBwDhwZJFtz2ETbVSgn0LrCyfAE5fxuM2AAD2nSDDkgrMSKifAsq5WXunAAGzel1UAAA%3D&exvsurl=1&path=/calendar/item","onlineMeetingUrl":null,"recurrence":null,"responseStatus":{"response":"accepted","time":"2018-07-02T07:59:21.1573944Z"},"body":{"contentType":"html","content":"<html>\r\n<head>\r\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\r\n<meta content=\"text/html; charset=us-ascii\">\r\n<meta name=\"Generator\" content=\"Microsoft Word 15 (filtered medium)\">\r\n<style>\r\n<!--\r\n@font-face\r\n\t{font-family:\"Cambria Math\"}\r\n@font-face\r\n\t{font-family:Calibri}\r\np.MsoNormal, li.MsoNormal, div.MsoNormal\r\n\t{margin:0cm;\r\n\tmargin-bottom:.0001pt;\r\n\tfont-size:11.0pt;\r\n\tfont-family:\"Calibri\",sans-serif}\r\na:link, span.MsoHyperlink\r\n\t{color:#0563C1;\r\n\ttext-decoration:underline}\r\na:visited, span.MsoHyperlinkFollowed\r\n\t{color:#954F72;\r\n\ttext-decoration:underline}\r\np.msonormal0, li.msonormal0, div.msonormal0\r\n\t{margin-right:0cm;\r\n\tmargin-left:0cm;\r\n\tfont-size:11.0pt;\r\n\tfont-family:\"Calibri\",sans-serif}\r\nspan.EmailStyle18\r\n\t{font-family:\"Calibri\",sans-serif;\r\n\tcolor:windowtext}\r\n.MsoChpDefault\r\n\t{font-size:10.0pt}\r\n@page WordSection1\r\n\t{margin:72.0pt 72.0pt 72.0pt 72.0pt}\r\ndiv.WordSection1\r\n\t{}\r\n-->\r\n</style>\r\n</head>\r\n<body lang=\"EN-ZA\" link=\"#0563C1\" vlink=\"#954F72\">\r\n<div class=\"WordSection1\">\r\n<p class=\"MsoNormal\">Agenda : </p>\r\n<p class=\"MsoNormal\">&nbsp;</p>\r\n<p class=\"MsoNormal\">Sanity Check on Patch Released in Nedbank QA </p>\r\n<p class=\"MsoNormal\">Going through the Spec </p>\r\n<p class=\"MsoNormal\">&nbsp;</p>\r\n<p class=\"MsoNormal\">&nbsp;</p>\r\n<p class=\"MsoNormal\">&nbsp;</p>\r\n<p class=\"MsoNormal\">&nbsp;</p>\r\n</div>\r\n</body>\r\n</html>\r\n"},"start":{"dateTime":"2018-07-02T08:00:00.0000000","timeZone":"UTC"},"end":{"dateTime":"2018-07-02T09:00:00.0000000","timeZone":"UTC"},"location":{"displayName":"Assembly - VC; IndVC1","locationType":"default","uniqueId":"Assembly - VC; IndVC1","uniqueIdType":"private"},"locations":[{"displayName":"Assembly - VC; IndVC1","locationType":"default","uniqueId":"Assembly - VC; IndVC1","uniqueIdType":"private"}],"attendees":[{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Prasad Bhogi","address":"prasad@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"RetailTesters","address":"RetailTesters@bbd.co.za"}}],"organizer":{"emailAddress":{"name":"Prasad Bhogi","address":"prasad@bbd.co.za"}}},{"@odata.etag":"W/\"9p0gw5IKzEionwLKuVl7pwABsKygQQ==\"","id":"AAMkADc2MDhlMmJmLWQ4NjEtNDRkNy04MDE5LTEzZmZlYzNkMzY4YQBGAAAAAACaHcs00Ii9SrnUe3PNkWCNBwDhwZJFtz2ETbVSgn0LrCyfAE5fxuM2AAD2nSDDkgrMSKifAsq5WXunAAGwmZpgAAA=","createdDateTime":"2018-06-27T08:00:36.4142666Z","lastModifiedDateTime":"2018-06-27T08:00:38.4611431Z","changeKey":"9p0gw5IKzEionwLKuVl7pwABsKygQQ==","categories":[],"originalStartTimeZone":"tzone://Microsoft/Utc","originalEndTimeZone":"tzone://Microsoft/Utc","iCalUId":"040000008200E00074C5B7101A82E0080000000000000000000000000000000000000000310000007643616C2D5569640100000033333161313432352D633166392D343831302D626661632D38336538303334643831656500","reminderMinutesBeforeStart":15,"isReminderOn":false,"hasAttachments":false,"subject":"Rory Preddy Aws certification info session","bodyPreview":"When: 16 Jul 2018 9:00:00 AM\nWhere: Assembly room","importance":"normal","sensitivity":"normal","isAllDay":false,"isCancelled":false,"isOrganizer":false,"responseRequested":true,"seriesMasterId":null,"showAs":"busy","type":"singleInstance","webLink":"https://outlook.office365.com/owa/?itemid=AAMkADc2MDhlMmJmLWQ4NjEtNDRkNy04MDE5LTEzZmZlYzNkMzY4YQBGAAAAAACaHcs00Ii9SrnUe3PNkWCNBwDhwZJFtz2ETbVSgn0LrCyfAE5fxuM2AAD2nSDDkgrMSKifAsq5WXunAAGwmZpgAAA%3D&exvsurl=1&path=/calendar/item","onlineMeetingUrl":null,"recurrence":null,"responseStatus":{"response":"accepted","time":"2018-06-27T08:00:36.9767666Z"},"body":{"contentType":"html","content":"<html><head><meta name=\"Generator\" content=\"Microsoft Exchange Server\">\r\n<!-- converted from text -->\r\n<style><!-- .EmailQuote { margin-left: 1pt; padding-left: 4pt; border-left: #800000 2px solid; } --></style></head>\r\n<body>\r\n<font size=\"2\"><span style=\"font-size:11pt;\"><div class=\"PlainText\">When: 16 Jul 2018 9:00:00 AM<br>\r\nWhere: Assembly room</div></span></font>\r\n</body>\r\n</html>\r\n"},"start":{"dateTime":"2018-07-16T07:00:00.0000000","timeZone":"UTC"},"end":{"dateTime":"2018-07-16T08:00:00.0000000","timeZone":"UTC"},"location":{"displayName":"Assembly room","locationType":"default","uniqueId":"Assembly room","uniqueIdType":"private"},"locations":[{"displayName":"Assembly room","locationType":"default","uniqueId":"Assembly room","uniqueIdType":"private"}],"attendees":[{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Rory Preddy","address":"roryp@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Assembly - VC","address":"Assembly@bbd.co.za"}}],"organizer":{"emailAddress":{"name":"Rory Preddy","address":"roryp@bbd.co.za"}}},{"@odata.etag":"W/\"9p0gw5IKzEionwLKuVl7pwABrw1oMg==\"","id":"AAMkADc2MDhlMmJmLWQ4NjEtNDRkNy04MDE5LTEzZmZlYzNkMzY4YQBGAAAAAACaHcs00Ii9SrnUe3PNkWCNBwDhwZJFtz2ETbVSgn0LrCyfAE5fxuM2AAD2nSDDkgrMSKifAsq5WXunAAGu_kT0AAA=","createdDateTime":"2018-06-25T11:48:08.8319995Z","lastModifiedDateTime":"2018-06-25T11:48:11.0820161Z","changeKey":"9p0gw5IKzEionwLKuVl7pwABrw1oMg==","categories":[],"originalStartTimeZone":"South Africa Standard Time","originalEndTimeZone":"South Africa Standard Time","iCalUId":"040000008200E00074C5B7101A82E008000000007054FF98890CD401000000000000000010000000BFA2F12340701B49A7A6D5397A6FDE2A","reminderMinutesBeforeStart":15,"isReminderOn":false,"hasAttachments":false,"subject":"Ana ODonoghue ADMIN TEAMBUILD - QUICK CATCH UP ","bodyPreview":"","importance":"normal","sensitivity":"normal","isAllDay":false,"isCancelled":false,"isOrganizer":false,"responseRequested":true,"seriesMasterId":null,"showAs":"busy","type":"singleInstance","webLink":"https://outlook.office365.com/owa/?itemid=AAMkADc2MDhlMmJmLWQ4NjEtNDRkNy04MDE5LTEzZmZlYzNkMzY4YQBGAAAAAACaHcs00Ii9SrnUe3PNkWCNBwDhwZJFtz2ETbVSgn0LrCyfAE5fxuM2AAD2nSDDkgrMSKifAsq5WXunAAGu%2BkT0AAA%3D&exvsurl=1&path=/calendar/item","onlineMeetingUrl":null,"recurrence":null,"responseStatus":{"response":"accepted","time":"2018-06-25T11:48:09.488254Z"},"body":{"contentType":"html","content":"<html>\r\n<head>\r\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\r\n<meta content=\"text/html; charset=us-ascii\">\r\n<meta name=\"Generator\" content=\"Microsoft Word 15 (filtered medium)\">\r\n<style>\r\n<!--\r\n@font-face\r\n\t{font-family:\"Cambria Math\"}\r\n@font-face\r\n\t{font-family:Calibri}\r\np.MsoNormal, li.MsoNormal, div.MsoNormal\r\n\t{margin:0cm;\r\n\tmargin-bottom:.0001pt;\r\n\tfont-size:11.0pt;\r\n\tfont-family:\"Calibri\",sans-serif}\r\na:link, span.MsoHyperlink\r\n\t{color:#0563C1;\r\n\ttext-decoration:underline}\r\na:visited, span.MsoHyperlinkFollowed\r\n\t{color:#954F72;\r\n\ttext-decoration:underline}\r\np.msonormal0, li.msonormal0, div.msonormal0\r\n\t{margin-right:0cm;\r\n\tmargin-left:0cm;\r\n\tfont-size:11.0pt;\r\n\tfont-family:\"Calibri\",sans-serif}\r\nspan.EmailStyle18\r\n\t{font-family:\"Calibri\",sans-serif;\r\n\tcolor:windowtext}\r\n.MsoChpDefault\r\n\t{font-size:10.0pt}\r\n@page WordSection1\r\n\t{margin:72.0pt 72.0pt 72.0pt 72.0pt}\r\ndiv.WordSection1\r\n\t{}\r\n-->\r\n</style>\r\n</head>\r\n<body lang=\"EN-ZA\" link=\"#0563C1\" vlink=\"#954F72\">\r\n<div class=\"WordSection1\">\r\n<p class=\"MsoNormal\">&nbsp;</p>\r\n</div>\r\n</body>\r\n</html>\r\n"},"start":{"dateTime":"2018-06-28T08:30:00.0000000","timeZone":"UTC"},"end":{"dateTime":"2018-06-28T09:00:00.0000000","timeZone":"UTC"},"location":{"displayName":"Assembly - VC; Windows - PTA Ground Floor VC","locationType":"default","uniqueId":"Assembly - VC; Windows - PTA Ground Floor VC","uniqueIdType":"private"},"locations":[{"displayName":"Assembly - VC; Windows - PTA Ground Floor VC","locationType":"default","uniqueId":"Assembly - VC; Windows - PTA Ground Floor VC","uniqueIdType":"private"}],"attendees":[{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Ana ODonoghue","address":"ana@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Admin team","address":"Adminteam@bbd.co.za"}}],"organizer":{"emailAddress":{"name":"Ana ODonoghue","address":"ana@bbd.co.za"}}},{"@odata.etag":"W/\"9p0gw5IKzEionwLKuVl7pwABrw1iWA==\"","id":"AAMkADc2MDhlMmJmLWQ4NjEtNDRkNy04MDE5LTEzZmZlYzNkMzY4YQBGAAAAAACaHcs00Ii9SrnUe3PNkWCNBwDhwZJFtz2ETbVSgn0LrCyfAE5fxuM2AAD2nSDDkgrMSKifAsq5WXunAAGu_kTzAAA=","createdDateTime":"2018-06-25T10:11:57.8455786Z","lastModifiedDateTime":"2018-06-25T10:12:00.6112057Z","changeKey":"9p0gw5IKzEionwLKuVl7pwABrw1iWA==","categories":[],"originalStartTimeZone":"South Africa Standard Time","originalEndTimeZone":"South Africa Standard Time","iCalUId":"040000008200E00074C5B7101A82E00800000000A07798AE7D0CD401000000000000000010000000EEFCCEC87FACE844B28CA351867D0B2D","reminderMinutesBeforeStart":15,"isReminderOn":false,"hasAttachments":false,"subject":"Prasad Bhogi ","bodyPreview":"","importance":"normal","sensitivity":"normal","isAllDay":false,"isCancelled":false,"isOrganizer":false,"responseRequested":true,"seriesMasterId":null,"showAs":"busy","type":"singleInstance","webLink":"https://outlook.office365.com/owa/?itemid=AAMkADc2MDhlMmJmLWQ4NjEtNDRkNy04MDE5LTEzZmZlYzNkMzY4YQBGAAAAAACaHcs00Ii9SrnUe3PNkWCNBwDhwZJFtz2ETbVSgn0LrCyfAE5fxuM2AAD2nSDDkgrMSKifAsq5WXunAAGu%2BkTzAAA%3D&exvsurl=1&path=/calendar/item","onlineMeetingUrl":null,"recurrence":null,"responseStatus":{"response":"accepted","time":"2018-06-25T10:11:59.2205794Z"},"body":{"contentType":"html","content":"<html>\r\n<head>\r\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\r\n<meta content=\"text/html; charset=us-ascii\">\r\n<meta name=\"Generator\" content=\"Microsoft Word 15 (filtered medium)\">\r\n<style>\r\n<!--\r\n@font-face\r\n\t{font-family:\"Cambria Math\"}\r\n@font-face\r\n\t{font-family:Calibri}\r\np.MsoNormal, li.MsoNormal, div.MsoNormal\r\n\t{margin:0cm;\r\n\tmargin-bottom:.0001pt;\r\n\tfont-size:11.0pt;\r\n\tfont-family:\"Calibri\",sans-serif}\r\na:link, span.MsoHyperlink\r\n\t{color:#0563C1;\r\n\ttext-decoration:underline}\r\na:visited, span.MsoHyperlinkFollowed\r\n\t{color:#954F72;\r\n\ttext-decoration:underline}\r\np.msonormal0, li.msonormal0, div.msonormal0\r\n\t{margin-right:0cm;\r\n\tmargin-left:0cm;\r\n\tfont-size:11.0pt;\r\n\tfont-family:\"Calibri\",sans-serif}\r\nspan.EmailStyle18\r\n\t{font-family:\"Calibri\",sans-serif;\r\n\tcolor:windowtext}\r\n.MsoChpDefault\r\n\t{font-size:10.0pt}\r\n@page WordSection1\r\n\t{margin:72.0pt 72.0pt 72.0pt 72.0pt}\r\ndiv.WordSection1\r\n\t{}\r\n-->\r\n</style>\r\n</head>\r\n<body lang=\"EN-ZA\" link=\"#0563C1\" vlink=\"#954F72\">\r\n<div class=\"WordSection1\">\r\n<p class=\"MsoNormal\">&nbsp;</p>\r\n</div>\r\n</body>\r\n</html>\r\n"},"start":{"dateTime":"2018-06-25T10:30:00.0000000","timeZone":"UTC"},"end":{"dateTime":"2018-06-25T11:00:00.0000000","timeZone":"UTC"},"location":{"displayName":"IndVC1; Assembly - VC","locationType":"default","uniqueId":"IndVC1; Assembly - VC","uniqueIdType":"private"},"locations":[{"displayName":"IndVC1; Assembly - VC","locationType":"default","uniqueId":"IndVC1; Assembly - VC","uniqueIdType":"private"}],"attendees":[{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Prasad Bhogi","address":"prasad@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"RetailTesters","address":"RetailTesters@bbd.co.za"}}],"organizer":{"emailAddress":{"name":"Prasad Bhogi","address":"prasad@bbd.co.za"}}},{"@odata.etag":"W/\"9p0gw5IKzEionwLKuVl7pwABrw1duQ==\"","id":"AAMkADc2MDhlMmJmLWQ4NjEtNDRkNy04MDE5LTEzZmZlYzNkMzY4YQBGAAAAAACaHcs00Ii9SrnUe3PNkWCNBwDhwZJFtz2ETbVSgn0LrCyfAE5fxuM2AAD2nSDDkgrMSKifAsq5WXunAAGu_kTyAAA=","createdDateTime":"2018-06-25T07:52:11.1045178Z","lastModifiedDateTime":"2018-06-25T07:52:12.7451651Z","changeKey":"9p0gw5IKzEionwLKuVl7pwABrw1duQ==","categories":[],"originalStartTimeZone":"South Africa Standard Time","originalEndTimeZone":"South Africa Standard Time","iCalUId":"040000008200E00074C5B7101A82E00800000000E52BE769590CD401000000000000000010000000FC83A87BA359394F8C80DA27CC8D2869","reminderMinutesBeforeStart":15,"isReminderOn":false,"hasAttachments":false,"subject":"Thendo Mulaudzi Nedj  Rest service from Swagger File","bodyPreview":"","importance":"normal","sensitivity":"normal","isAllDay":false,"isCancelled":false,"isOrganizer":false,"responseRequested":true,"seriesMasterId":null,"showAs":"busy","type":"singleInstance","webLink":"https://outlook.office365.com/owa/?itemid=AAMkADc2MDhlMmJmLWQ4NjEtNDRkNy04MDE5LTEzZmZlYzNkMzY4YQBGAAAAAACaHcs00Ii9SrnUe3PNkWCNBwDhwZJFtz2ETbVSgn0LrCyfAE5fxuM2AAD2nSDDkgrMSKifAsq5WXunAAGu%2BkTyAAA%3D&exvsurl=1&path=/calendar/item","onlineMeetingUrl":null,"recurrence":null,"responseStatus":{"response":"accepted","time":"2018-06-25T07:52:11.604524Z"},"body":{"contentType":"html","content":"<html>\r\n<head>\r\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\r\n<meta content=\"text/html; charset=us-ascii\">\r\n<style type=\"text/css\" style=\"display:none\">\r\n<!--\r\np\r\n\t{margin-top:0;\r\n\tmargin-bottom:0}\r\n-->\r\n</style>\r\n</head>\r\n<body dir=\"ltr\">\r\n<div id=\"divtagdefaultwrapper\" dir=\"ltr\" style=\"font-size:12pt; color:#000000; font-family:Calibri,Helvetica,sans-serif\">\r\n<p style=\"margin-top:0; margin-bottom:0\"><br>\r\n</p>\r\n</div>\r\n</body>\r\n</html>\r\n"},"start":{"dateTime":"2018-06-26T09:30:00.0000000","timeZone":"UTC"},"end":{"dateTime":"2018-06-26T10:00:00.0000000","timeZone":"UTC"},"location":{"displayName":"Assembly","locationUri":"Assembly@bbd.co.za","locationType":"conferenceRoom","uniqueId":"Assembly@bbd.co.za","uniqueIdType":"directory","address":{"street":"","city":"","state":"","countryOrRegion":"","postalCode":""},"coordinates":{}},"locations":[{"displayName":"Assembly","locationUri":"Assembly@bbd.co.za","locationType":"conferenceRoom","uniqueId":"Assembly@bbd.co.za","uniqueIdType":"directory","address":{"street":"","city":"","state":"","countryOrRegion":"","postalCode":""},"coordinates":{}}],"attendees":[{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Thendo Mulaudzi","address":"thendo@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"David Wilson","address":"davidw@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Tobias Jansen van Noordwyk","address":"tobias@bbd.co.za"}}],"organizer":{"emailAddress":{"name":"Thendo Mulaudzi","address":"thendo@bbd.co.za"}}},{"@odata.etag":"W/\"9p0gw5IKzEionwLKuVl7pwABrw1dcA==\"","id":"AAMkADc2MDhlMmJmLWQ4NjEtNDRkNy04MDE5LTEzZmZlYzNkMzY4YQBGAAAAAACaHcs00Ii9SrnUe3PNkWCNBwDhwZJFtz2ETbVSgn0LrCyfAE5fxuM2AAD2nSDDkgrMSKifAsq5WXunAAGu_kTxAAA=","createdDateTime":"2018-06-25T07:29:25.1709152Z","lastModifiedDateTime":"2018-06-25T07:29:26.6709231Z","changeKey":"9p0gw5IKzEionwLKuVl7pwABrw1dcA==","categories":[],"originalStartTimeZone":"South Africa Standard Time","originalEndTimeZone":"South Africa Standard Time","iCalUId":"040000008200E00074C5B7101A82E0080000000060BF10F5660CD401000000000000000010000000B365586C2C165E47BB37FC3AFAA48F80","reminderMinutesBeforeStart":15,"isReminderOn":false,"hasAttachments":false,"subject":"Ana ODonoghue YEAR END JOURNALS - QUICK MEETING BEFORE UPDATE","bodyPreview":"","importance":"normal","sensitivity":"normal","isAllDay":false,"isCancelled":false,"isOrganizer":false,"responseRequested":true,"seriesMasterId":null,"showAs":"busy","type":"singleInstance","webLink":"https://outlook.office365.com/owa/?itemid=AAMkADc2MDhlMmJmLWQ4NjEtNDRkNy04MDE5LTEzZmZlYzNkMzY4YQBGAAAAAACaHcs00Ii9SrnUe3PNkWCNBwDhwZJFtz2ETbVSgn0LrCyfAE5fxuM2AAD2nSDDkgrMSKifAsq5WXunAAGu%2BkTxAAA%3D&exvsurl=1&path=/calendar/item","onlineMeetingUrl":null,"recurrence":null,"responseStatus":{"response":"accepted","time":"2018-06-25T07:29:25.7177935Z"},"body":{"contentType":"html","content":"<html>\r\n<head>\r\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\r\n<meta content=\"text/html; charset=us-ascii\">\r\n<meta name=\"Generator\" content=\"Microsoft Word 15 (filtered medium)\">\r\n<style>\r\n<!--\r\n@font-face\r\n\t{font-family:\"Cambria Math\"}\r\n@font-face\r\n\t{font-family:Calibri}\r\np.MsoNormal, li.MsoNormal, div.MsoNormal\r\n\t{margin:0cm;\r\n\tmargin-bottom:.0001pt;\r\n\tfont-size:11.0pt;\r\n\tfont-family:\"Calibri\",sans-serif}\r\na:link, span.MsoHyperlink\r\n\t{color:#0563C1;\r\n\ttext-decoration:underline}\r\na:visited, span.MsoHyperlinkFollowed\r\n\t{color:#954F72;\r\n\ttext-decoration:underline}\r\np.msonormal0, li.msonormal0, div.msonormal0\r\n\t{margin-right:0cm;\r\n\tmargin-left:0cm;\r\n\tfont-size:11.0pt;\r\n\tfont-family:\"Calibri\",sans-serif}\r\nspan.EmailStyle18\r\n\t{font-family:\"Calibri\",sans-serif;\r\n\tcolor:windowtext}\r\n.MsoChpDefault\r\n\t{font-size:10.0pt}\r\n@page WordSection1\r\n\t{margin:72.0pt 72.0pt 72.0pt 72.0pt}\r\ndiv.WordSection1\r\n\t{}\r\n-->\r\n</style>\r\n</head>\r\n<body lang=\"EN-ZA\" link=\"#0563C1\" vlink=\"#954F72\">\r\n<div class=\"WordSection1\">\r\n<p class=\"MsoNormal\">&nbsp;</p>\r\n</div>\r\n</body>\r\n</html>\r\n"},"start":{"dateTime":"2018-06-26T09:00:00.0000000","timeZone":"UTC"},"end":{"dateTime":"2018-06-26T09:30:00.0000000","timeZone":"UTC"},"location":{"displayName":"Assembly - VC","locationType":"default","uniqueId":"Assembly - VC","uniqueIdType":"private"},"locations":[{"displayName":"Assembly - VC","locationType":"default","uniqueId":"Assembly - VC","uniqueIdType":"private"}],"attendees":[{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Ana ODonoghue","address":"ana@bbd.co.za"}},{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Finance","address":"Finance@bbd.co.za"}}],"organizer":{"emailAddress":{"name":"Ana ODonoghue","address":"ana@bbd.co.za"}}},{"@odata.etag":"W/\"9p0gw5IKzEionwLKuVl7pwABrw1dOQ==\"","id":"AAMkADc2MDhlMmJmLWQ4NjEtNDRkNy04MDE5LTEzZmZlYzNkMzY4YQBGAAAAAACaHcs00Ii9SrnUe3PNkWCNBwDhwZJFtz2ETbVSgn0LrCyfAE5fxuM2AAD2nSDDkgrMSKifAsq5WXunAAGu_kTwAAA=","createdDateTime":"2018-06-25T07:09:17.556861Z","lastModifiedDateTime":"2018-06-25T07:09:19.1349772Z","changeKey":"9p0gw5IKzEionwLKuVl7pwABrw1dOQ==","categories":[],"originalStartTimeZone":"South Africa Standard Time","originalEndTimeZone":"South Africa Standard Time","iCalUId":"040000008200E00074C5B7101A82E00800000000303EAB2C640CD401000000000000000010000000243C2EB712C64345ADC845131BB72835","reminderMinutesBeforeStart":15,"isReminderOn":false,"hasAttachments":false,"subject":"Russell Davidson titan","bodyPreview":"","importance":"normal","sensitivity":"normal","isAllDay":false,"isCancelled":false,"isOrganizer":false,"responseRequested":true,"seriesMasterId":null,"showAs":"busy","type":"singleInstance","webLink":"https://outlook.office365.com/owa/?itemid=AAMkADc2MDhlMmJmLWQ4NjEtNDRkNy04MDE5LTEzZmZlYzNkMzY4YQBGAAAAAACaHcs00Ii9SrnUe3PNkWCNBwDhwZJFtz2ETbVSgn0LrCyfAE5fxuM2AAD2nSDDkgrMSKifAsq5WXunAAGu%2BkTwAAA%3D&exvsurl=1&path=/calendar/item","onlineMeetingUrl":null,"recurrence":null,"responseStatus":{"response":"accepted","time":"2018-06-25T07:09:18.1349818Z"},"body":{"contentType":"html","content":"<html>\r\n<head>\r\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\r\n<meta content=\"text/html; charset=us-ascii\">\r\n<meta name=\"Generator\" content=\"Microsoft Word 15 (filtered medium)\">\r\n<style>\r\n<!--\r\n@font-face\r\n\t{font-family:\"Cambria Math\"}\r\n@font-face\r\n\t{font-family:Calibri}\r\np.MsoNormal, li.MsoNormal, div.MsoNormal\r\n\t{margin:0cm;\r\n\tmargin-bottom:.0001pt;\r\n\tfont-size:11.0pt;\r\n\tfont-family:\"Calibri\",sans-serif}\r\na:link, span.MsoHyperlink\r\n\t{color:#0563C1;\r\n\ttext-decoration:underline}\r\na:visited, span.MsoHyperlinkFollowed\r\n\t{color:#954F72;\r\n\ttext-decoration:underline}\r\np.msonormal0, li.msonormal0, div.msonormal0\r\n\t{margin-right:0cm;\r\n\tmargin-left:0cm;\r\n\tfont-size:11.0pt;\r\n\tfont-family:\"Calibri\",sans-serif}\r\nspan.EmailStyle18\r\n\t{font-family:\"Calibri\",sans-serif;\r\n\tcolor:windowtext}\r\n.MsoChpDefault\r\n\t{font-size:10.0pt}\r\n@page WordSection1\r\n\t{margin:72.0pt 72.0pt 72.0pt 72.0pt}\r\ndiv.WordSection1\r\n\t{}\r\n-->\r\n</style>\r\n</head>\r\n<body lang=\"EN-GB\" link=\"#0563C1\" vlink=\"#954F72\">\r\n<div class=\"WordSection1\">\r\n<p class=\"MsoNormal\">&nbsp;</p>\r\n</div>\r\n</body>\r\n</html>\r\n"},"start":{"dateTime":"2018-06-25T13:00:00.0000000","timeZone":"UTC"},"end":{"dateTime":"2018-06-25T15:00:00.0000000","timeZone":"UTC"},"location":{"displayName":"Assembly - VC","locationType":"default","uniqueId":"Assembly - VC","uniqueIdType":"private"},"locations":[{"displayName":"Assembly - VC","locationType":"default","uniqueId":"Assembly - VC","uniqueIdType":"private"}],"attendees":[{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Russell Davidson","address":"russell@bbd.co.za"}}],"organizer":{"emailAddress":{"name":"Russell Davidson","address":"russell@bbd.co.za"}}},{"@odata.etag":"W/\"9p0gw5IKzEionwLKuVl7pwABrw1c/Q==\"","id":"AAMkADc2MDhlMmJmLWQ4NjEtNDRkNy04MDE5LTEzZmZlYzNkMzY4YQBGAAAAAACaHcs00Ii9SrnUe3PNkWCNBwDhwZJFtz2ETbVSgn0LrCyfAE5fxuM2AAD2nSDDkgrMSKifAsq5WXunAAGu_kTvAAA=","createdDateTime":"2018-06-25T07:08:49.010144Z","lastModifiedDateTime":"2018-06-25T07:08:51.0101329Z","changeKey":"9p0gw5IKzEionwLKuVl7pwABrw1c/Q==","categories":[],"originalStartTimeZone":"South Africa Standard Time","originalEndTimeZone":"South Africa Standard Time","iCalUId":"040000008200E00074C5B7101A82E0080000000050A33419640CD40100000000000000001000000053D28A324C27E140A7C2747AE340620D","reminderMinutesBeforeStart":15,"isReminderOn":false,"hasAttachments":false,"subject":"Russell Davidson titan","bodyPreview":"","importance":"normal","sensitivity":"normal","isAllDay":false,"isCancelled":false,"isOrganizer":false,"responseRequested":true,"seriesMasterId":null,"showAs":"busy","type":"singleInstance","webLink":"https://outlook.office365.com/owa/?itemid=AAMkADc2MDhlMmJmLWQ4NjEtNDRkNy04MDE5LTEzZmZlYzNkMzY4YQBGAAAAAACaHcs00Ii9SrnUe3PNkWCNBwDhwZJFtz2ETbVSgn0LrCyfAE5fxuM2AAD2nSDDkgrMSKifAsq5WXunAAGu%2BkTvAAA%3D&exvsurl=1&path=/calendar/item","onlineMeetingUrl":null,"recurrence":null,"responseStatus":{"response":"accepted","time":"2018-06-25T07:08:49.6038907Z"},"body":{"contentType":"html","content":"<html>\r\n<head>\r\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\r\n<meta content=\"text/html; charset=us-ascii\">\r\n<meta name=\"Generator\" content=\"Microsoft Word 15 (filtered medium)\">\r\n<style>\r\n<!--\r\n@font-face\r\n\t{font-family:\"Cambria Math\"}\r\n@font-face\r\n\t{font-family:Calibri}\r\np.MsoNormal, li.MsoNormal, div.MsoNormal\r\n\t{margin:0cm;\r\n\tmargin-bottom:.0001pt;\r\n\tfont-size:11.0pt;\r\n\tfont-family:\"Calibri\",sans-serif}\r\na:link, span.MsoHyperlink\r\n\t{color:#0563C1;\r\n\ttext-decoration:underline}\r\na:visited, span.MsoHyperlinkFollowed\r\n\t{color:#954F72;\r\n\ttext-decoration:underline}\r\np.msonormal0, li.msonormal0, div.msonormal0\r\n\t{margin-right:0cm;\r\n\tmargin-left:0cm;\r\n\tfont-size:11.0pt;\r\n\tfont-family:\"Calibri\",sans-serif}\r\nspan.EmailStyle18\r\n\t{font-family:\"Calibri\",sans-serif;\r\n\tcolor:windowtext}\r\n.MsoChpDefault\r\n\t{font-size:10.0pt}\r\n@page WordSection1\r\n\t{margin:72.0pt 72.0pt 72.0pt 72.0pt}\r\ndiv.WordSection1\r\n\t{}\r\n-->\r\n</style>\r\n</head>\r\n<body lang=\"EN-GB\" link=\"#0563C1\" vlink=\"#954F72\">\r\n<div class=\"WordSection1\">\r\n<p class=\"MsoNormal\">&nbsp;</p>\r\n</div>\r\n</body>\r\n</html>\r\n"},"start":{"dateTime":"2018-06-25T09:00:00.0000000","timeZone":"UTC"},"end":{"dateTime":"2018-06-25T09:30:00.0000000","timeZone":"UTC"},"location":{"displayName":"Assembly - VC","locationType":"default","uniqueId":"Assembly - VC","uniqueIdType":"private"},"locations":[{"displayName":"Assembly - VC","locationType":"default","uniqueId":"Assembly - VC","uniqueIdType":"private"}],"attendees":[{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Russell Davidson","address":"russell@bbd.co.za"}}],"organizer":{"emailAddress":{"name":"Russell Davidson","address":"russell@bbd.co.za"}}},{"@odata.etag":"W/\"9p0gw5IKzEionwLKuVl7pwABrw1cuQ==\"","id":"AAMkADc2MDhlMmJmLWQ4NjEtNDRkNy04MDE5LTEzZmZlYzNkMzY4YQBGAAAAAACaHcs00Ii9SrnUe3PNkWCNBwDhwZJFtz2ETbVSgn0LrCyfAE5fxuM2AAD2nSDDkgrMSKifAsq5WXunAAGu_kTuAAA=","createdDateTime":"2018-06-25T07:07:55.6354411Z","lastModifiedDateTime":"2018-06-25T07:07:57.3854309Z","changeKey":"9p0gw5IKzEionwLKuVl7pwABrw1cuQ==","categories":[],"originalStartTimeZone":"South Africa Standard Time","originalEndTimeZone":"South Africa Standard Time","iCalUId":"040000008200E00074C5B7101A82E0080000000090AC45FB630CD401000000000000000010000000BB9CA373E64DBD4DA2E4713949871F27","reminderMinutesBeforeStart":15,"isReminderOn":false,"hasAttachments":false,"subject":"Russell Davidson titan","bodyPreview":"","importance":"normal","sensitivity":"normal","isAllDay":false,"isCancelled":false,"isOrganizer":false,"responseRequested":true,"seriesMasterId":null,"showAs":"busy","type":"singleInstance","webLink":"https://outlook.office365.com/owa/?itemid=AAMkADc2MDhlMmJmLWQ4NjEtNDRkNy04MDE5LTEzZmZlYzNkMzY4YQBGAAAAAACaHcs00Ii9SrnUe3PNkWCNBwDhwZJFtz2ETbVSgn0LrCyfAE5fxuM2AAD2nSDDkgrMSKifAsq5WXunAAGu%2BkTuAAA%3D&exvsurl=1&path=/calendar/item","onlineMeetingUrl":null,"recurrence":null,"responseStatus":{"response":"accepted","time":"2018-06-25T07:07:56.2135626Z"},"body":{"contentType":"html","content":"<html>\r\n<head>\r\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\r\n<meta content=\"text/html; charset=us-ascii\">\r\n<meta name=\"Generator\" content=\"Microsoft Word 15 (filtered medium)\">\r\n<style>\r\n<!--\r\n@font-face\r\n\t{font-family:\"Cambria Math\"}\r\n@font-face\r\n\t{font-family:Calibri}\r\np.MsoNormal, li.MsoNormal, div.MsoNormal\r\n\t{margin:0cm;\r\n\tmargin-bottom:.0001pt;\r\n\tfont-size:11.0pt;\r\n\tfont-family:\"Calibri\",sans-serif}\r\na:link, span.MsoHyperlink\r\n\t{color:#0563C1;\r\n\ttext-decoration:underline}\r\na:visited, span.MsoHyperlinkFollowed\r\n\t{color:#954F72;\r\n\ttext-decoration:underline}\r\np.msonormal0, li.msonormal0, div.msonormal0\r\n\t{margin-right:0cm;\r\n\tmargin-left:0cm;\r\n\tfont-size:11.0pt;\r\n\tfont-family:\"Calibri\",sans-serif}\r\nspan.EmailStyle18\r\n\t{font-family:\"Calibri\",sans-serif;\r\n\tcolor:windowtext}\r\n.MsoChpDefault\r\n\t{font-size:10.0pt}\r\n@page WordSection1\r\n\t{margin:72.0pt 72.0pt 72.0pt 72.0pt}\r\ndiv.WordSection1\r\n\t{}\r\n-->\r\n</style>\r\n</head>\r\n<body lang=\"EN-GB\" link=\"#0563C1\" vlink=\"#954F72\">\r\n<div class=\"WordSection1\">\r\n<p class=\"MsoNormal\">&nbsp;</p>\r\n</div>\r\n</body>\r\n</html>\r\n"},"start":{"dateTime":"2018-06-25T07:00:00.0000000","timeZone":"UTC"},"end":{"dateTime":"2018-06-25T08:30:00.0000000","timeZone":"UTC"},"location":{"displayName":"Assembly - VC","locationType":"default","uniqueId":"Assembly - VC","uniqueIdType":"private"},"locations":[{"displayName":"Assembly - VC","locationType":"default","uniqueId":"Assembly - VC","uniqueIdType":"private"}],"attendees":[{"type":"required","status":{"response":"none","time":"0001-01-01T00:00:00Z"},"emailAddress":{"name":"Russell Davidson","address":"russell@bbd.co.za"}}],"organizer":{"emailAddress":{"name":"Russell Davidson","address":"russell@bbd.co.za"}}}]}';

// var object = '{'+
//     '"value": ['+
//        '{'+
//             '"@odata.etag": "W",'+
//             '"id": "AAMkAGViNmFlOWM3LTM2NzgtNDgwNC05YjE3LWQ0NTgxZmVmOWY1MQBGAAAAAAD4hs8tRUntR4xRgGMS3dgCBwBQSh-ks3iYQ6o8ncVl8RllACVZ2y4KAAC4Do5UaHYjRpqZYCXJfo5AAAGjbus9AAA=",'+
//             '"createdDateTime": "2018-05-30T15:24:03.9329944Z",'+
//             '"lastModifiedDateTime": "2018-05-30T15:24:06.6516798Z",'+
//             '"changeKey": "uA6OVGh2I0aamWAlyX6OQAABo6GEhg==",'+
//             '"categories": [],'+
//             '"originalStartTimeZone": "South Africa Standard Time",'+
//             '"originalEndTimeZone": "South Africa Standard Time",'+
//             '"iCalUId": "040000008200E00074C5B7101A82E0080000000070F07D9B3AF8D30100000000000000001000000079B49DEC5B7EEA4A899772F9485A57CC",'+
//             '"reminderMinutesBeforeStart": 15,'+
//             '"isReminderOn": false,'+
//             '"hasAttachments": false,'+
//             '"subject": "Tony Van der Linden test",'+
//             '"bodyPreview": "",'+
//             '"importance": "normal",'+
//             '"sensitivity": "normal",'+
//             '"isAllDay": false,'+
//             '"isCancelled": false,'+
//             '"isOrganizer": false,'+
//             '"responseRequested": true,'+
//             '"seriesMasterId": null,'+
//             '"showAs": "busy",'+
//             '"type": "singleInstance",'+
//             '"webLink": "https://outlook.office365.com/owa/?itemid=AAMkAGViNmFlOWM3LTM2NzgtNDgwNC05YjE3LWQ0NTgxZmVmOWY1MQBGAAAAAAD4hs8tRUntR4xRgGMS3dgCBwBQSh%2Fks3iYQ6o8ncVl8RllACVZ2y4KAAC4Do5UaHYjRpqZYCXJfo5AAAGjbus9AAA%3D&exvsurl=1&path=/calendar/item",'+
//             '"onlineMeetingUrl": null,'+
//             '"recurrence": null,'+
//             '"responseStatus": {'+
//                 '"response": "accepted",'+
//                 '"time": "2018-05-30T15:24:04.9016712Z"'+
//             '},'+
//             '"body": {'+
//                 '"contentType": "html",'+
//                 '"content": "here"'+
//             '},'+
//             '"start": {'+
//                 '"dateTime": "2018-05-30T16:30.0000000",'+
//                 '"timeZone": "UTC"'+
//             '},'+
//             '"end": {'+
//                 '"dateTime": "2018-05-30T18:45 .0000000",'+
//                 '"timeZone": "UTC"'+
//             '},'+
//             '"location": {'+
//                 '"displayName": "Collaboration Centre Room",'+
//                 '"locationType": "default",'+
//                 '"uniqueId": "Collaboration Centre Room",'+
//                 '"uniqueIdType": "private"'+
//             '},'+
//             '"locations": ['+
//                 '{'+
//                     '"displayName": "Collaboration Centre Room",'+
//                     '"locationType": "default",'+
//                     '"uniqueId": "Collaboration Centre Room",'+
//                     '"uniqueIdType": "private"'+
//                 '}'+
//             '],'+
//             '"attendees": ['+
//                 '{'+
//                     '"type": "required",'+
//                     '"status": {'+
//                         '"response": "none",'+
//                         '"time": "0001-01-01T00:00:00Z"'+
//                     '},'+
//                     '"emailAddress": {'+
//                         '"name": "Tony Van der Linden",'+
//                         '"address": "tonyv@bbd.co.za"'+
//                     '}'+
//                 '}'+
//             '],'+
//             '"organizer": {'+
//                 '"emailAddress": {'+
//                     '"name": "Tony Van der Linden",'+
//                     '"address": "tonyv@bbd.co.za"'+
//                 '}'+
//             '}'+
//         '}'+
//     ']'+
// '}';