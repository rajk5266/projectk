console.log("person1:shows ticket");
console.log("person2:shows ticket");

const preMovie=async()=>{

    const promiseWifeBriningTicks=new Promise((resolve ,reject)=>{
        setTimeout(()=>resolve("ticket"),3000)
    });
    const getPopcorn=new Promise((resolve,reject)=>resolve(`popcorn`));
    const getButter=new Promise((resolve,reject)=>resolve( `butter`));
    const getColdDrinks =new Promise((resolve,reject)=>resolve( `ColdDrinks`));
    const getCoke=new Promise((resolve,reject)=>resolve( `coke`));


    let ticket =await promiseWifeBriningTicks

        console.log("wife :I got the ticets");
        console.log("husband :we shuold go in");
        console.log("wife :no i am hungary");

    let popcorn=await getPopcorn;

    console.log(`husband :i got some ${popcorn}`);
    console.log("husband :Now we shuold go in");
    console.log("wife :no i need butter on my popcorn");

    let butter= await getButter;

    console.log(`husband :i got some ${butter} on popcorn`);
    console.log("husband :anythimg else darling ?");
    console.log("wife :lets go we are getting late");
    console.log(`husband:thank you for the remainder *grins`);

    let ColdDrinks=await getColdDrinks;

    console.log(`husband : no i got some ${ColdDrinks} `);
    console.log("husband :anythimg else darling? You want coldDrinks ");
    console.log("wife :no,lets go we are getting late");
    console.log(`husband:thank you for the remainder *grins`);

    return ticket;
}
preMovie().then((m)=>console.log(`person3 shows ${m}`))

console.log("person4:shows ticket");
console.log("person5:shows ticket");

//ASYNC AWAIT METHOD
const posts = [
    {title: 'post1'},
    {title: 'post2'},
    {title: 'post3'},
    {title: 'post4'}
]
let lastSeen
async function abc(){
function updateLastUserActivityTime (newpost){
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
    lastSeen = new Date()
    // console.log(lastSeen)
    resolve()
    },1000)
  })
}
await updateLastUserActivityTime()


function createPost (){
  return new Promise( (resolve, reject) => {
    //   posts.push(newpost)
    console.log(posts, lastSeen)
      resolve()
  })
}
await createPost(posts)


function deletePost(){
  posts.pop()
  lastSeen = new Date()
}
 deletePost()
}
abc()
// createPost({title: 'post3'})
// createPost({title: 'post4'})
// createPost({title: 'post5'})
// createPost({title: 'post6'})
// deletePost()

// Promise.all([posts, lastSeen])

// .then(values =>

//   console.log(values))