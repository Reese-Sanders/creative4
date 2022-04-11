<template>
<div class="admin container">
  <h1>The Admin Page!</h1>
    <div class="heading">
      <div class="circle">1</div>
      <h2>Add an Feature Blade</h2>
    </div>
    <div class="add">
      <div class="form">
        <input v-model="title" placeholder="Heading">
        
        <p></p>
        <textarea id="desc" v-model="desc"></textarea>
        <p></p>
        <input type="file" name="photo" @change="fileChanged">
        
        <button @click="upload">Upload</button>
      </div>
      <div class="upload" v-if="addItem">
        <h2>{{addItem.title}}</h2>
        <p><i>{{addItem.desc}}</i></p>
        <img :src="addItem.path" />
      </div>
    </div>
    <div class="heading">
      <div class="circle">2</div>
      <h2>Edit/Delete a Feature Blade</h2>
    </div>
    <div class="edit">
      <div class="form">
        <input v-model="findTitle" placeholder="Search">
        <div class="suggestions" v-if="suggestions.length > 0">
          <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectItem(s)">{{s.title}}
          </div>
        </div>
      </div>
      <div class="upload" v-if="findItem">
        <input v-model="findItem.title">
        <p></p>
        <textarea v-model="findItem.desc"></textarea>
        <img :src="findItem.path" />
      </div>
      <div class="actions" v-if="findItem">
        <button @click="deleteItem(findItem)">Delete</button>
        <button @click="editItem(findItem)">Edit</button>
      </div>
    </div>
    <div class="heading">
      <h2>Edit Hours of Operation</h2>
    </div>
    <div class="hours-of-op-container">
      <div class="d-flex my-2">
        <p class="px-2">Monday</p>
        <input type="text" v-model="hours[0]">
      </div>
      <div class="d-flex my-2">
        <p class="px-2">Tuesday</p>
        <input type="text" v-model="hours[1]">
      </div>
      <div class="d-flex my-2">
        <p class="px-2">Wednesday</p>
        <input type="text" v-model="hours[2]">
      </div>
      <div class="d-flex my-2">
        <p class="px-2">Thursday</p>
        <input type="text" v-model="hours[3]">
      </div>
      <div class="d-flex my-2">
        <p class="px-2">Friday</p>
        <input type="text" v-model="hours[4]">
      </div>
      <div class="d-flex my-2">
        <p class="px-2">Saturday</p>
        <input type="text" v-model="hours[5]">
      </div>
      <div class="d-flex my-2">
        <p class="px-2">Sunday</p>
        <input type="text" v-model="hours[6]">
      </div>
      <button @click="updateHours()">Change Hours</button>
    </div>


    <div class="heading">
      <h2>Add a Moped</h2>
    </div>
    <div class="add">
      <div class="form">
        <input v-model="moped.title" placeholder="Moped Name">
        <p></p>
        <input v-model="moped.make" placeholder="Moped Make">
        <p></p>
        <input v-model="moped.engineSize" placeholder="Moped Engine Size">
        <p></p>
        <input v-model="moped.numPeople" type="number" placeholder="Number of riders">
        
        <p></p>
        <textarea id="desc" v-model="moped.otherInfo"></textarea>
        <p></p>
        <input v-model="moped.price" type="number" placeholder="price per hour">
        
        <p></p>
        <input type="file" name="photo" @change="filesChanged" multiple>
        
        <button @click="uploadAll">Upload</button>
      </div>
      <div class="upload" v-if="addItem">
        <h2>{{addItem.title}}</h2>
        <p><i>{{addItem.desc}}</i></p>
        <img :src="addItem.path" />
      </div>
    </div>


    <div class="heading">
      <h2>Edit/Delete a Moped</h2>
    </div>
    <div class="edit">
      <div class="form">
        <input v-model="findTitle" placeholder="Search">
        <div class="suggestions" v-if="suggestionsMopeds.length > 0">
          <div class="suggestion" v-for="s in suggestionsMopeds" :key="s.id" @click="selectMoped(s)">{{s.title}}
          </div>
        </div>
      </div>
      <div class="upload" v-if="findMoped">
        <input v-model="findMoped.title">
        <p></p>
        <input v-model="findMoped.make">
        <p></p>
        <input v-model="findMoped.engineSize">
        <p></p>
        <input v-model="findMoped.numPeople"  type="number">

        <p></p>
        <textarea v-model="findMoped.otherInfo"></textarea>
        <p></p>
        <input v-model="findMoped.price"  type="number">
        <p></p>
        <img v-for="image in findMoped.paths" :key="image" :src="image" />
      </div>
      <div class="actions" v-if="findMoped">
        <button @click="deleteMoped(findMoped)">Delete</button>
        <button @click="editMoped(findMoped)">Edit</button>
      </div>
    </div>
</div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'Admin',
  data() {
    return {
      title: "",
      desc: "a sample description",
      file: null,
      files: [],
      addItem: null,
      items: [],
      findTitle: "",
      findItem: null,
      findMopedTitle: "",
      findMoped: null,
      hours: [
        "9am - 5pm", 
        "9am - 5pm", 
        "9am - 5pm", 
        "9am - 5pm", 
        "9am - 5pm", 
        "9am - 5pm",
        "9am - 5pm"],
      moped: {
        title: "",
        paths: [],
        make: "",
        engineSize: "",
        numPeople: null,
        otherInfo: "",
        price: null,
      },
      mopeds: []
    }
  },
  
  computed: {
    suggestions() {
      console.log(this.items);
      let items = this.items.filter(item => item.title.toLowerCase().startsWith(this.findTitle.toLowerCase()));
      console.log(items);
      return items.sort((a, b) => a.title > b.title);
    },

    suggestionsMopeds() {
      console.log(this.mopeds);
      let mopeds = this.mopeds.filter(moped => moped.title.toLowerCase().startsWith(this.findTitle.toLowerCase()));
      console.log(mopeds);
      return mopeds.sort((a, b) => a.title > b.title);
    },

    
  },

  created() {
    this.getItems();
    this.getHours();
    this.getMopeds();
  },
  methods: {
    
    
    fileChanged(event) {
      this.file = event.target.files[0]
    },

    filesChanged(event) {
      this.files = event.target.files
    },

    selectItem(item) {
      this.findTitle = "";
      this.findItem = item;
    },

    selectMoped(moped) {
      this.findMopedTitle = "";
      this.findMoped = moped;
    },

    async uploadAll() {
      try {
        //console.log("In upload");
        let mopedImgs = [];
        for (let i = 0; i < this.files.length; i++) {
          const formData = new FormData();
          formData.append('photo', this.files[i], this.files[i].name);
          let r1 = await axios.post('/api/photos', formData);
          mopedImgs.push(r1.data.path);
        }
        //console.log(mopedImgs);
        
        
        await axios.post('/api/mopeds', {
          title: this.moped.title,
          paths: mopedImgs,
          make: this.moped.make,
          engineSize: this.moped.engineSize,
          numPeople: this.moped.numPeople,
          otherInfo: this.moped.otherInfo,
          price: this.moped.price
        });
      } catch (error) {
        console.log(error);
      }
    },

    async getMopeds() {
      try {
        let response = await axios.get("/api/mopeds");
        this.mopeds = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },

    async deleteMoped(moped) {
      try {
        await axios.delete("/api/mopeds/" + moped._id);
        this.findMoped = null;
        this.getMopeds();
        return true;
      } catch (error) {
        console.log(error);
      }
    },

    async editMoped(moped) {
      try {
        //console.log(this.find)
        await axios.put("/api/mopeds/" + moped._id, {
          title: moped.title,
          make: moped.make,
          engineSize: moped.engineSize,
          numPeople: moped.numPeople,
          otherInfo: moped.otherInfo,
          price: moped.price
        });
        this.findMoped = null;
        this.getMopeds();
        return true;
      } catch (error) {
        console.log(error);
      }
    },

    async upload() {
      try {
        console.log("In upload")
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name);
        console.log(formData);
        let r1 = await axios.post('/api/photos', formData);
        let r2 = await axios.post('/api/feature', {
          title: this.title,
          path: r1.data.path,
          desc: this.desc,
        });
        this.addItem = r2.data;
      } catch (error) {
        console.log(error);
      }
    },

    async getItems() {
      try {
        let response = await axios.get("/api/feature");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },

    async deleteItem(item) {
      try {
        await axios.delete("/api/feature/" + item._id);
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },

    async editItem(item) {
      try {
        //console.log(this.find)
        await axios.put("/api/feature/" + item._id, {
          title: this.findItem.title,
          desc: this.findItem.desc,
        });
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },

    async updateHours() {
      try {
        
        let response = await axios.put("/api/hours/", {
          hours: this.hours
        });
        console.log(response);
        //console.log(res);
        return true;
      } catch (error) {
        console.log(error);
      }
    },

    async getHours() {
      try {
        let res = await axios.get("/api/hours/");
        let times = res.data[0].hours;
        //console.log(res.data[0].hours);
        if (times.length > 0) {
          this.hours = times;
        }
        return true;
      } catch (error) {
        console.log(error);
      }
    }


  }
}
</script>

<style scoped>
/* Suggestions */
.suggestions {
  width: 200px;
  border: 1px solid #ccc;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
}

.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add,
.edit {
  display: flex;
}

.circle {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #333;
  color: #fff;
  text-align: center
}

/* Form */
input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
}

.form {
  margin-right: 50px;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}
</style>
