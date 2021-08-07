
import axios from "axios";
const functions = {
  divide: (num1, num2) => {
    if (num2 === 0) {
      throw new Error('Divide by zero error')
    }
    else if (isNaN(num1) || isNaN(num2)) {
      throw new Error('Invalid error')
    }
    return num1 / num2;
  },
  toUpper: (title) => {
    const arr = title.split(" ")
    const newArr = arr.map(str => str.charAt(0).toUpperCase() + str.slice(1))
    return newArr.join(" ");
  },
  getUserPosts() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        let resp = response.data
        let items = new Array(11).fill(0);
        resp.map(item => {
          return items[item.userId]++;
        })
        let max = items[1];
        for (let i = 2; i <= items.length; i++) {
          if (items[i] >= max) {
            max = i
          }
        }
        const titles = resp.filter(item => item.userId === max).map(item => {
          return item.title
        })
        return titles;
      }).catch(err => 'Error occured');
  }
};
module.exports = functions;