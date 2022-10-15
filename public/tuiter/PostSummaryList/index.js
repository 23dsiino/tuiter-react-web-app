import items from "./posts.js"
import PostSummaryItem from "./PostSummaryItem.js"

const PostSummaryList = () => {
    return (`
    <ul class = "list-group">
    ${items.map(item => {
        return (PostSummaryItem(item));
    }).join('')}
    </ul>
 
    `);
}

$('#post-summary-list').append(
    `${PostSummaryList()}`);

console.log("hey")


export default PostSummaryList;

