<template>
<div>
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
  </div>
  <BookList :books="books" />
</div>
</template>

<script>
import BookList from "../components/BookList.vue"
export default {
  name: 'Home',
  components: {
    BookList,
  },
  data() {
    return {
      searchText: '',
    } 
  },
  computed: {
    books() {
      return this.$root.$data.books.filter(book => 
        (book.title.toLowerCase().search(this.searchText) >= 0 
        || book.author.toLowerCase().search(this.searchText) >= 0
        || book.title.search(this.searchText) >= 0 
        || book.author.search(this.searchText) >= 0) 
        && book.finished == true);
    }
  },
}
</script>