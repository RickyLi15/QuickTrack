const express = require('express')
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config({ path: path.resolve(__dirname, '.env') }) 


const { MongoClient, ServerApiVersion } = require('mongodb');


const userName = process.env.MONGO_DB_USERNAME;
const password = process.env.MONGO_DB_PASSWORD;
const dbcollection = process.env.MONGO_COLLECTION;
const databaseName = process.env.MONGO_DB_NAME;

const databaseAndCollection = {db: databaseName, collection: dbcollection};

const uri = `mongodb+srv://rickyli6937:${password}@cluster0.opvcp3y.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.use(express.json());

async function lookUpPlan(client, databaseAndCollection, date){

    try {
        await client.connect();
        let filter = {date : { $gte: date}};
        const cursor = client.db(databaseAndCollection.db)
        .collection(databaseAndCollection.collection)
        .find(filter);
    
      const result = await cursor.toArray();
      return result;
      }catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
     




}

async function insert(workout) {
  
    try {
        await client.connect();
  
        const result = await insertWorkout(client, databaseAndCollection, workout);
        return result;
  
  } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
  }

async function insertWorkout(client, databaseAndCollection, workout) {
    const result = await client.db(databaseAndCollection.db).collection(databaseAndCollection.collection).insertOne(workout);
    return result;
  


  }


  async function Delete(workout) {
  
    try {
        await client.connect();
  
        const result = await deleteWorkout(client, databaseAndCollection, workout);
        return result;
  
  } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
  }

  async function deleteWorkout(client, databaseAndCollection, workout) {
    const result = await client.db(databaseAndCollection.db).collection(databaseAndCollection.collection).deleteOne(workout);
    return result;
  


  }



app.get("/getData", async (request, response) => {
    const result = await lookUpPlan(client, databaseAndCollection, 23);
    

    response.json(result);
   


})

app.get('/details/w1', (req, res) => {
    res.json({"name": "Bird Dog",
    "image": "https://totalworkout.fitness/img/exercise/1280/frame/10053.2.jpg",
     "description": "The bird dog engages both your abdominal and back muscles, so it’s an ideal core-strengthening move. It also challenges your coordination, balance, and stability.",
     "calories": "0.5",
      "id":"w1"});

})


app.get('/details/w2', (req,res) => {
    res.json(
    {"name": "Bicycle Crunch", 
    "image": "https://images.healthshots.com/healthshots/en/uploads/2022/11/27015912/bicycle-crunches.jpg",
     "description":"This variation on a regular crunch works your obliques, rectus abdominous, and hips.",
      "calories": "0.3",
      "id":"w2"},
  

)})

app.post("/insertWorkout", (request,response) => {

    let {name, id, reps, sets, calories} = request.body;
  
    const variable = {
      name: name,
      id: id,
      reps: reps,
      sets: sets,
      calories: calories,
      date: 24,
    }
   
    insert(variable);

  
    response.send("data received");
  
  

  })


  app.post("/deleteWorkout", (request,response) => {
 
    let {name, id, reps, sets, calories} = request.body;
  
    const variable = {
      name: name,
      id: id,
      reps: reps,
      sets: sets,
      calories: calories,
      date: 24,
    }
   
    Delete(variable);

  
    response.send("data deleted");
  
  
  })



app.get('/details/w3', (req,res) => {
    res.json(
        {"name": "BodyWeight Squats", 
        "image": "https://th.bing.com/th/id/OIP.TZ_s10bZYx_-1YC79JPBHwHaDt?w=312&h=175&c=7&r=0&o=5&dpr=2&pid=1.7", 
        "description":"The squat is a fundamental movement pattern that requires multiple joint and muscle integration. Babies squat perfectly. And then we unlearn this in favor of bending over.", 
        "calories": "0.7",
        "id":"w3"},
  

)})

app.get('/details/w4', (req,res) => {
    res.json(
        {"name": "Lying Leg Curls", 
    "image": "https://i.pinimg.com/originals/68/72/00/6872006bdc06433e9a3fb904bb539164.jpg",
     "description":"The lying leg curl is a popular machine-based exercise for the legs, particularly the hamstrings. It is similar to the seated leg curl, but the open hip angle in the lying leg curl may incorporate more glute and calf activation. It is usually performed for moderate to high reps, such as 8-12 reps per set or more, as part of a leg pre-exhaust or as a muscle-building movement for lower-body training.",
     "calories":"0.8",
      "id":"w4"},
  

)})

app.get('/details/w5', (req,res) => {
    res.json(
        {"name": "T-Raise", "image": "https://storage.googleapis.com/sworkit-assets/images/exercises/standard/middle-frame/t-raise.jpg", 
        "description":"T-raise is another of the top back muscle exercises which requires a resistance band. Hold one handle of a resistance band in either hand while stepping on the middle part of the band with one of your feet. Keep one foot at a distance of a step and a half in front of the other. With your palms gripping the handles in a facedown position, raise your arms to your sides, up to shoulder height while tightening your core.",
        "calories": "0.2",
         "id":"w5"},

  

)})


app.get('/details/w6', (req,res) => {
    res.json(
        {"name": "Pull Ups",
     "image": "https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/12/pull-up-pullup-gym-1296x728-header-1296x728.jpg?w=1155&h=1528", 
     "description":" It's always a good idea to have an overhead pulling movement in your back routine, and the pull-up is one of the best. Each variation has its own advantages: Wide-grip variations are great for the upper lats, while close-grip chins or neutral-grip pull-ups have a greater stretch and overall range of motion.", 
     "calories": "0.3",
     "id":"w6"},
  

)})


app.get('/details/w7', (req,res) => {
    res.json({
    "name": "pushups",
    "image": "https://th.bing.com/th/id/OIP.nHtCLXrpE4s30Z95w_6MaAHaD4?w=305&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    "description":"Traditional pushups are beneficial for building upper body strength. They work the triceps, pectoral muscles, and shoulders. When done with proper form, they can also strengthen the lower back and core by engaging (pulling in) the abdominal muscles.", 
    "calories": "0.2",
    "id":"w7"},
  

)})


app.get('/details/w8', (req,res) => {
    res.json(
        {"name": "Tricep Dips", "image": "https://i.ytimg.com/vi/tvTieWfT20c/maxresdefault.jpg", 
        "description":"For this dip variation, all you need is a chair. This exercise primarily targets the triceps and chest.", 
        "calories": "0.1",
        "id":"w8"},
  

)})


app.get('/details/w9', (req,res) => {
    res.json( {"name": "Corkscrew Stretch",
    "image": "https://i.pinimg.com/736x/08/20/5a/08205a5e06f53b7bb3e412a434c4ffb3--bed-workout-pilates-workout.jpg", 
    "description":"The corkscrew works the abdominal muscles, especially the obliques (the sides of the body). It stretches the hip flexors and massages the lower back. This exercise also challenges the adductor muscles of the inner thighs as you press and hold your legs together throughout.", 
    "calories": "0.3",
    "id":"w9"}
       ,
  

)})




app.get('/api', (req,res) => {
    res.json({"users": ['userOne', 'userTwo', 'userThree']});
})

app.get('/workouts', (req,res) => {
    res.json([{"type": "Core Workouts", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSls86AgnhE0YOEPiN8BM89V0K7SYk_fP_pRV8XGLaL4A&usqp=CAU&ec=48600112", "title":"Core", "id":"e1"},
    {"type": "Leg Workouts", "image": "https://www.themanual.com/wp-content/uploads/sites/9/2022/03/squats.jpg?resize=1200%2C630&p=1", "title":"Leg", "id":"e2"},
    {"type": "Back Workouts", "image": "https://mensfitness.co.uk/wp-content/uploads/sites/2/2023/03/shutterstock_2246071777-2.jpg?w=900", "title":"Back", "id":'e3' },
    {"type": "Arm Workouts", "image": "https://www.mensjournal.com/.image/t_share/MTk2MTM2ODAwNDgyMjM5NjMz/db_main.jpg", "title":"Arm", "id": "e4"}])


})







app.get('/workouts/e1', (req,res) => {

    res.json([{"name": "Bicycle Crunch", 
    "image": "https://images.healthshots.com/healthshots/en/uploads/2022/11/27015912/bicycle-crunches.jpg",
     "description":"This variation on a regular crunch works your obliques, rectus abdominous, and hips.",
     "calories": "0.7",
      "id":"w2"}, {"name": "Bird Dog",
      "image": " https://totalworkout.fitness/img/exercise/1280/frame/10053.2.jpg",
       "description": "The bird dog engages both your abdominal and back muscles, so it’s an ideal core-strengthening move. It also challenges your coordination, balance, and stability.",
       "calories": "0.5",
        "id":"w1"}]);

})

app.get('/workouts/e2', (req,res) => {
    res.json([{"name": "BodyWeight Squats", 
    "image": "https://th.bing.com/th/id/OIP.TZ_s10bZYx_-1YC79JPBHwHaDt?w=312&h=175&c=7&r=0&o=5&dpr=2&pid=1.7", 
    "description":"The squat is a fundamental movement pattern that requires multiple joint and muscle integration. Babies squat perfectly. And then we unlearn this in favor of bending over.", 
    "id":"w3"},
    {"name": "Lying Leg Curls", 
    "image": "https://i.pinimg.com/originals/68/72/00/6872006bdc06433e9a3fb904bb539164.jpg",
     "description":"The lying leg curl is a popular machine-based exercise for the legs, particularly the hamstrings. It is similar to the seated leg curl, but the open hip angle in the lying leg curl may incorporate more glute and calf activation. It is usually performed for moderate to high reps, such as 8-12 reps per set or more, as part of a leg pre-exhaust or as a muscle-building movement for lower-body training.",
      "id":"w4"},
   
])})

app.get('/workouts/e3', (req,res) => {
    res.json([{"name": "T-Raise", "image": "https://storage.googleapis.com/sworkit-assets/images/exercises/standard/middle-frame/t-raise.jpg", 
    "description":"T-raise is another of the top back muscle exercises which requires a resistance band. Hold one handle of a resistance band in either hand while stepping on the middle part of the band with one of your feet. Keep one foot at a distance of a step and a half in front of the other. With your palms gripping the handles in a facedown position, raise your arms to your sides, up to shoulder height while tightening your core.", "id":"w5"},
    {"name": "Pull Ups",
     "image": "https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/12/pull-up-pullup-gym-1296x728-header-1296x728.jpg?w=1155&h=1528", 
     "descrption":" It's always a good idea to have an overhead pulling movement in your back routine, and the pull-up is one of the best. Each variation has its own advantages: Wide-grip variations are great for the upper lats, while close-grip chins or neutral-grip pull-ups have a greater stretch and overall range of motion.", 
     "id":"w6"},
     {"name": "Corkscrew Stretch",
     "image": "https://i.pinimg.com/736x/08/20/5a/08205a5e06f53b7bb3e412a434c4ffb3--bed-workout-pilates-workout.jpg", 
     "descrption":"The corkscrew works the abdominal muscles, especially the obliques (the sides of the body). It stretches the hip flexors and massages the lower back. This exercise also challenges the adductor muscles of the inner thighs as you press and hold your legs together throughout.", 
     "id":"w9"},
  

])})


app.get('/workouts/e4', (req,res) => {
    res.json([{"name": "Pushups", "image": "https://th.bing.com/th/id/OIP.nHtCLXrpE4s30Z95w_6MaAHaD4?w=305&h=180&c=7&r=0&o=5&dpr=2&pid=1.7", 
    "description":"Traditional pushups are beneficial for building upper body strength. They work the triceps, pectoral muscles, and shoulders. When done with proper form, they can also strengthen the lower back and core by engaging (pulling in) the abdominal muscles.", "id":"w7"},
    {"name": "Tricep Dips", "image": "https://i.ytimg.com/vi/tvTieWfT20c/maxresdefault.jpg", 
    "description":"For this dip variation, all you need is a chair. This exercise primarily targets the triceps and chest.", 
    "id":"w8"},
 

])})




app.listen(5000, () => {console.log("Server started on port 5000")})