/*
This is empty on purpose! Your code to build the resume will go here.
 */

var formatedName = HTMLheaderName.replace ("%data%", "Austin Paxton");
var formatedRole = HTMLheaderRole.replace ("%data%", "Web-Developer");

$ ("#header").prepend(formatedName);
$ ("#header").prepend(formatedRole);


var work = {
  "jobs" : [

  {
    "employer" : "Parents",
    "title" : "Employee",
    "location" : "My House",
    "dates" : "Once a week",
    "description" : "Mow the big yard the edge every where else"
  }

  ]

};
function displayWork (){
  for (var indexCount = 0; indexCount < work.jobs.length; indexCount++){


   $ ("#workExperience").append(HTMLworkStart);

   var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[indexCount].employer);
   var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[indexCount].title);
   var formattedTitleEmployer = formattedEmployer + formattedTitle;

   $ (".work-entry:last").append(formattedTitleEmployer);

   var formattedDates = HTMLworkDates.replace("%data%", work.jobs[indexCount].dates);
   $ (".work-entry:last").append(formattedDates);

   var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[indexCount].location);
   $ (".work-entry:last").append(formattedLocation);

   var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[indexCount].description);
   $ (".work-entry:last").append(formattedDescription);

 }
}

var bio = {
  "name" : "Austin Paxton",
  "role" : "Computer Scientist",
  "WelcomeMessage" : "This is my super rachet RESUME",
  "skills" : ["Java", "HTML", "CSS", "JavaScript"],

  "contacts" : {
    "number" : "214-906-8402",
    "email" : "austinpaxton@yahoo.com",
    "github" : "austinpaxton",
    "twitter" : "@austindpaxton",
    "locatoin" : "Lucas, Texas"
  }
};
bio.display = function ()
{
  var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.WelcomeMessage);
  $ (".welcome-message").append(formattedMessage);

  var formattedNum = HTMLcontactGeneric.replace("%data%", bio.contacts.number);
  $ ("#topContacts").append(formattedNum);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $ ("#topContacts").append(formattedEmail);

  var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
  $ ("#topContacts").append(formattedGit);

  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $ ("#topContacts").append(formattedTwitter);

  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.locatoin);
  $ ("#topContacts").append(formattedLocation);
};


var projects = {
  "projects" : [

  {
    "title" : "Keep care of chickens",
    "dates" : "May 30 - Present",
    "description" : "Have to feed and water them and also change the hay once a week",
    "images" : ["img1", "img2", "img3"]
  }

]
};
projects.display = function (){
  for (var indexCount = 0; indexCount < projects.projects.length; indexCount++){

    $ ("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLworkTitle.replace("%data%", projects.projects[indexCount].title);
    $ (".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLworkDates.replace("%data%", projects.projects[indexCount].dates);
    $ (".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", projects.projects[indexCount].description);
    $ (".project-entry:last").append(formattedDescription);
  }
};



var education = {
  "schools" : [
  {
    "name" : "Lovejoy High School",
    "location" : "Lucas, Texas",
    "dates" : "August 2016 - May 2020",
    "degree" : "High School",
    "url" : "http://lhs.lovejoyisd.net/",
    "majors" : "none"
  }

],

"onlineCorses" : [

  {
    "title" : "Front-End Webesign",
    "school" : "Udacity",
    "dates" : 2017,
    "url" : "http://udacity.com/"
  }
]

};


education.display = function(){
for (var indexCount = 0; indexCount < projects.projects.length; indexCount++){
  $ ("#education").append(HTMLschoolStart);

  var formattedName = HTMLschoolName.replace("%data%", education.schools[indexCount].name);
  $ ("#education").append(formattedName);

  var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[indexCount].location);
  $ ("#education").append(formattedLocation);

  var formattedDates = HTMLschoolDates.replace("%data%", education.schools[indexCount].dates);
  $ ("#education").append(formattedDates);

  var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[indexCount].degree);
  $ ("#education").append(formattedDegree);

  var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[indexCount].majors);
  $ ("#education").append(formattedMajors);
}

for (var indexCount = 0; indexCount < projects.projects.length; indexCount++){
  $ ("#education").append(HTMLonlineClasses);

  var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCorses[indexCount].title);
  $ ("#education").append(formattedTitle);

  var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCorses[indexCount].school);
  $ ("#education").append(formattedSchool);

  var formattedDatess = HTMLonlineDates.replace("%data%", education.onlineCorses[indexCount].dates);
  $ ("#education").append(formattedDatess);

  var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCorses[indexCount].url);
  $ ("#education").append(formattedUrl);

}

};

 if (bio.skills.length > 0)
 {
   $ ("#header").append(HTMLskillsStart);

   var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
   $ ("#skills").append(formattedSkill);

   formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
   $ ("#skills").append(formattedSkill);

   formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
   $ ("#skills").append(formattedSkill);

   formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
   $ ("#skills").append(formattedSkill);

 }


displayWork();
projects.display();
bio.display();
education.display();


$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});


function inName (name)
{
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].splice(0,1).toUpperCase();
  name[0].splice(1).toLowerCase();

  return name[0] + " " + name [1];
}
$ ('#main').append(internationalizeButton);





$ ("#mapDiv").append(googleMap);
