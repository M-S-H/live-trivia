<template>
  <div class="trivia">
    <h1>Game</h1>
  </div>
</template>

<script>
export default {
  name: 'Trivia',

  data () {
    return {
      // List of available categories
      categories: [],

      // Chat messages
      chats: [],

      // Websocket connection
      connection: null,

      // The current game
      game: null,

      // The state of the game
      gameState: 'chat',

      // Temporary chat message
      tempChatMessage: null,

      // List of players participating
      players: [],

      // The current player,
      player: null
    }
  },

  mounted () {
    // Check for gameId in local storage
    this.gameId = localStorage.getItem('liveTrivia:gameInProgress')

    // If not found, return home
    if (!this.gameId) {
      // this.$router.push('/')
    }
  },

  methods: {
    connectToGame () {
      this.$socket.connect()
      this.connection = this.$socket.channel('game:' + this.gameId, { player_id: this.player.id })
    },

    loadState () {

    },

    saveState () {

    },

    sendMessage () {

    }
  }
}
</script>
