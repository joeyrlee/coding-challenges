<template>
  <div>
    <table class="table">
      <thead>
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users">
        <td>{{ user.id }}</td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
      </tr>
      </tbody>
    </table>
    <section class="pagination">
      <button class="first-page-btn" :disabled="isFetching || totalCount === 0 || page === 0" @click="handleFirst">
        first
      </button>
      <button class="previous-page-btn" :disabled="isFetching || totalCount === 0 || page === 0" @click="handlePrevious">
        previous
      </button>
      <button class="next-page-btn" :disabled="isFetching || totalCount === 0 || isLastPage()" @click="handleNext">
        next
      </button>
      <button class="last-page-btn" :disabled="isFetching || totalCount === 0 || isLastPage()" @click="handleLast">
        last
      </button>
    </section>
  </div>
</template>
<script>
  import axios from 'axios';

  const USERS_URL = 'https://example.com/api/users';
  const PAGE_SIZE = 10;

  export default {
    name: 'pagination',
    data() {
      return {
        isFetching: true,
        page: 0,
        totalCount: 0,
        users: [],
      };
    },
    created: function() {
      this.handleGetUsersForPage(0);
    },
    methods: {
      getLastPageNumber: function() {
        if (this.totalCount % 10 === 0) {
          return (this.totalCount / PAGE_SIZE) - 1;
        }
        return Math.floor(this.totalCount / PAGE_SIZE);
      },
      handleGetUsersForPage: function(page) {
        this.isFetching = true;
        axios
          .get(`https://example.com/api/users?page=${page}`)
          .then(({ data: { count, results } }) => {
            this.totalCount = count;
            this.users = results;
            this.isFetching = false;
            this.page = page;
          })
      },
      handleFirst: function() {
        this.handleGetUsersForPage(0);
      },
      handlePrevious: function() {
        this.handleGetUsersForPage(this.page - 1);
      },
      handleNext: function() {
        this.handleGetUsersForPage(this.page + 1);
      },
      handleLast: function() {
        const lastPageNumber = this.getLastPageNumber();
        this.handleGetUsersForPage(lastPageNumber);
      },
      isLastPage: function() {
        return this.page === this.getLastPageNumber()
      }
    }
  };
</script>
