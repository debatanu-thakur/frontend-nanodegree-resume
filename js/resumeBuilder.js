/*
Object Creations
 */
/* Bio object */
function Bio(name, role, contacts, welcomeMessage, skills, biopic) {
    var bio = {
        name: name,
        role: role,
        contacts: contacts,
        welcomeMessage: welcomeMessage,
        skills: skills, //array

        biopic: biopic,
        display: function() {

        }
    };
    return bio;
}

/* Contact Object*/
function Contact(mobile, email, github, twitter, location) {
    var contact = {
        mobile: mobile,
        email: email,
        github: github,
        twitter: twitter,
        location: location
    };
    return contact;
}

/*Education Object*/
function Education() {
    var education = {
        schools: [],
        onlineCourses: [],
        display: function() {

        }
    };
    return education;
}

/*School Object*/
function School(name, location, degree, majors, dates, url) {
    var school = {
        name: name,
        location: location,
        degree: degree,
        majors: majors, //array

        dates: dates,
        url: url
    };
    return school;
}

/*Online Course object*/
function OnCourse(title, school, dates, url) {
    var course = {
        title: title,
        school: school,
        dates: dates,
        url: url
    };
    return course;
}

/*Work Object*/
function Work() {
    var work = {
        jobs: [],
        display: function() {}
    };
    return work;
}

/*Job Object*/
function Job(employer, title, location, dates, description) {
    var job = {
        employer: employer,
        title: title,
        location: location,
        dates: dates, //can be in progress

        description: description
    };
    return job;
}

/*Project Details Object*/
function ProjectDetail() {
    var details = {
        projects: [],
        display: function() {

        }
    };
    return details;
}

/*Project Object*/
function Project(title, dates, description, images) {
    var project = {
        title: title,
        dates: dates, //hyphenated string
        description: description,
        images: images //array of strings with url
    };
    return project;
}

/*
Main function
*/
/*This is where all the information is populated*/
/*And all display related operation is done*/

function Main() {
    var bio = {},
        education = {},
        work = {},
        projects = {};

    /*bio info*/
    bio = FillInformation('bio');
    AddDisplay('bio', bio);
    bio.display();

    /*work info*/
    work = FillInformation('work');
    AddDisplay('work', work);
    work.display();

    /*projects info*/
    projects = FillInformation('projects');
    AddDisplay('projects', projects);
    projects.display();

    /*Eductaion info*/
    education = FillInformation('education');
    AddDisplay('education', education);
    education.display();

}

function FillInformation(info) {
    switch (info.toLowerCase()) {
        case 'bio':
            var contact = Contact('650-555-5555', 'iamthejoker@gotham.com', 'https://gitub.com/jokes', 'https://twitter.com/jokes@gotham', 'San Diego');
            var newBio = Bio('John Design', 'Awesome Web Dev', contact, 'Welcome to the world of awesomeness', ['jokes', 'awesome cook', 'part time musician', 'sometimes terrorize gotham'], 'http://placehold.it/350x350');
            return newBio;
            break;
        case 'education':
            var edu = Education();
            var school1 = School('South Hampton University', 'Hampton, VA', 'Bachelors Degree', ['CS'], 'May, 2011', 'https://gotoSHU.go');
            var school2 = School('Hampshire University', 'Jacksonville, FL', 'High School', ['Electronics'], 'May, 2005', 'https://gotoHAMPSHIRE.go');
            edu.schools.push(school1);
            edu.schools.push(school2);
            var online1 = OnCourse('Front-End Web Dev', 'Udacity', 'September, 2016', 'https://udacity.com');
            edu.onlineCourses.push(online1);
            return edu;
            break;
        case 'work':
            var job1 = Job('Panet Express', 'Delivery Boy', 'Brooklyn, NY', '2012-08-08', 'There was once a Delivery. And it was a fun time. This is what a Delivery express Boy details about.');
            var job2 = Job('Phoenix', 'Express Delivery Boy', 'Manhattan, Ny', '2015-08-08', 'There was once a Delivery. And it was a fun time. This is what a Delivery express Boy details about.');
            var work = Work();
            work.jobs.push(job1);
            work.jobs.push(job2);
            return work;
            break;
        case 'projects':
            var p1 = Project('Sample Project 1', 'January, 2014', 'This is to say that lorem ipsum gosum is awesome. The detail are a little sketchy now.', ['http://placehold.it/150x150']);
            var p2 = Project('Definite Project 1', 'January, 2016', 'This is to say that lorem ipsum gosum is awesome. The detail are a little sketchy now.', ['http://placehold.it/150x150']);
            var projects = ProjectDetail();
            projects.projects.push(p1);
            projects.projects.push(p2);
            return projects;
            break;
    }
}

function AddDisplay(info, objInfo) {
    var displayFn = {};
    switch (info.toLowerCase()) {
        case 'bio':
            displayFn = function() {
                var headerName = {
                    name: HTMLheaderName.replace('%data%', objInfo.name),
                    role: HTMLheaderRole.replace('%data%', objInfo.role)
                };
                var biopic = {
                    pic: HTMLbioPic.replace('%data%', objInfo.biopic),
                    message: HTMLwelcomeMsg.replace('%data%', objInfo.welcomeMessage)
                };
                //Prepend and append
                $('#header').prepend(headerName.role);
                $('#header').prepend(headerName.name);
                $('#header').append(biopic.pic);
                $('#header').append(biopic.message);
                $('#header').append(HTMLskillsStart);
                objInfo.skills.forEach(function(item, index, arr) {
                    $('#header').append(HTMLskills.replace('%data%', item));
                });
                var propNames = Object.getOwnPropertyNames(objInfo.contacts);
                propNames.forEach(function(item, index) {
                    var generic = HTMLcontactGeneric.replace('%contact%', item).replace('%data%', objInfo.contacts[item]);
                    $('#topContacts').append(generic);
                    $('#footerContacts').append(generic);
                });
            };
            break;
        case 'education':
            displayFn = function() {

                var schoolHTML = $(HTMLschoolStart);
                for (var j = 0; j < objInfo.schools.length; j++) {

                    var s = objInfo.schools[j];
                    schoolHTML.append(HTMLschoolName.replace('%data%', s.name) +
                        HTMLschoolDegree.replace('%data%', s.degree));
                    schoolHTML.append(HTMLschoolDates.replace('%data%', s.dates));
                    schoolHTML.append(HTMLschoolLocation.replace('%data%', s.location));
                    var majorStr = s.majors.join(',');
                    schoolHTML.append(HTMLschoolMajor.replace('%data%', majorStr));

                }

                var eduHTML = $(HTMLschoolStart);
                for (j = 0; j < objInfo.onlineCourses.length; j++) {
                    var c = objInfo.onlineCourses[j];
                    eduHTML.append(HTMLonlineTitle.replace('%data%', c.title) +
                        HTMLonlineSchool.replace('%data%', c.school));
                    eduHTML.append(HTMLonlineDates.replace('%data%', c.dates));
                    eduHTML.append(HTMLonlineURL.replace('%data%', c.url));
                }
                /*Append and prepend DOM*/
                $('#education').append(schoolHTML);
                $('#education').append(HTMLonlineClasses);
                $('#education').append(eduHTML);
            };
            break;
        case 'work':
            displayFn = function() {
                this.jobs.forEach(function(item, index, arr) {
                    var work = $(HTMLworkStart);
                    work.append(HTMLworkEmployer.replace('%data%', item.employer) +
                        HTMLworkTitle.replace('%data%', item.title));
                    work.append(HTMLworkDates.replace('%data%', item.dates));
                    work.append(HTMLworkLocation.replace('%data%', item.location));
                    work.append(HTMLworkDescription.replace('%data%', item.description));
                    /*Append and prepend*/
                    $('#workExperience').append(work);
                });

            }; //end of function display
            break;
        case 'projects':
            displayFn = function() {
                /*Append and prepend*/
                for (var i = 0; i < this.projects.length; i++) {
                    var temp = this.projects[i];
                    var projHTML = $(HTMLprojectStart);
                    projHTML.append(HTMLprojectTitle.replace('%data%', temp.title));
                    projHTML.append(HTMLprojectDates.replace('%data%', temp.dates));
                    projHTML.append(HTMLprojectDescription.replace('%data%', temp.description));
                    for (var j = 0; j < temp.images.length; j++) {
                        var img = temp.images[j];
                        projHTML.append(HTMLprojectImage.replace('%data%', img));
                    }

                    /*Append and prepend to DOM*/
                    $('#projects').append(projHTML);
                }

            };
            break;
    }
    objInfo.display = displayFn;

}
Main();
