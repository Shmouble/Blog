function Blog(body, date) {
    this.body = body;
    this.date = date;
}

var blog = [ new Blog("Got the new cube I ordered. It's a real pearl.", new Date("08/14/2008")),
             new Blog("Solved the new cube but of course, now I'm bored and shopping for a new one.", new Date("08/19/2008")),
             new Blog("Managed to get a headache toiling over the new cube. Gotta nap.", new Date("08/16/2008")),
             new Blog("Found a 7x7x7 cube for sale online. Yikes! That one could be a beast.", new Date("08/21/2008")) ];

blog.sort(function(blog1, blog2){
    return blog2.date - blog1.date;
});

// Show the list of blog entries
function showBlog(numEntries) {
  // Adjust the number of entries to show the full blog, if necessary
  if (!numEntries)
    numEntries = blog.length;
    
  // Show the blog entries
  var i = 0;
  var blogText = "";
    
  while (i < blog.length && i < numEntries) {
    // Use a gray background for every other blog entry
    if (i % 2 == 0){
      blogText += "<p style='background-color:#EEEEEE'>";
    } else {
      blogText += "<p>";
    }
      
    // Generate the formatted blog HTML code
    blogText += "<strong>" + (blog[i].date.getMonth()+1) + "/" + blog[i].date.getDate() + "/" + blog[i].date.getFullYear() + "</strong><br />" + blog[i].body + "</p>";
    i++;
  }
  // Set the blog HTML code on the page
  document.getElementById("blog").innerHTML = blogText;
}

function searchBlog(){
    var searchText = document.getElementById("searchtext").value;
    var searchResult = "";
    
    for (var i=0; i<blog.length; i++){        
        if(blog[i].body.toLowerCase().indexOf(searchText.toLowerCase()) != -1){
            searchResult += "<br>" + (blog[i].date.getMonth()+1) + "/" + blog[i].date.getDate() + "/" + blog[i].date.getFullYear() + "<br>" + blog[i].body + "<br>";
        }     
        
    }
    document.getElementById("searchresult").innerHTML = searchResult;
    
    if(searchResult == ""){
       document.getElementById("searchresult").innerHTML = "<br> No results found in this blog";
    }
}

