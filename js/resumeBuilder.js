
/*
Object Creations
 */
 /* Bio object */
 function Bio(name,role,contacts,welcomeMessage,skills,biopic){
   var bio={
     name: name
     ,role: role
     ,contacts: contacts
     ,welcomeMessage: welcomeMessage
     ,skills: skills
     ,biopic: biopic
     ,display: function(){

     }
   };
   return bio;
 }

 /* Contact Object*/
 function Contact(mobile,email,github,twitter,location){
   var contact = {
     mobile: mobile
     ,email: email
     ,github: github
     ,twitter: twitter
     ,location: location
   };
   return contact;
 }

 /*Education Object*/
 function Education(){
   var education = {
     schools: []
     ,onlineCourses: []
     ,display: function(){

     }
   };
   return education;
 }

 /*School Object*/
 function School(name,location,degree,majors,dates,url){
   var school = {
     name: name
     ,location: location
     ,degree: degree
     ,majors: majors
     ,dates: dates
     ,url: url
   };
   return school;
 }

 /*Online Course object*/
 function onCourse(title,school,dates,url){
   var course={
     title: title
     ,school: school
     ,dates: dates
     ,url: url
   };
   return onCourse;
 }

 /*Work Object*/
 function Work(){
   var work= {
     jobs: []
     ,display: function(){
     }
   };
   return work;
 }

 /*Job Object*/
 function Job(employer,title,location,dates,description){
   var job= {
     employer: employer
     ,title: title
     ,location: location
     ,dates: dates
     ,description: description
   };
   return job;
 }

/*Project Details Object*/
function ProjectDetail(){
    var details = {
      projects: []
      ,display: function(){

      }
    };
    return details;
}

/*Project Object*/
function Project(title,dates,description,images){
  var project= {
    title: title
    ,dates: dates
    ,description: description
    ,images: images
  };
  return project;
}

/*
Main function
*/
/*This is where all the information is populated*/
/*And all display related operation is done*/

function Main(){
  var bio = {},education = {}, work= {}, projects={};

}
