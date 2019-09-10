var mongoose   = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://images.unsplash.com/photo-1526491109672-74740652b963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        description: "Bacon ipsum dolor amet beef ribs ball tip flank frankfurter. Pork loin ham hamburger, cow t-bone picanha chuck chicken sausage. Meatloaf shoulder pancetta biltong, boudin chuck venison. Tri-tip tongue shankle ribeye chicken boudin jowl bacon brisket. Pancetta jerky flank, bresaola meatloaf doner t-bone beef prosciutto pork belly tongue. Ball tip spare ribs boudin biltong chicken pig meatloaf pork chop tongue bacon sirloin jowl."
    },
    {
        name: "KOA",
        image: "https://images.unsplash.com/photo-1546811740-23e671faf31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        description: "Bacon ipsum dolor amet beef ribs ball tip flank frankfurter. Pork loin ham hamburger, cow t-bone picanha chuck chicken sausage. Meatloaf shoulder pancetta biltong, boudin chuck venison. Tri-tip tongue shankle ribeye chicken boudin jowl bacon brisket. Pancetta jerky flank, bresaola meatloaf doner t-bone beef prosciutto pork belly tongue. Ball tip spare ribs boudin biltong chicken pig meatloaf pork chop tongue bacon sirloin jowl."
    },
    {
        name: "Sunrift",
        image: "https://images.unsplash.com/photo-1537565266759-34bbc16be345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        description: "Bacon ipsum dolor amet beef ribs ball tip flank frankfurter. Pork loin ham hamburger, cow t-bone picanha chuck chicken sausage. Meatloaf shoulder pancetta biltong, boudin chuck venison. Tri-tip tongue shankle ribeye chicken boudin jowl bacon brisket. Pancetta jerky flank, bresaola meatloaf doner t-bone beef prosciutto pork belly tongue. Ball tip spare ribs boudin biltong chicken pig meatloaf pork chop tongue bacon sirloin jowl."
    }
]

function seedDB(){
    // Remove all campgrounds
    Campground.deleteMany({}, function(err){
        if(err){
            console.log(err)
        } 
        console.log("removed campgrounds!");
        // Add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    // Create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Created new comment");
                            }
                        });
                }
            });
        });
    });
    
    

    // Add a few comments
}

module.exports = seedDB;