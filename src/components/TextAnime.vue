<template>
  <div class="TextAnime">
    <!-- <textarea v-model.lazy="editor" style="width:80%;height:40px;"></textarea> -->
    <transition-group tag="div" class="title">
      <span v-for="el in text" :key="el.id" class="item" v-text="el.text" />
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    autoplay: Boolean
  },
  data() {
    return {
      timer: null,
      index: 0,
      // オリジナルメッセージ
      original: [
        "新卒からIT業界に従事 (3年目の年) ネットワークエンジニアも経験",
        "Web系への転身を決意し、Rails学習をスタート!エンジニアのコミュニティ運営や勉強会を始める！！",
        "1月〜2月スタートアップにてRails開発を経験後 3月よりRubyエンジニアとして就労中！！！"
      ],
      // 分解したメッセージ
      messages: [],
      text: ""
    };
  },
  computed: {
    // editor: {
    //   get() {
    //     return this.text.map(e => e.text).join("");
    //   },
    //   set(text) {
    //     this.text = this.convText(text);
    //   }
    // }
  },
  watch: {
    autoplay(val) {
      clearTimeout(this.timer);
      if (val) {
        this.ticker();
      }
    }
  },
  methods: {
    // オートタイマー
    ticker() {
      this.timer = setTimeout(() => {
        if (this.autoplay) {
          this.index =
            this.index < this.messages.length - 1 ? this.index + 1 : 0;
          this.text = this.messages[this.index];
          this.ticker();
        }
      }, 5000);
    },
    // テキストを分解してオブジェクトに
    convText(text) {
      const alms = {};
      const result = text.split("").map(el => {
        alms[el] = alms[el] ? ++alms[el] : 1;
        return { id: `${el}_${alms[el]}`, text: el };
      });
      return Object.freeze(result); // 監視しない
    }
  },
  created() {
    this.messages = this.original.map(el => this.convText(el));
    this.text = this.messages[0];
    this.ticker();
  }
};
</script>

<style scoped>
.title {
  font-size: 2rem;
}
.item {
  display: inline-block;
  min-width: 0.3em;
}
/* トランジション用スタイル */
.v-enter-active,
.v-leave-active,
.v-move {
  transition: all 1s;
}
.v-leave-active {
  position: absolute;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
