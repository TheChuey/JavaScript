JS PROMISES

let sleepyGreeting = new Promise((resolve, reject) => {   // greeting object now pass in the promise---new promise then it takes 2 args(resolve reject) now the arrow function
    setTimeout(() => {                                // now code block--setTimeout function-use an arrow function
      resolve('Hello....')                                 // call resolve-anything inside will run if successful
    }, 2000);                                                  // 2000 = 2 seconds will return hello
                                                                     // if api doesn't work
    setTimeout(() => {                                // if not successful
      reject(Error('Too sleepy...'))                // now use reject and pass in Error which is a reserved function and takes in an arg--for this Too sleepy
    }, 2000);                                                  // 2 seconds
  });
  
  sleepyGreeting                                     // now we call sleepy greeting liek a function
    .then(data => {                                    // then(reserved word expected by promise) data is a specific element-whenever promise comes back, what is returned is the data             
      console.log(data);                            // now we console log the data
    })                                                             // now if it goes wrong
    .catch(err => {                                      // catch speaks to reject-which catches the err
      console.error(err);                             // then console log the err
    });

    //a promise allows you to call the api and show the page-and when items from API show it will populate(if there is an error you tell it what to return)
Gravatar for marineepo@gmail.com
Benjamin NicklausDecember 5th 2019 2:57:49 pm
Using Fetch Promise to Communicate with API

//promises to communicate with ouside services
//asycronis behavior --ability to call api without stopping the api for the data flow
//store in a const variable

//each console log with print out in the JS console----->
//Starting fetch call
//after fetch call
//promise>
//after program has run

console.log('Starting fetch call');                                                                  // console log for starting the fetch call
const postsPromise = fetch('https://api.dailysmarty.com/posts')        //created const variable called post promise-next call fetch(built in promise gives a promise back) one arg the api
console.log('After fetch call');                                                                        // then console log after the fetch call
console.log(postsPromise);                                                                           // then console log the actual fetch call
console.log('After program has run');                                                         // then console log the After program runs

postsPromise                                         
    .then(data => data.json())                                             // .then(expects) data with an arrow function now say data.json--which converts the data into json data
    .then(data => {                                                                 // now add a then data with an arrow function to get to posts now
        data.posts.forEach((item) => {                                 // now say data.posts(parsing json data-because there was a post object) now use a forEach loop which takes the item which we iterate over
            console.log(item.title);                                          // now console log the item.title(access to the array which has a title-iterating over above)
        });                                
    })
    .catch((err) => {                                                         // this part is for if it gets rejected and we need to pass in the error
        console.log(err);                                                    // just console log what ever the error is here
    })