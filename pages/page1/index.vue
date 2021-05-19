<template>
  <div class="wrapper-content wrapper-content--fixed">
    <div class="container">
      <h1>Page 1</h1>
      <button v-on:click="method1" type="button"> Request connect with server</button>
      <p>
        <!--          {{ socket }}-->
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      // status: 'disconnected'
      socket: null,
    }
  },
  mounted() {
    this.socket = this.$nuxtSocket({
          channel: '/index'
        }
    )
    console.log('1', this.socket)

    /* Listen for events: */
    this.socket.on('someEvent', (msg, cb) => {
      /* Handle event */
      console.log(msg)
    })
  },
  methods: {
    method1() {
      /* Emit events */
      console.log('method1method1method1method1')
      this.socket.emit('method1', {
        hello: 'world'
      }, (resp) => {
        console.log('resp',resp)
        /* Handle response, if any */
      })
    }
  }

}
</script>
