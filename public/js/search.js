$(document).ready(() => {
    const searchForm = $("search.search");
    const criteria1 = $("input#search1");
    const criteria2 = $("input#search2");
    const criteria3 = $("input#search3");

    searchForm.on("submit", event => {
        event.preventDefault();
        const userData = {
            search1: criteria1.val().trim(),
            search2: criteria2.val().trim(),
            search3: criteria3.val().trim()
        };
    });

    // Code to be used to generate results on page.
    // // Getting the initial list of posts
    // getPosts();
    // // InitializeRows handles appending all of our constructed post HTML inside
    // // blogContainer
    // function initializeRows() {
    //     blogContainer.empty();
    //     var postsToAdd = [];
    //     for (var i = 0; i < posts.length; i++) {
    //         postsToAdd.push(createNewRow(posts[i]));
    //     }
    //     blogContainer.append(postsToAdd);
    // }

})