
$.getJSON("https://api.github.com/orgs/PyratLabs/repos", function(data) {
    var items = [];
    $.each(data, function(key, val) {
      //if (val.name.search("ansible-role") != "-1") {
        html_out = "<li id='" + key + "'>"
          + "<a href='" + val.html_url + "'>"
          + val.name
          + "</a><br />"
          + val.description
          + "</li>"
        items.push(html_out);
      //}
    });

    $("<ul/>", {
      "class": "projects",
      html: items.join("")
    }).appendTo(".projects");
  });
