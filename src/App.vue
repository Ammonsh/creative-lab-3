<template>
  <div id="app">
    <div id="menu">
      <div id="title">
        <h1>All of Ammon's Books</h1>
      </div>
      <div id="brand">
        <router-link to="/">
          <img src="/images/book.png">
        </router-link>
      </div>
      <div id="side">
        <router-link to="/finished">
          <div class="menu-item browse">
            <span class="icon">
              <i class="fas fa-book"></i>
            </span>
            <p>Finished</p>
          </div>
        </router-link>
        <router-link to="/unfinished">
          <div class="menu-item">
            <span class="icon">
              <i class="fas fa-book-open"></i>
            </span>
            <p>Unfinished</p>
          </div>
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #333;
}

#brand {
  grid-area: 2 / 2;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: 3 / 2;
  display: flex;
  justify-content: center;
}

#side img {
  width: 50px;
}

#title {
  grid-area: 1 / 2;
  margin-left: auto;
  margin-right: auto;
}

.icon {
    font-size: 30px; 
    color: #aaf0d1;
    margin-left: auto;
    margin-right: auto;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
</style>