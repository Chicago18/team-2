files = {
    "file1": {
        "title": "Test Post 1",
        "description": "basic 1-2 sentence intro description",
        "link": "#",
        "tags": ["erg", "brazil"]
    },
    "file2": {
        "title": "Test Post 2",
        "description": "basic 1-2 sentence intro description",
        "link": "#",
        "tags": ["brazil"]
    },
    "file3": {
        "title": "Test Post 3",
        "description": "basic 1-2 sentence intro description",
        "link": "#",
        "tags": ["india", "california"]
    },
    "file4": {
        "title": "Test Post 4",
        "description": "basic 1-2 sentence intro description",
        "link": "#",
        "tags": ["executives", "erg"]
    },
    "file5": {
        "title": "Test Post 5",
        "description": "basic 1-2 sentence intro description",
        "link": "#",
        "tags": ["hr", "d&i"]
    }
}

$(document).ready(function () {
    $("#searchTerm").on("input", function () {
        var term = $('#searchTerm').val().toLowerCase();
        var searchResults = [];        
        $.each(files, function (index, value) {
            if (value.title.toLowerCase().indexOf(term) >= 0) {
                searchResults.push([value.title, value.link]);
            } else if (value.description.toLowerCase().indexOf(term) >= 0) {
                searchResults.push([value.title, value.link]);
            } else if ($.inArray(term, value.tags) != -1) {
                searchResults.push([value.title, value.link]);
            }
        });
        var res = "";
        $.each(searchResults, function (index, value) {
            res += '<div class = "result"><a href="' + value[1] + '">' + value[0] + '</a></div>';
        });
        if (!$("#searchTerm").val()) {
            res = "";
        };
        
        $(".resultList").html(res);
    });


    //Cards and Resources 
    var allCards = '';
    $.each(files, function (index, value) {
        var newCard = '';
        newCard += '<div class="card file-card"><div class="card-body"><h5 class="card-title file-title">' + value.title + '</h5><p class="card-text file-description">' + value.description + '</p><a href="' + value.link + '" class="btn btn-light file-link">Open file</a><div class="file-tags">'
        $.each(value.tags, function (i, v) {
            newCard += '<div class="tag">' + v + '</div>'
        });
        newCard += '</div></div></div>'
        allCards += newCard
    });
    $(".file-cards").html(allCards);
});

