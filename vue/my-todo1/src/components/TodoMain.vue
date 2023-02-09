<template>
  <div class="page">
      <header><h1>Vue Fire todo1</h1></header>
      <main>
        <div class="todos"> 
          <div class="write" v-if="writeState === 'add'">  <!-- 등록 -->
            <input ref="writeArea" type="text" v-model="addItemText"/>
            <button class="btn add" @click="addItem" @keyup.enter="addItem">Add</button>
          </div>
          <div class="write" v-else>  <!-- 수정 -->
            <input ref="writeArea" type="text" v-model="editItemText"/>
            <button class="btn add" @click="editSave" @keyup.enter="editSave">Save</button>
          </div>
          <ul class="list">
            <li v-for="(todo,i) in todos" :key="todo.text">
              <i @click="checkItem(i)" :class="[todo.state === 'yet' ? 'far':'fas','fa-check-square']"></i>
              <span>
                  {{todo.text}}
                <b>
                  <a href="" @click.prevent="editShow(i)">Edit</a>
                  <a href="" @click.prevent="del(i)">Del</a>
                </b>
              </span>
            </li>
          </ul>
        </div>
      </main>
      </div>
  </template>
  
  <script>
  export default {
      data() {
          return {
              writeState: 'add',
              addItemText: '',
              crrEditItem: '',
              editItemText: '',
              todos:[
                  {text: `공부하기`, state: `yet`},
                  {text: '운동하기', state: 'done'},
                  {text: '글쓰기', state: 'done'},
              ]
          }
      },
      methods: {
        addItem() {
          if (this.addItemText === '') return;
          this.todos.push({text: this.addItemText, state: 'yet'})
          this.addItemText = '';
        },
        checkItem(i) {
          if (this.todos[i].state === 'yet') {
            this.todos[i].state= 'done'
          }
          else {
            this.todos[i].state = 'yet'
          }
        },
        editSave() {
          this.todos[this.crrEditItem].text = this.editItemText
          this.writeState = 'add'
        },
        editShow(i) {
          this.crrEditItem = i;
          this.writeState = 'edit'
          this.editItemText = this.todos[i].text
        },
        del(i) {
          this.todos.splice(i,1)
        }
      },
      mounted() {
        this.$refs.writeArea.focus();
      }
  }
  </script>
  
  <style>
  
  </style>