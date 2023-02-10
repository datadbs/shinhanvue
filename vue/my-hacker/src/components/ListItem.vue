<template>
    <div>
    <ul class="list">
      <li v-for="li in listData" :key="li.id">
          <b>{{ li.time_ago }}</b>
          <template v-if="$route.name === 'news'">
            <span> by <router-link :to="`/user/${li.user}`">{{ li.user }}</router-link></span><br/>
            <a :href="li.url">{{ li.title }}</a>
            <router-link :to="`item?id=${li.id}`"><i>({{ li.comments_count }})</i></router-link>
          </template>
          <template v-else-if="$route.name === 'ask'">
            <span> by <router-link :to="`/user/${li.user}`">{{ li.user }}</router-link></span><br/>
            <router-link :to="li.url">{{ li.title }}<i>({{ li.comments_count }})</i></router-link>
          </template>
          <template v-else>
            <span> by {{ li.user }}</span><br/>
            <a :href="li.url">{{ li.title }}</a>
          </template>
      </li>
    </ul>
  </div>
  </template>
  
  <script>
  export default {
    props: ['listData']
  }
  </script>
  
  <style>
  
  </style>