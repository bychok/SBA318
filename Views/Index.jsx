<!DOCTYPE html>
<html>
<head>
    <title>My Express App</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <h1>Welcome to My Express App</h1>
    <form action="/api/items" method="post">
        <input type="text" name="content" placeholder="Add new item" required>
        <button type="submit">Submit</button>
    </form>
    <ul>
        <% items.forEach(function(item) { %>
            <li><%= item.content %></li>
        <% }); %>
    </ul>
</body>
</html>


// import React, { Component } from "react";

// export default class Index extends Component {
//   render() {
//     const { fruits } = this.props;
//     console.log(fruits);
//     return (
//       <>
//         <div>
//           <h1>Fruits Index Page</h1>
//           <ul>
//             {fruits.map((fruit, i) => {
//               return (
//                 <li key={i}>
//                   The <a href={`/fruits/${i}`}>{fruit.name}</a> is {fruit.color}{" "}
//                   <br></br>
//                   {fruit.readyToEat
//                     ? `It is ready to eat`
//                     : `It is not ready to eat`}
//                   <br />
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </>
//     );
//   }
// }
