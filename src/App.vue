<template>
  <div id="app">
    <div id="menu">
      <div id="brand">
        <router-link to="/">
          <img src="/images/book.png">
        </router-link>
      </div>
      <div id="side">
        <router-link to="/finished">
          <div class="menu-item browse">
            <span style="font-size: 30px; color: Dodgerblue">
              <i class="fas fa-book"></i>
            </span>
            <p>Finished</p>
          </div>
        </router-link>
        <router-link to="/new">
          <div class="menu-item">
            <span style="font-size: 30px; color: Dodgerblue">
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
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #b84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
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