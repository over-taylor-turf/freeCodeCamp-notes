// Only change code below this line
function urlSlug(title) {
    return title
    .trim()
    .split(/\s+/)
    .join("-")
    .toLowerCase()
}
    // Only change code above this line

    console.log(urlSlug(" Winter Is  Coming"))